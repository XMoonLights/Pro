// pages/mine_order/mine_order.js
var util = require("../../utils/util.js");
var app = getApp();
Page({

  /**
   * 页面的初始数据
   * orderState:1“待付款”，21“等待商家接单”，22“商家已接单”，23“骑手已接单”，24“骑手已取货”，3“交易完成去评论”，41“退款中”，42“退款成功”
   */
  data: {
    currentTab: 0,//tab切换
    hidden: false,
    winHeight: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.setData({
      select:{
        user_id: app.globalData.user_id,
        page: 1,
        page_size: 999
      }
    })
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winHeight: res.windowHeight
        })
      },
    });
    this.currentTab(options.item);
    
    if (options.status) {
      this.orderState(options.status);
    } else {
      this.allOrder()
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
  switchNav: function (e) {
    var that = this;
    if (that.data.currentTab == e.target.dataset.current) {
      return false;
    } else {
      if(e.currentTarget.dataset.item=="all"){
        that.allOrder()
      }else if(e.currentTarget.dataset.item=="pay"){
        that.orderState(0)
      }else if(e.currentTarget.dataset.item=="transport"){
        that.orderState(1)
      } else if (e.currentTarget.dataset.item == "evaluate") {
        that.orderState(2)
      } else{
        that.orderState(3)
      }
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  swiperChange: function (e) {
    this.setData({
      currentTab: e.detail.current
    })
  },

  /**
   * 查询所有订单
   */
  allOrder:function(){
    var that=this;
    util.getData(app.globalData.urlID + 'order.get.list', that.data.select).then(function (res) {
      // console.log(res.data.data);
      that.setData({
        order: res.data.data
      })
    })
  },

  /**
   * 查询订单状态
   */
  orderState:function(status){
    var that=this;
    var select=that.data.select;
    select.status=status;
    util.getData(app.globalData.urlID + 'order.get.status_list', select).then(function (res) {
      // console.log(res.data.data);
      that.setData({
        order: res.data.data
      })
    })
  },

  /**
   * 点击弹框取消按钮，触发事件
   */
  cancel: function () {
    this.setData({
      hidden: false
    })
  },

  /**
   * 点击弹框确定按钮，触发回调事件
   */
  confirm: function () {
    var that=this;
    console.log(this.data.orderNum);
    var cancel={
      user_id:app.globalData.user_id,
      sn2:that.data.orderNum
    };
    util.getData(app.globalData.urlID +'order.post.cancel',cancel).then(function(res){
      // console.log(res.data);
      var order=that.data.order;
      // console.log(that.data.order);
      order.splice(that.data.order_index, 1);
      that.setData({
        order: order,
        hidden: false
      });
    })
  },
  showModal: function (e) {
    this.setData({
      hidden: (this.data.hidden == true ? false : true),
      orderNum:e.currentTarget.dataset.order,
      order_index:e.currentTarget.dataset.index
    })
  },

  /**
   * 设置currentTab初始值
   */
  currentTab: function (item) {
    var that = this;
    /**
     * 返回一个SelectorQuery对象实例。
     * 可以在这个实例上使用select等方法选择节点，并使用boundingClientRect等方法选择需要查询的节点信息
     */
    var query = wx.createSelectorQuery();
    query.selectAll('.tab-item').boundingClientRect(function (res) {
      var len = res.length;
      for (var i = 0; i < len; i++) {
        if (item == res[i].dataset.item) {
          that.setData({
            currentTab: i
          });
        }
      }
    }).exec()
  },

  /**
   * 跳转到评价页面
   */
  toEvaluate: function (e) {
    wx.navigateTo({
      url: '../evaluate/evaluate?index=' + e.currentTarget.dataset.index
    })
  },

  /**
   * 跳转到订单详情页
   */
  toOrderDetails: function (e) {
    wx.navigateTo({
      url: '../order_details/order_details?orderId=' + e.currentTarget.dataset.ordernum + '&state=' + e.currentTarget.dataset.state,
    })
  }
})