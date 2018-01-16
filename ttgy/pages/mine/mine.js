var init = require("../../components/footer/footer.js");
// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   target:3
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    init.init(this);
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
    var that=this;
    wx.getStorage({
      key: 'user_info',
      success: function(res) {
        that.setData({
          nickname:res.data.nickname
        })
      },
    });
    wx.getStorage({
      key: 'user_mobile',
      success: function (res) {
        console.log(res.data);
        if (res.data) {
          that.setData({
            bind: true
          })
        }
      },
    })
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
   * 跳转到我的订单页--全部项
   */
  toMineOrder:function(){
    wx.navigateTo({
      url: '../mine_order/mine_order?item=all',
    })
  },

  /**
   * 跳转到我的订单页--待付款项
   */
  toPayOrder: function () {
    wx.navigateTo({
      url: '../mine_order/mine_order?item=pay&status=0',
    })
  },

  /**
   * 跳转到我的订单页--待收货项
   */
  toTransportOrder: function () {
    wx.navigateTo({
      url: '../mine_order/mine_order?item=transport&status=1',
    })
  },

  /**
   * 跳转到我的订单页--待评价项
   */
  toEvaluateOrder: function () {
    wx.navigateTo({
      url: '../mine_order/mine_order?item=evaluate&status=2',
    })
  },

  /**
   * 跳转到我的订单页--退款项
   */
  toRefundOrder: function () {
    wx.navigateTo({
      url: '../mine_order/mine_order?item=refund&status=3',
    })
  },

  /**
   * 跳转到收货地址页面
   */
  toAddress:function(){
    wx.navigateTo({
      url: '../address/address',
    })
  },

  /**
   * 跳转到我的评价页面
   */
  toEvaluateAll:function(){
    wx.navigateTo({
      url: '../evaluate_all/evaluate_all',
    })
  },

  /**
   * 跳转到我的收藏页面
   */
  toCollect:function(){
    wx.navigateTo({
      url: '../m_collect/m_collect',
    })
  },

  /**
   * 跳转到收货常见问题页
   */
  toQuestion:function(){
    wx.navigateTo({
      url: '../m_question/m_question',
    })
  },

  /**
   * 跳转到设置页
   */
  toSet:function(){
    wx.navigateTo({
      url: '../m_set/m_set',
    })
  },

  /**
   * 跳转到我的消息页面
   */
  toMessage: function () {
    wx.navigateTo({
      url: '../m_message/m_message',
    })
  },

  /**
   * 跳转到绑定手机号页面
   */
  toSetPhone: function () {
    wx.navigateTo({
      url: '../m_set_phone/m_set_phone',
    })
  }
})