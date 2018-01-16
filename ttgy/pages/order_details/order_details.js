// pages/order_details/order_details.js
var util = require("../../utils/util.js");
var app = getApp();

Page({

  data: {
    show_logistical:false,
    logistical:[
      {
        id:1,
        title:'客服沟通中',
        date:'2016-07-30 08:36:52'
      },
      {
        id: 2,
        title: '售后资料审核',
        date: '2016-07-29 08:36:52'
      },
      {
        id: 3,
        title: '用户提交售后申请',
        date: '2016-07-28 08:36:52'
      }
    ],
    interestGoods: [],
    hidden: false,
    phone_call: false,
    order_state_num: 1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    this.setData({
      order_state: options.state//获取订单类型，呈现不同详情页
    })
    // this.tale();
    var order_details = {
      user_id: app.globalData.user_id,
      sn2: options.orderId
    }
    util.getData(app.globalData.urlID + 'order.get.detail', order_details).then(function (res) {
      console.log(res.data);
      that.setData({
        details: res.data.data
      })
    });
    that.interestGoods();
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
   * 计算总价
   */
  tale: function () {
    var sum = 0;
    var len = this.data.inventory.length;
    for (var i = 0; i < len; i++) {
      sum += parseFloat(this.data.inventory[i].price.toFixed(2));
    }
    this.setData({
      total: sum,
      pocket: parseFloat((sum + this.data.carriage).toFixed(2))
    })
  },

  /**
   * 
   */
  showLogistical:function(e){
    this.setData({
      show_logistical:(this.data.show_logistical==false?true:false)
    })
  },

  /**
   * 点击弹框取消按钮，触发事件
   */
  cancel: function () {
    this.setData({
      hidden: false,
      phone_call: false
    })
  },

  /**
   * 点击弹框确定按钮，触发回调事件
   */
  confirm: function () {

  },
  callService: function () {
    var that = this;
    wx.makePhoneCall({
      phoneNumber: that.data.details.order.mobile,
      success: function (res) {
        that.setData({
          phone_call: false
        })
        console.log("联系客服")
      }
    })
  },
  showModal: function (e) {
    if (e.currentTarget.dataset.modal == "call") {
      this.setData({
        phone_call: (this.data.phone_call == true ? false : true)
      })
    } else {
      this.setData({
        hidden: (this.data.hidden == true ? false : true)
      })
    }
  },

  /**
   * 跳转到评价页
   */
  toEvaluate: function () {
    wx.navigateTo({
      url: '../evaluate/evaluate',
    })
  },

  /**
   * 跳转到申请售后页面
   */
  toSaleAfter:function(){
    wx.navigateTo({
      url: '../sale_after/sale_after',
    })
  },

  /**
   * 推荐商品
   */
  interestGoods: function () {
    var that = this;
    var data = {
      page: 1,
      page_size: 2,
      city_id: app.globalData.city_id,
      type: 1
    };
    util.getData(app.globalData.urlID + "item.hot.list", data).then(function (res) {
      // console.log(res.data);
      that.setData({
        interestGoods: res.data.data
      })
    })
  },

  /**
   * 加入购物车
   */
  joinCar: function (e) {
    var that = this;
    var goodsData = {
      num: 1,
      user_id: app.globalData.user_id,
      item_id: e.currentTarget.dataset.id
    }
    util.getData(app.globalData.urlID + 'item.cart.add', goodsData).then(function (data) {
      // console.log(data)
    })
  },

  /**
   * 支付
   */
  toPay:function(){
    var pay={
      user_id:app.globalData.user_id,
      order_no:this.data.details.order.sn2,
      money:this.data.details.order.money,
      freight:this.data.details.order.freight,
      client:app.globalData.client
    };
    util.getData(app.globalData.urlID +'order.next.order_pay',pay).then(function(res){
      // console.log(res.data);
      var pay = JSON.parse(res.data.data.jsapi);
      var pay_id=res.data.data.pay_id;
      console.log(pay);
      //微信支付
      wx.requestPayment({
        timeStamp: pay.timeStamp,
        nonceStr: pay.nonceStr,
        package: pay.package,
        signType: pay.signType,
        paySign: pay.paySign,
        success: function (res) {
          // console.log(res.data);
          var pay_success = {
            payid: pay_id
          };
          util.getData(app.globalData.urlID + 'service.wxpay.notify', pay_success).then(function (res) {
            console.log(res.data);
            wx.redirectTo({
              url: '../pay_success/pay_success?payId=' + pay_id,
            })
          })
        },
        fail: function (res) {
          console.log(res);
          wx.redirectTo({
            url: '../pay_success/pay_success?payId=' +pay_id + '&fail=1',
          })
        }
      })
    })
  },
  /**
   * 申请退款
   */
  toRefund:function(e){
    var refund={
      user_id:app.globalData.user_id,
      sn2:this.data.details.order.sn2
    };
    util.getData(app.globalData.urlID+'order.post.refund',refund).then(function(res){
      console.log(res.data)
    })
  }
})