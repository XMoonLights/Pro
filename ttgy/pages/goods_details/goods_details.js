var util=require("../../utils/util.js");
var app = getApp();
// pages/goods_details/goods_details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab:0,
    images:[],
    goods:{},
    recommend:[],
    goods_type_check:1,
    evaluate:[],
    collect:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.goodsDetails(options.item);
    this.goodsEvaluate(options.item);
    // var item_id={
    //   user_id:app.globalData.user_id,
    //   item_id: parseInt(options.item)
    // }
    // var evaluate={
    //   item_id:103,
    //   page:1,
    //   page_size:5
    // }
    // util.getData(app.globalData.urlID + "item.detail.info", item_id).then(function(data){
    //   var images = [];
    //   for (var i = 0; i < data.data.data.img.length;i++){
    //     images.push(data.data.data.img[i].img_url);
    //   }
    //   that.setData({
    //     goods:data.data.data,
    //     images:images
    //   })
    // });
    // util.getData(app.globalData.urlID +'item.eval.info', evaluate).then(function(data){
    //   that.setData({
    //     evaluate:data.data.data
    //   })
    // })
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
   * 初始化商品详情
   */
  goodsDetails:function(item){
    var that = this;
    var item_id = {
      user_id: app.globalData.user_id,
      item_id: item
    };
    util.getData(app.globalData.urlID + "item.detail.info", item_id).then(function (data) {
      console.log(data.data.data)
      var images = [];
      for (var i = 0; i < data.data.data.img.length; i++) {
        images.push(data.data.data.img[i].img_url);
      }
      that.setData({
        goods: data.data.data,
        images: images
      });
      if(that.data.goods.collection==1){
        that.setData({
          collect:true
        })
      }
    });
  },

  /**
   * 初始化商品评价
   */
  goodsEvaluate:function(item){
    var that = this;
    var evaluate = {
      item_id: item,
      page: 1,
      page_size: 5
    };
    util.getData(app.globalData.urlID + 'item.eval.info', evaluate).then(function (data) {
      that.setData({
        evaluate: data.data.data
      })
    })
  },

  switchNav: function (e) {
    var that = this;
    if (that.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },

  /**
   * 选择商品类型
   */
  choosePackage:function(e){
    this.goodsDetails(e.currentTarget.dataset.item);
    this.goodsEvaluate(e.currentTarget.dataset.item);
    // wx.navigateBack({
    //   url:'../goods_details/goods_details?item='+e.currentTarget.dataset.item
    // })
  },

  /**
   * 跳转到购物车页面
   */
  toShopping:function(e){
    wx.reLaunch({
      url: '../shopping/shopping',
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
  },
  /**
   * 收藏商品
   */
  collect:function(e){
    var that=this;
    var collect={
      user_id:app.globalData.user_id,
      item_id:e.currentTarget.dataset.id
    };
    if(that.data.collect){
      util.getData(app.globalData.urlID + 'item.post.remove_favorites', collect).then(function (res) {
        console.log(res.data);
        that.setData({
          collect: false
        })
      })
    }else{
      util.getData(app.globalData.urlID + 'item.post.add_favorites', collect).then(function (res) {
        console.log(res.data);
        that.setData({
          collect: true
        })
      })
    }
  }
})