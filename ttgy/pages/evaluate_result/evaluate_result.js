// pages/evaluate_result/evaluate_result.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    interestGoods: [
      {
        id:1,
        imageUrl: '../../public/images/goods_list_01.png',
        content: '精选草莓单品125g*4盒三天内采摘新鲜包邮',
        price: '69',
        oldPrice: '112',
        num: 1
      },
      {
        id: 2,
        imageUrl: '../../public/images/goods_list_01.png',
        content: '精选草莓单品125g*4盒三天内采摘新鲜包邮',
        price: '69',
        oldPrice: '112',
        num: 1
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
   * 返回首页
   */
  toHome:function(){
    wx.switchTab({
      url: '../index/index'
    })
  },

  /**
   * 跳转到我的评价页面
   */
  toEvaluateAll: function () {
    wx.navigateTo({
      url: '../evaluate_all/evaluate_all',
    })
  }
})