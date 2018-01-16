// pages/pay_success/pay_success.js
var util=require("../../utils/util.js");
var app =getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inventory:[],
    pay_fail:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    that.setData({
      fail:options.fail
    })
    var pay_success={
      user_id:app.globalData.user_id,
      pay_id:options.payId
    }
    util.getData(app.globalData.urlID +'order.pay.list',pay_success).then(function(res){
      console.log(res.data);
      that.setData({
        inventory:res.data.data
      })
    })
    if(options.fail){
      that.setData({
        pay_fail:true
      })
    }
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
   * 跳转到我的订单页--待收货项
   */
  toMineOrder: function () {
    if(this.data.fail){
      wx.redirectTo({
        url: '../mine_order/mine_order?item=pay&status=0',
      })
    }else{
      wx.redirectTo({
        url: '../mine_order/mine_order?item=transport&status=1',
      })
    }
  },
  toHome:function(){
    wx.reLaunch({
      url: '../index/index',
    })
  }
})