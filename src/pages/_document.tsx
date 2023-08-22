import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-3N7RHFYQ4G"></Script>
      <Script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-3N7RHFYQ4G');
      </Script>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
