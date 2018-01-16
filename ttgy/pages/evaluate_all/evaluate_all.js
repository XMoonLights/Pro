// pages/evaluate_all/evaluate_all.js
var util=require("../../utils/util.js");
var app=getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    evaluates:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    var evaluate={
      user_id:app.globalData.user_id
    };
    util.getData(app.globalData.urlID+'user.get.evallist',evaluate).then(function(res){
      console.log(res.data);
      that.setData({
        evaluates:res.data.data
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
  
  }
})