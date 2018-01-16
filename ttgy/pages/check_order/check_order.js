// pages/check_order/check_order.js
var util = require("../../utils/util.js");
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    time: ["10:30-11:00", "14:30-16:30", "19:30-21:30"],
    current_time: 1,
    select_time: '14:30-16:30',
    order_goods: [],
    num_count: 0,
    total: 0.00,
    carriage: 0.00,
    address: '',
    address_default: false,
    tom_time: '',
    week: '',
    pay_id: null,
    cart: [],
    showTimePicker: false,
    remarks: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.setData({
      carriage: parseFloat(options.carriage)
    })

    /**
     * 初始化订单详情
     */
    wx.getStorage({
      key: 'pay_id',
      success: function (res) {
        that.setData({
          pay_id: res.data
        })
      },
    })
    wx.getStorage({
      key: 'cart',
      success: function (res) {
        that.setData({
          cart: res.data
        })
        var confirm_detail = {
          user_id: app.globalData.user_id,
          pay_id: that.data.pay_id,
          cart: res.data
        }
        util.getData(app.globalData.urlID + 'order.confirm.detail', confirm_detail).then(function (res) {
          // console.log(res.data.data);
          //返回订单商品价格为字符型，要转成浮点型
          var priceSum=parseFloat(res.data.data.cart.priceSum);

          that.setData({
            order:res.data.data,
            priceSum:priceSum
          })
          // that.setData({
          //   order_goods: data.data.data.cart.shopping,
          //   num_count: data.data.data.cart.num_count,
          //   total: parseFloat(data.data.data.cart.priceSum),
          //   address: data.data.data.address1,
          //   tom_time: data.data.data.tom_time,
          //   week: data.data.data.week,
          //   carriage: parseFloat(options.carriage),
          //   packages: data.data.data.is_package,
          // });
          // wx.setStorage({
          //   key: 'inventory',
          //   data: that.data.order_goods,
          // })
          // if (that.data.address == null) {
          //   wx.getStorage({
          //     key: 'address',
          //     success: function (res) {
          //       that.setData({
          //         address: res.data,
          //         address_default: true
          //       })
          //     },
          //   })
          // }
        })
      },
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
    var that = this;
    wx.getStorage({
      key: 'address',
      success: function (res) {
        // console.log(res.data);
        that.setData({
          address: res.data
        })
      },
      fail:function(res){
        that.setData({
          address:null
        })
      }
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
  // goodsQuantity:function(){
  //   var len = this.data.order_goods.length;
  //   var sum = 0;
  //   var total = 0;
  //   for(var i=0;i<len;i++){
  //     sum+=this.data.order_goods[i].quantity;
  //     total += parseFloat(this.data.order_goods[i].price.toFixed(2));
  //   }
  //   this.setData({
  //     sum:sum,
  //     total:total
  //   })
  // },
  /**
   * 跳转到选择地址页面
   */
  toAddress: function () {
    wx.navigateTo({
      url: '../address/address?pay_id=' + this.data.pay_id,
    })
  },
  /**
   * 跳转到商品清单页
   */
  toInventory: function () {
    wx.navigateTo({
      url: '../inventory/inventory',
    })
  },

  /**
   * 获取留言
   */
  getRemarks: function (e) {
    this.setData({
      remarks: e.detail.value
    })
  },
  /**
   * 跳转到支付成功页面
   * money:this.data.total,freight:this.data.carriage
   */
  toPaySuccess: function () {
    var that = this;
    if (that.data.address == null) {
      console.log("未选择送货地址");
      wx.showModal({
        title: '',
        content: '未选择送货地址',
        showCancel:false,
        success:function(res){
          if(res.confirm){
            that.toAddress();
          }
        }
      })
      return false;
    } else {
      var sale = {
        user_id: app.globalData.user_id,
        memo: that.data.remarks,
        money: 0.01,
        pay_id: that.data.pay_id,
        is_package: that.data.order.is_package,
        delivery: that.data.select_time,
        delivery2: '',
        freight: 0,
        address_id1: that.data.address.id,
        cart: that.data.cart,
        time_slot1: that.data.select_time,
        client: 'wx'
      }
      util.getData(app.globalData.urlID + 'order.add.pay', sale).then(function (res) {
        console.log(res.data);
        var pay = JSON.parse(res.data.data.jsapi);
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
              payid: that.data.pay_id
            };
            util.getData(app.globalData.urlID + 'service.wxpay.notify', pay_success).then(function (res) {
              console.log(res.data);
              wx.redirectTo({
                url: '../pay_success/pay_success?payId=' + that.data.pay_id,
              })
            })
          },
          fail: function (res) {
            console.log(res);
            var pay_success = {
              payid: that.data.pay_id
            };
            wx.redirectTo({
              url: '../pay_success/pay_success?payId=' + that.data.pay_id + '&fail=1',
            })
          }
        })
      })
    }
  },

  /**
   * 
   */
  showTimePicker: function (e) {
    this.setData({
      showTimePicker: true
    })
  },
  /**
   * 
   */
  hiddenTimePicker: function (e) {
    this.setData({
      showTimePicker: false
    })
  },

  /**
   * 选择配送时间段
   */
  chooseTime: function (e) {
    this.setData({
      current_time: e.currentTarget.dataset.current,
      select_time: e.currentTarget.dataset.time,
      showTimePicker:false
    })
  }
})