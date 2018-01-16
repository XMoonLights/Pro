// pages/m_set_phone/m_set_phone.js
var util = require("../../utils/util.js");
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    code: true,
    num: 60,
    bind:false,
    test:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.openid) {
      this.setData({
        openid: options.openid,
        nickname: options.nickname,
        bind: true
      })
    }
    console.log(this.data.bind);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  /**
   * 获取输入手机号
   */
  getMobile: function (e) {
    this.setData({
      mobile: e.detail.value
    })
  },

  /**
   * 获取输入验证码
   */
  getCode: function (e) {
    this.setData({
      code: e.detail.value,
      prompt: ''
    });
  },

  /**
   * 获取短信验证码
   */
  setCode: function (e) {
    var that = this;
    var mobile = {
      mobile: this.data.mobile
    };
    util.getData(app.globalData.urlID + 'user.post.telcode', mobile).then(function (res) {
      // console.log(res.data);
      var timer = null;
      that.setData({
        code: false
      });
      timer = setInterval(function () {
        var num = that.data.num;
        num--;
        that.setData({
          num: num
        });
        if (num == 0) {
          clearInterval(timer);
          that.setData({
            code: true,
            num: 60
          })
        }
      }, 1000)
    })
  },

  /**
   * 验证
   */
  test: function (mobile) {
    var regu = "^1[0-9]{10}$";
    var re = new RegExp(regu);
    if (mobile==undefined||mobile=="") {
      this.setData({
        prompt: '手机号码不能为空'
      })
    }else if (!re.test(mobile)) {
      this.setData({
        prompt: '手机号码不存在'
      })
    } else {
      this.setData({
        test: true
      })
    }
  },

  /**
   * 绑定手机号
   */
  bindMobile: function () {
    var that = this;
    that.test(that.data.mobile);
    if (that.data.test) {
      if (that.data.code.length > 0) {
        var mobile = {
          code: that.data.code,
          mobile: that.data.mobile,
          openid: that.data.openid,
          nickname: that.data.nickname,
          client: app.globalData.client
        };

        util.getData(app.globalData.urlID + 'user.post.set_mobile', mobile).then(function (res) {
          // console.log(res.data);
          if (res.data.code === 3) {
            wx.setStorage({
              key: 'user_id',
              data: res.data.data.id,
            });
            wx.navigateBack({
              url: '../index/index'
            })
          } else {
            that.setData({
              prompt: '验证码错误'
            })
          }
        })
      } else {
        that.setData({
          prompt: '验证码不能为空'
        });
      }

    }
  },

  /**
   * 解绑手机号
   */
  changeMobile: function () {
    var that = this;
    that.test(that.data.mobile);
    if (that.data.test) {
      if (that.data.code.length > 0) {
        var mobile = {
          user_id: app.globalData.user_id,
          code: that.data.code,
          mobile: that.data.mobile
        };

        util.getData(app.globalData.urlID + 'user.post.setmobile', mobile).then(function (res) {
          // console.log(res.data);
          if (res.data.code === 3) {
            wx.setStorage({
              key: 'user_mobile',
              data: that.data.mobile,
            })
            wx.navigateBack({
              url: '../index/index'
            })
          } else {
            that.setData({
              prompt: '验证码错误'
            })
          }
        })
      } else {
        that.setData({
          prompt: '验证码不能为空'
        });
      }

    }
  }
})