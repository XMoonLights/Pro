//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs);
  },
  getUserInfo: function (cb) {
    var that = this;
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口  
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo;
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      });
    }
  },
  setUser:function(storageName,key,value,url){
    wx.getStorage({
      key: storageName,
      success: function(res) {
        var userInfo=res.data;
        userInfo[key]=value;
        wx.setStorage({
          key: storageName,
          data: userInfo,
        });
        if(url){
          wx.navigateBack({
            url: url
          })
        }
      },
    })
  },
  globalData: {
    userInfo: null,
    urlID: 'https://open.connect-city.com.cn/apiv1?action=',
    urlID1: 'http://fast.com/apiv1?action=',
    province_id: 1,
    city_id: 2,
    user_id: 2,
    modal: false,
    client:'wx',
    awardsConfig: {},
    runDegs: 0
  }
})