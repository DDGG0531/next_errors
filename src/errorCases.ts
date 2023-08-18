const errorCases = {
  e1: "mounted時出錯",
  e2: "useEffect 中的api噴錯",
  e3: "useEffect 中的api回傳值漏key",
  e4: "useEffect 中的api回傳值格式錯誤: 預期array,回傳數字 ",
  e5: "click 造成function噴錯",
  e6: "click 造成template噴錯",
  e7: "can not read property of undefined",
  e8: "click本身噴錯",
  e9: "api錯誤但是被catch",
  e10: "get api path 錯誤",
  e11: "post api body 錯誤",
  e12: "api出錯後,先記sentry,再拋出error一次",
  e13: "相對完美的錯誤處理,呼叫端catch非axios錯誤或指定axios錯誤．指定axios錯誤：使用transformRequest，並在catch做處理",
  e14: "模仿後端api的錯誤捕捉方式",
};

export default errorCases;
