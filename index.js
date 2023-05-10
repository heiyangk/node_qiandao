const schedule = require("node-schedule");
const axios = require("axios");
const config = require("./config");

//免费抽奖次数
const freecjCount = () => {
  axios({
    url: config.freeCheckUrl,
    method: "get",
    headers: config.headers,
  }).then((res) => {
    if (res.data.err_no == 0) {
      if (res.data.data.free_count > 0) {
        //查询免费签到次数
        setTimeout(() => {
          //抽奖
          cj();
        }, Math.random() * 1000 * 60 * 10);
      } else {
        console.log("没有免费抽奖次数了");
      }
    } else {
      console.log(res.data.err_msg);
    }
  });
};
//抽奖
const cj = () => {
  axios({
    url: config.drawUrl,
    method: "post",
    headers: config.headers,
  }).then((res) => {
    if (res.data.err_no == 0) {
      console.log(res.data);
    } else {
      console.log(res.data.err_msg);
    }
  });
};
//签到
const qd = () => {
  axios({
    url: config.signInUrl,
    method: "post",
    headers: config.headers,
  })
    .then((res) => {
      if (res.data.err_no == 0) {
        console.log(
          `签到成功,获取${res.data.data.incr_point}矿石,总计${res.data.data.sum_point}矿石`
        );
      } else {
        console.log(res.data.err_msg);
      }
      //查询免费签到次数
      setTimeout(() => {
        freecjCount();
      }, (Math.random() + 1) * 1000 * 20);
    })
    .catch(() => {
      console.log("签到错误");
    });
};

//定时任务
schedule.scheduleJob("0 45 8 * * *", () => {
  console.log(new Date() + "开始执行");
  setTimeout(() => {
    qd();
  }, Math.random() * 10 * 60 * 1000);
});
