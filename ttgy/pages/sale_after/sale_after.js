// pages/sale_after/sale_after.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
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
    address:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var pages=getCurrentPages();
    var prev_page=pages[pages.length-2];
    console.log(prev_page.data.details);
    this.setData({
      order:prev_page.data.details
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
   * 上传图片
   */
  upperImg: function () {
    var that = this;
    wx.chooseImage({
      count: 3,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        that.setData({
          upperImg: res.tempFilePaths
        })
      },
    })
  }
})