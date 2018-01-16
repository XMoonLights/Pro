// pages/m_collect/m_collect.js
var util = require("../../utils/util.js");
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    collect: [
      {
        id: 1,
        imageUrl: '../../public/images/goods_list_01.png',
        title: '美国进口红布林1 ',
        content: '酸酸甜甜的小鲜肉 ',
        price: 69,
        oldPrice: 112
      },
      {
        id: 2,
        imageUrl: '../../public/images/goods_list_01.png',
        title: '美国进口红布林2 ',
        content: '酸酸甜甜的小鲜肉 ',
        price: 69,
        oldPrice: 112
      },
      {
        id: 3,
        imageUrl: '../../public/images/goods_list_01.png',
        title: '美国进口红布林3 ',
        content: '酸酸甜甜的小鲜肉 ',
        price: 69,
        oldPrice: 112
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var collect_all = {
      user_id: app.globalData.user_id,
      page: 1,
      page_size: 5
    };
    util.getData(app.globalData.urlID + 'item.post.favorites_list', collect_all).then(function (res) {
      // console.log(res.data);
      that.setData({
        collect: res.data.data
      })
    })
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
   * 删除收藏商品
   */
  deleteCollect: function (e) {
    var that = this;
    var collect = {
      user_id: app.globalData.user_id,
      item_id: e.currentTarget.dataset.id
    };
    util.getData(app.globalData.urlID + 'item.post.remove_favorites', collect).then(function (res) {
      // console.log(res.data);
      var collect = that.data.collect;
      // console.log(e.currentTarget.dataset.id);
      for (var i = 0; i < that.data.collect.length; i++) {
        if (e.currentTarget.dataset.id == that.data.collect[i].id) {
          collect.splice(i, 1);
          that.setData({
            collect: collect
          })
        }
      }
    })
  },

  /**
   * 跳转到商品详情页
   */
  toGoodsDetails:function(e){
    wx.navigateTo({
      url: '../goods_details/goods_details?item='+e.currentTarget.dataset.id,
    })
  }
})