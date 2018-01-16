const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

//封装数据请求方法
function getData(url,data) {
  return new Promise(function (resolve, reject) {
    wx.request({
      url: url,
      method: "POST",
      data: data,
      header: {//post的请求头不同于get的"application/json"
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        //console.log(res);
        resolve(res);
      }
    })
  })
}

//封装图片等比缩放
function imageUtil(e) {
  var imageSize = {};
  var originalWidth = e.detail.width;//图片原始宽度
  var originalHeight = e.detail.height;//图片原始高度
  var originalScale = originalHeight / originalWidth;//图片高宽比
  //获取屏幕宽高
  wx.getSystemInfo({
    success: function (res) {
      var windowWidth = res.windowWidth;
      var windowHeight = res.windowHeight;
      var windowScale = windowHeight / windowWidth;//屏幕高宽比
      if (originalScale < windowScale) {
        //图片缩放后的宽为屏幕宽
        imageSize.imageWidth = windowWidth;
        imageSize.imageHeight = (windowWidth * originalHeight) / originalWidth;
      } else {
        //图片缩放后的高为屏幕高
        imageSize.imageHeight = windowHeight;
        imageSize.imageWidth = (windowHeight * originalWidth) / originalHeight;
      }
    },
  })
  return imageSize;
}

module.exports = {
  formatTime: formatTime,
  getData: getData,
  imageUtil: imageUtil
}
