// pages/evaluate/evaluate.js
var util=require("../../utils/util.js");
var app=getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsScore: 0,
    transportScore: 0,
    serviceScore: 0,
    iconSrc: '../../public/images/star_default.png',
    order: {
      orderNum: '1234567891111',
      orderState: '待付款',
      goods: {
        goodsId: 1,
        imageUrl: '../../public/images/goods_list_01.png',
        content: '精选草莓单品125g*4盒三天内采摘新鲜包邮',
        price: 69.21,
        oldPrice: '112',
        quantity: 1
      },
      pocket: 69.21
    },
    upperImg: [],
    img_id:[],
    content:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var pages = getCurrentPages();
    var prevPage = pages[pages.length - 2];
    var order = prevPage.data.order[parseInt(options.index)]
    console.log(order);
    this.setData({
      order:order
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
   * 获取评论内容
   */
  getComment:function(e){
    console.log(e.detail.value);
    this.setData({
      content:e.detail.value
    })
  },

  /**
   * 商品评论
   */
  goodsScore: function (e) {
    this.setData({
      goodsScore: (this.data.goodsScore == e.target.dataset.index ? 0 : e.target.dataset.index)
    })
  },

  /**
   * 物流评论
   */
  transportScore: function (e) {
    this.setData({
      transportScore: (this.data.transportScore == e.target.dataset.index ? 0 : e.target.dataset.index)
    })
  },

  /**
   * 服务评论
   */
  serviceScore: function (e) {
    this.setData({
      serviceScore: (this.data.serviceScore == e.target.dataset.index ? 0 : e.target.dataset.index)
    })
  },

  /**
   * 跳转到评价结果页
   */
  toEvaluateResult: function () {
    var evaluate={
      user_id:app.globalData.user_id,
      item_id:this.data.order.item_id,
      sn2: this.data.order.sn2,
      stars_item: this.data.goodsScore,
      stars_service: this.data.serviceScore,
      stars_rider: this.data.transportScore,
      content:this.data.content,
      method:'add',
      img_id: (this.data.img_id==undefined?'':this.data.img_id.join(","))
    }
    util.getData(app.globalData.urlID1+'order.post.comment',evaluate).then(function(res){
      // console.log(res.data);
      wx.navigateTo({
        url: '../evaluate_result/evaluate_result'
      })
    })
  },

  /**
   * 上传图片
   */
  upperImg: function () {
    var that = this;
    var img_id=that.data.img_id;
    var upperImg = that.data.upperImg;
    wx.chooseImage({
      count: 1,
      success: function (res) {
        var tempTilePaths = res.tempFilePaths;
        // console.log(tempTilePaths);
        wx.uploadFile({
          url: app.globalData.urlID1 + 'upload.post.upload',
          filePath: tempTilePaths[0],
          name: 'file',
          success: function (res) {
            var upload_img = JSON.parse(res.data);
            console.log(upload_img.data);
            img_id.push(upload_img.data.id);
            upperImg.push(upload_img.data.url);
            that.setData({
              img_id:img_id,
              upperImg:upperImg
            })
          }
        })
      },
    })
  }
})