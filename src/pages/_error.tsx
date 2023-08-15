/**
 * NOTE: This requires `@sentry/nextjs` version 7.3.0 or higher.
 *
 * NOTE: If using this with `next` version 12.2.0 or lower, uncomment the
 * penultimate line in `CustomErrorComponent`.
 *
 * This page is loaded by Nextjs:
 *  - on the server, when data-fetching methods throw or reject
 *  - on the client, when `getInitialProps` throws or rejects
 *  - on the client, when a React lifecycle method throws or rejects, and it's
 *    caught by the built-in Nextjs error boundary
 *
 * See:
 *  - https://nextjs.org/docs/basic-features/data-fetching/overview
 *  - https://nextjs.org/docs/api-reference/data-fetching/get-initial-props
 *  - https://reactjs.org/docs/error-boundaries.html
 */
import * as Sentry from "@sentry/nextjs";
import { NextPage } from "next";

// https://nextjs.org/docs/advanced-features/custom-error-page
// 這是Nextjs內建的錯誤頁面
// 1. nextjs's server端(getServerSideProps...)出錯
// 2. Client端渲染出錯 => 等效於全域ErrorBoundary
// 只要進來這邊，就會報sentry
// PS: pages/_error.js僅用於生產，在開發中，您將在調用堆棧中收到錯誤，以了解錯誤的來源。

interface Props {
  statusCode: number | undefined;
}

const CustomErrorComponent: NextPage<Props> = ({ statusCode }) => {
  // If you're using a Nextjs version prior to 12.2.1, uncomment this to
  // compensate for https://github.com/vercel/next.js/issues/8592
  // Sentry.captureUnderscoreErrorException(props);

  return (
    <div className="flex h-screen items-center justify-center bg-white">
      <div className="flex h-[126px] w-[275px] gap-3 rounded bg-white p-5 text-danger shadow-basic">
        <p className="text-sm font-bold leading-7">
          很抱歉，系統發生不預期錯誤
          <br />
          請重新再試
          <br />
          {statusCode && `錯誤代碼: ${statusCode}`}
        </p>
      </div>
    </div>
  );
};

CustomErrorComponent.getInitialProps = async (contextData) => {
  // In case this is running in a serverless function, await this in order to give Sentry
  // time to send the error before the lambda exits
  await Sentry.captureUnderscoreErrorException(contextData);

  const { res, err } = contextData;
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default CustomErrorComponent;
