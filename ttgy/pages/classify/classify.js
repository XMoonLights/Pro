// pages/classify/classify.js
var util = require("../../utils/util.js");
var init = require("../../components/footer/footer.js");
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    target:1,
    goods: [],
    page: 2
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(app.globalData);
    init.init(this);
    this.tips(options.tips);
    // this.clickTips(options.tips);
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
   * 初始化商品分类
   */
  tips: function (item) {
    var that = this;
    var data = {
      page: 1,
      page_size: 999
    };
    util.getData(app.globalData.urlID + "item.class.list", data).then(function (res) {
      // console.log(res.data)
      that.setData({
        tips: res.data.data
      });
      if (item != undefined) {
        var tips = that.data.tips;
        for (var i = 0; i < tips.length; i++) {
          if (tips[i].id == item) {
            that.setData({
              currentTab: i,
              tips_id: tips[i].id
            });
            that.goodsList(tips[i].id)
          }
        }
      } else {
        that.setData({
          currentTab: 0,
          tips_id: that.data.tips[0].id
        })
        that.goodsList(that.data.tips_id)
      }
    })
  },

  /**
   * 初始商品列表
   */
  goodsList: function (id) {
    var that = this;
    var classify = {
      user_id: app.globalData.user_id,
      cate_id: id,
      city_id: app.globalData.city_id,
      page: 1,
      page_size: 5
    };
    util.getData(app.globalData.urlID + 'item.cate.list', classify).then(function (res) {
      // console.log(res.data);
      that.setData({
        goods: res.data.data
      })
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  switchNav: function (e) {
    var that = this;
    if (that.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.goodsList(e.currentTarget.dataset.tips);
      that.setData({
        currentTab: e.target.dataset.current,
        page: 2,
        scrollTop: 0,
        showLoading: false
      });
    }
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
   * 加载更多
   */
  loadMore: function (e) {
    var that = this;
    var classify = {
      user_id: app.globalData.user_id,
      city_id: app.globalData.city_id,
      cate_id: e.currentTarget.dataset.tips,
      page: that.data.page++,
      page_size: 5,
    };
    util.getData(app.globalData.urlID + "item.cate.list", classify).then(function (res) {
      if (res.data.data.length == 0) {
        that.setData({
          showLoading: true
        })
      }
      that.setData({
        goods: that.data.goods.concat(res.data.data)
      })
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
  }
})