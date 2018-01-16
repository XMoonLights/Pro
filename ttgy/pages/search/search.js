// pages/search/search.js
var util=require("../../utils/util.js");
var app=getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    search_value:'',
    history: [],
    hot: [],
    result: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    var search_info={
      user_id:app.globalData.user_id
    };
    util.getData(app.globalData.urlID+'search.post.index',search_info).then(function(res){
      console.log(res.data);
      that.setData({
        history:res.data.data.history,
        hot:res.data.data.hot
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
   * 获取搜索栏的值
   */
  searchValue:function(e){
    this.setData({
      search_value:e.detail.value
    })
  },

  /**
   * 搜索
   */
  searchResult:function(words){
    var that=this;
    var search = {
      user_id: app.globalData.user_id,
      words: words
    };
    util.getData(app.globalData.urlID + 'search.post.search', search).then(function (res) {
      console.log(res.data);
      that.setData({
        result:res.data.data
      })
    })
  },
  /**
   * 搜索商品
   */
  searchGoods:function(){
    if(this.data.search_value!=''){
      this.searchResult(this.data.search_value);
    }
  },

  /**
   * 标签搜索
   */
  searchByTips:function(e){
    this.searchResult(e.currentTarget.dataset.value)
  },

  /**
   * 清空历史记录
   */
  clearTips:function(){
    this.setData({
      history:[]
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
