module.exports = {
  signInUrl: `https://api.juejin.cn/growth_api/v1/check_in`, //签到接口
  freeCheckUrl: `https://api.juejin.cn/growth_api/v1/lottery_config/get`, //免费抽奖次数查询
  drawUrl: `https://api.juejin.cn/growth_api/v1/lottery/draw`, //抽奖接口
  headers: {
    // "Upgrade-Insecure-Requests": 1,
    // "User-Agent":
    //   "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36",
    cookie:
      "_ga=GA1.2.2051716032.1657707140; __tea_cookie_tokens_2608=%257B%2522web_id%2522%253A%25227119797909037663782%2522%252C%2522user_unique_id%2522%253A%25227119797909037663782%2522%252C%2522timestamp%2522%253A1657707139866%257D; sid_guard=40c33c1c06d19a1762e743fb936a3e25%7C1660796951%7C31536000%7CFri%2C+18-Aug-2023+04%3A29%3A11+GMT; uid_tt=5618477791f9a001f9bff8e18d779cf0; uid_tt_ss=5618477791f9a001f9bff8e18d779cf0; sid_tt=40c33c1c06d19a1762e743fb936a3e25; sessionid=40c33c1c06d19a1762e743fb936a3e25; sessionid_ss=40c33c1c06d19a1762e743fb936a3e25; sid_ucp_v1=1.0.0-KDE2MTY5ZTYwMGZkNDNjNjk5NjFjYmIzNzQ2NjE4MmUwN2YyYzhlZjgKFwjH0uDA_fXBBRCXgPeXBhiwFDgCQO8HGgJsZiIgNDBjMzNjMWMwNmQxOWExNzYyZTc0M2ZiOTM2YTNlMjU; ssid_ucp_v1=1.0.0-KDE2MTY5ZTYwMGZkNDNjNjk5NjFjYmIzNzQ2NjE4MmUwN2YyYzhlZjgKFwjH0uDA_fXBBRCXgPeXBhiwFDgCQO8HGgJsZiIgNDBjMzNjMWMwNmQxOWExNzYyZTc0M2ZiOTM2YTNlMjU; _tea_utm_cache_2608={%22utm_source%22:%22gold_browser_extension%22}; csrf_session_id=a22250bd217cb4d6e75a8e1ee1f63b20; msToken=5p-Y9JNNcjgvwunWdwLrioFi1Mj_X7Zx4Mty5uviRcGwlPX1wu0zk9HtmIpWM2Hiz8E4_LJFvnQYmpNb9pSKvmmP-iWb6FTx5fwuzdy_ACJ_OZS5tBRnKQ==",
  },
};
