var util = require("../../utils/util.js");
var init = require("../../components/footer/footer.js");
// pages/shopping/shopping.js
var app =getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    target:2,
    goodsList: [],
    interestGoods: [],
    icon: 'grey',
    allSelect: false,
    total: 0.00,
    quantity: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // init.init(this);
    // this.cart();
    // this.interestGoods();
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
    init.init(this);
    this.cart();
    this.interestGoods();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    this.setData({
      icon: 'grey',
      allSelect: false,
      total: 0,
      quantity: 0
    })
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
   * 初始购物车列表
   */
  cart:function(){
    var that = this;
    var cartData = {
      user_id: app.globalData.user_id,
      page: 1,
      page_size: 999
    };
    util.getData(app.globalData.urlID + 'item.cart.list', cartData).then(function (data) {
      var cartList = data.data.data;
      for (var i = 0; i < cartList.length; i++) {
        cartList[i].item.del_flag = 0;
      }
      that.setData({
        goodsList: cartList
      })
    });
  },

  /**
   * 商品编辑
   */
  goodsOperate: function (e) {
    for (var i = 0; i < this.data.goodsList.length; i++) {
      if (e.currentTarget.dataset.index == i) {
        this.setData({
          operateItem: (this.data.operateItem == i ? '' : i)
        })
      }
    }
  },

  /**
   * 从购物车删除商品
   */
  goodsDelete: function (e) {
    var that = this;
    var goods_list = this.data.goodsList;
    var goodsData = {
      user_id: app.globalData.user_id,
      item_id: e.currentTarget.dataset.id
    }
    util.getData(app.globalData.urlID + 'item.cart.del', goodsData).then(function (data) {
      console.log(data.data);
      if (data.statusCode === 200) {
        for (var i = 0; i < goods_list.length; i++) {
          if (goods_list[i].item.id == e.target.dataset.id) {
            console.log(goods_list[i]);
            goods_list.splice(i, 1);
            if(goods_list.length==0){
              that.setData({
                icon: 'grey',
                allSelect: false,
                total: 0,
                quantity: 0,
                goodsList: goods_list,
                operateItem: null
              })
            }else{
              that.setData({
                goodsList: goods_list,
                operateItem:null,
                total: (parseFloat(that.data.total) - parseFloat(goods_list[i].item.price_single) * goods_list[i].number).toFixed(2),
                quantity:that.data.quantity-goods_list[i].number
              })
            }
            break;
          }
        }
      }
    });
  },

  /**
   * 选择商品
   */
  selectGoods: function (e) {
    var sum = 0;
    var quantity = 0;
    var goods_list = this.data.goodsList;
    goods_list[parseInt(e.target.id)].item.del_flag = (goods_list[parseInt(e.target.id)].item.del_flag ==0 ? 1 : 0);
    for(var i=0;i<goods_list.length;i++){
      if(goods_list[i].item.del_flag==1){
        sum += parseFloat(goods_list[i].item.price_single)*goods_list[i].number;
        quantity+=goods_list[i].number;
      }else {
        goods_list[i].number = 1
      }
    }
    // if (goods_list[parseInt(e.target.id)].item.del_flag==0){
    //   goods_list[parseInt(e.target.id)].number=1
    // }
    this.setData({
      goodsList: goods_list,
      total: sum.toFixed(2),
      quantity: quantity,
      icon: 'grey',
      allSelect: false
    });
  },

  /**
   * 全选商品
   */
  selectAll: function (e) {
    var sum = 0;
    var quantity = 0;
    var goods_list = this.data.goodsList;
    if(goods_list.length==0){
      return false;
    }
    if (this.data.allSelect === false) {
      for (var i = 0; i < goods_list.length; i++) {
        goods_list[i].item.del_flag = 1;
        sum += parseFloat(goods_list[i].item.price_single);
        quantity += goods_list[i].number;
      }
      this.setData({
        icon: '#e72142'
      })
    } else {
      for (var i = 0; i < goods_list.length; i++) {
        goods_list[i].item.del_flag = 0;
        goods_list[i].number = 1;
      }
      this.setData({
        icon: 'grey'
      })
    }
    this.setData({
      goodsList: goods_list,
      total: sum.toFixed(2),
      quantity: quantity,
      allSelect: (this.data.allSelect == true ? false : true)
    })
  },

  /**
   * 添加商品数量
   */
  addGoods: function (e) {
    var num = 1;
    var sum = 0;
    var quantity = 0;
    var index = parseInt(e.target.id.split('_')[1]);//商品下标
    var goods_list = this.data.goodsList;
    if (goods_list[index].item.del_flag==1) {
      goods_list[index].number += 1;
      sum = parseFloat(this.data.total) + parseFloat(goods_list[index].item.price_single);
      quantity = this.data.quantity + 1;
      this.setData({
        goodsList: goods_list,
        total: sum.toFixed(2),
        quantity: quantity
      })
    }
  },

  /**
   * 减少商品数量
   */
  reduceGoods: function (e) {
    var index = e.target.id.split('_')[1];//商品下标
    var goods_list = this.data.goodsList;
    if (goods_list[index].item.del_flag && (goods_list[index].number > 1)) {
      goods_list[index].number -= 1;
      this.setData({
        goodsList: goods_list,
        total: (parseFloat(this.data.total) - parseFloat(goods_list[index].item.price_single)).toFixed(2),
        quantity: this.data.quantity - 1
      })
    }

  },

  /**
   * 跳转到确认订单页
   */
  toCheckOrder: function () {
    var cart={
      user_id: app.globalData.user_id
    };
    var goods={
      priceSum:this.data.total
    }
    var shopping=[];
    var goods_list=this.data.goodsList;
    for(var i=0;i<goods_list.length;i++){
      if(goods_list[i].item.del_flag==1){
        var goods_li={
          id:goods_list[i].id,
          item_id:goods_list[i].item.id,
          number:goods_list[i].number,
          price_single:goods_list[i].item.price_single
        }
        shopping.push(goods_li);
      }
    }
    goods.shopping=shopping;
    //post传参数时，对象必须序列化JSON.stringify()
    cart.cart = JSON.stringify(goods);
    wx.setStorage({
      key: 'cart',
      data: JSON.stringify(goods),
    })
    if (this.data.quantity > 0) {
      util.getData(app.globalData.urlID + 'order.confirm.pay_record', cart).then(function(data){
        // console.log(data.data);
        if(data.data.code==3){
          wx.setStorage({
            key: 'pay_id',
            data: data.data.data.pay_id,
          })
          wx.navigateTo({
            url: '../check_order/check_order?carriage='+data.data.data.freight
          })
        }else{
          wx.showToast({
            title: '生成订单流水失败！',
          })
        }
      })
    }
  },

  /**
   * 推荐商品
   */
  interestGoods:function(){
    var that = this;
    var data = {
      page: 1,
      page_size: 2,
      city_id: app.globalData.city_id,
      type:1
    };
    util.getData(app.globalData.urlID + "item.hot.list", data).then(function (res) {
      var goods=res.data.data;
      
      console.log(goods);
      that.setData({
        interestGoods: res.data.data
      })
    })
  },

  /**
   * 加入购物车
   */
  joinCar: function (e) {
    var that=this;
    var goodsData = {
      num: 1,
      user_id: app.globalData.user_id,
      item_id: e.currentTarget.dataset.id
    }
    util.getData(app.globalData.urlID + 'item.cart.add', goodsData).then(function (data) {
      // console.log(data)
      that.cart();
    })
  }
})