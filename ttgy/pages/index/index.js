var util = require("../../utils/util.js");
var init = require("../../components/footer/footer.js");

//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    page: 2,
    showLoading: false,
    target: 0,
    user_id: ''
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var that = this;
    init.init(that);

    app.getUserInfo(function(userInfo){
      that.setData({
        userInfo:userInfo
      })
    })

  },
  onShow:function(){
    var that=this;

    that.banner(app.globalData.city_id);
    that.tips();
    that.titleAD(app.globalData.city_id);
    that.favourableAD(app.globalData.city_id);
    that.newAD(app.globalData.city_id);
    that.newGoods(app.globalData.city_id);
    that.hotGoods(app.globalData.city_id);
    // wx.getStorage({
    //   key: 'user_id',
    //   success: function (res) {
    //     that.getUser(res.data)
    //   },
    //   fail: function () {
    //     that.userLogin();
    //   }
    // })
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  /**
   * 用户登录
   */
  userLogin:function(){
    var that=this;
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        var code = res.code;
        wx.request({
          url: "https://api.weixin.qq.com/sns/jscode2session",
          method: "GET",
          data: {
            appid: 'wx5313a9e9e1ba4b5d',
            secret: '683f6fbd6e3c768fe10547e59b6cbbaf',
            grant_type: 'authorization_code',
            js_code: code
          },
          header: {
            "Content-Type": "application/json"
          },
          success: function (res) {
            // console.log(res.data);
            if (res.data.openid != null && res.data.openid != undefined) {
              var openid = res.data.openid;
              wx.setStorage({
                key: 'open_id',
                data: openid,
              });
              wx.getUserInfo({
                success: function (res) {
                  wx.request({
                    url: app.globalData.urlID + 'user.post.openid',
                    data: {
                      client: 'wx',
                      openid: openid
                    },
                    method: 'POST',
                    header: {
                      "Content-Type": "application/x-www-form-urlencoded"
                    },
                    success: function (res) {
                      console.log(res.data);
                      if (res.data.data == null) {
                        // console.log(app.globalData.userInfo.nickName)
                        wx.showModal({
                          content: '新用户需绑定手机号',
                          success: function (res) {
                            if (res.confirm) {
                              // 获取用户信息
                              wx.navigateTo({
                                url: '../m_set_phone/m_set_phone?openid=' + openid + '&nickname=' + that.data.userInfo.nickName,
                              })
                            } else {

                            }
                          }
                        })

                      } else {
                        wx.setStorage({
                          key: 'user_id',
                          data: res.data.data.id,
                        });
                        wx.setStorage({
                          key: 'user_info',
                          data: res.data.data.info,
                        });
                        wx.setStorage({
                          key: 'user_mobile',
                          data: res.data.data.mobile,
                        })

                        app.globalData.user_id = res.data.data.status.user_id;
                        console.log(app.globalData);
                        app.globalData.city_id = res.data.data.status.city_id;
                        that.setData({
                          modal: false,
                          city_name: (app.globalData.city_id==2?'武汉':'黄石')
                        });
                        that.banner(app.globalData.city_id);
                        that.tips();
                        that.titleAD(app.globalData.city_id);
                        that.favourableAD(app.globalData.city_id);
                        that.newAD(app.globalData.city_id);
                        that.newGoods(app.globalData.city_id);
                        that.hotGoods(app.globalData.city_id);
                      }
                    }
                  })
                },
                fail: function (res) {
                  wx.showModal({
                    title: '',
                    content: '部分功能需用户授权才能正常使用',
                    success: function (res) {
                      if (res.confirm) {
                        wx.openSetting({
                          success: (res) => {
                            console.log("授权结果")
                          }
                        })
                      } else if (res.cancel) {
                        console.log("用户点击取消")
                      }
                    }
                  })
                }
              })
            } else {
              console.log("获取用户openId失败");
            }
          }
        })
      }
    })
  },

  /**
   * 根据user_id查询个人信息
   */
  getUser:function(userId){
    var that=this;
    var userInfo = {
      user_id: userId
    }
    app.globalData.user_id = userId;
    util.getData(app.globalData.urlID + 'user.post.user_id', userInfo).then(function (res) {
      // console.log(res.data);
      wx.setStorage({
        key: 'user_info',
        data: res.data.data.info,
      });
      wx.setStorage({
        key: 'user_mobile',
        data: res.data.data.mobile,
      })
      var city = res.data.data.status;
      if (city == null) {
        var cityData = {
          user_id: userId,
          pid: app.globalData.province_id,
          page: 1,
          page_size: 5
        };
        util.getData(app.globalData.urlID + 'data.province.pid', cityData).then(function (res) {
          // console.log(res.data.data)
          that.setData({
            city: res.data.data,
            modal: true
          })
        });
      } else {
        app.globalData.city_id=city.city_id;
        that.setData({
          city_name:res.data.data.status.city_name.split('市')[0]
        });
        that.banner(city.city_id);
        that.tips();
        that.titleAD(city.city_id);
        that.favourableAD(city.city_id);
        that.newAD(city.city_id);
        that.newGoods(city.city_id);
        that.hotGoods(city.city_id);
      }
    })
  },

  /**
   * 选择所在城市
   */
  chooseCity: function (e) {
    var that = this;
    var setCity = {
      user_id: app.globalData.user_id,
      province_id: this.data.province_id,
      city_id: e.currentTarget.dataset.city.id
    }
    util.getData(app.globalData.urlID + 'data.set.user_status', setCity).then(function (res) {
      app.globalData.city_id = res.data.data.city_id;
      // console.log(res.data.data.city_id);
      that.setData({
        city_name: e.currentTarget.dataset.name,
        modal: false
      });
      wx.setStorage({
        key: 'city_id',
        data: res.data.data.city_id,
      });
      that.banner(res.data.data.city_id);
      that.tips();
      that.titleAD(res.data.data.city_id);
      that.favourableAD(res.data.data.city_id);
      that.newAD(res.data.data.city_id);
      that.newGoods(res.data.data.city_id);
      that.hotGoods(res.data.data.city_id);
    })
  },

  /**
   * 跳转到搜索页面
   */
  toSearch: function () {
    wx.navigateTo({
      url: '../search/search',
    })
  },

  /**
   * 跳转到商品详情页
   */
  toDetails: function (e) {
    wx.navigateTo({
      url: '../goods_details/goods_details?item=' + e.currentTarget.dataset.goodsid,
    })
  },

  /**
   * 加入购物车
   */
  joinCar: function (e) {
    console.log(e.currentTarget.dataset.id);
    var goodsData = {
      num: 1,
      user_id: app.globalData.user_id,
      item_id: e.currentTarget.dataset.id
    }
    util.getData(app.globalData.urlID + 'item.cart.add', goodsData).then(function (data) {
      console.log(data)
    })
  },

  /**
   * 加载更多
   */
  loadMore: function (e) {
    var that = this;
    var hot_goods = {
      page: that.data.page++,
      page_size: 5,
      city_id: app.globalData.city_id
    };
    util.getData(app.globalData.urlID + "item.hot.list", hot_goods).then(function (data) {
      if (data.data.data.length == 0) {
        that.setData({
          showLoading: true
        })
      }
      that.setData({
        hotGoods: that.data.hotGoods.concat(data.data.data)
      })
    })
  },
  /**
   * 初始化banner图
   */
  banner: function (city) {
    var that = this;
    var images = [];
    var data = {
      type: 1,
      page: 1,
      page_size: 3,
      city_id: city
    };
    util.getData(app.globalData.urlID + "base.ad.list", data).then(function (res) {
      for (var i = 0; i < res.data.data.length; i++) {
        images.push(res.data.data[i].img_url);
      }
      that.setData({
        images: images
      })
    })
  },
  /**
   * 初始化今日头条
   */
  titleAD: function (city) {
    var that = this;
    var ad_title = [];
    var data = {
      page: 1,
      page_size: 3,
      city_id: city
    };
    util.getData(app.globalData.urlID + "base.news.list", data).then(function (res) {
      for (var i = 0; i < res.data.data.length; i++) {
        ad_title.push(res.data.data[i].title);
      }
      that.setData({
        ad_title: ad_title
      })
    })
  },
  /**
   * 初始化广告位
   */
  favourableAD: function (city) {
    var that = this;
    var data = {
      type: 2,
      page: 1,
      page_size: 2,
      city_id: city
    };
    util.getData(app.globalData.urlID + "base.ad.list", data).then(function (res) {
      that.setData({
        favourable: res.data.data
      })
    })
  },
  /**
   * 初始化新品广告位
   */
  newAD: function (city) {
    var that = this;
    var data = {
      type: 4,
      page: 1,
      page_size: 1,
      city_id: city
    };
    util.getData(app.globalData.urlID + "base.ad.list", data).then(function (res) {
      that.setData({
        ad: res.data.data[0].img_url
      })
    })
  },
  /**
   * 初始化Tips按钮组
   */
  tips: function () {
    var that = this;
    var data = {
      page: 1,
      page_size: 4
    };
    util.getData(app.globalData.urlID + "item.class.list", data).then(function (res) {
      that.setData({
        tips: res.data.data
      })
    })
  },
  /**
   * 初始化新品
   */
  newGoods: function (city) {
    var that = this;
    var data = {
      page: 1,
      page_size: 3,
      city_id: city
    };
    util.getData(app.globalData.urlID + "item.newest.list", data).then(function (res) {
      that.setData({
        newGoods: res.data.data
      })
    })
  },
  /**
   * 初始化热卖单品
   */
  hotGoods: function (city) {
    var that = this;
    var data = {
      page: 1,
      page_size: 5,
      city_id: city
    };
    util.getData(app.globalData.urlID + "item.hot.list", data).then(function (res) {
      that.setData({
        hotGoods: res.data.data
      })
    })
  },

  /**
   * 跳转到分类页面
   */
  toClassify: function (e) {
    wx.redirectTo({
      url: '../classify/classify?tips=' + e.currentTarget.dataset.tips,
    })
  }
})
