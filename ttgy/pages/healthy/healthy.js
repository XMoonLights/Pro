// pages/healthy/healthy.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab:0,
    images: [
      '../../public/images/banner_01.png',
      '../../public/images/banner_02.png',
      '../../public/images/banner_03.png'
    ],
    tips: [
      {
        imageUrl: '../../public/images/m_answer.png',
        name: '我的回答'
      },
      {
        imageUrl: '../../public/images/m_question.png',
        name: '我的提问'
      },
      {
        imageUrl: '../../public/images/m_reply.png',
        name: '回答我的'
      }
    ],
    answer:[
      {
        id:1,
        userImg:'../../public/images/goods_list_01.png',
        userName:'李小帅',
        title:'有哪些美味又健康的食品适合减肥爱好者？',
        content:'自己做健身餐一年了,越来越喜欢这种饮食模式,而且也喜欢研究尝试各种菜谱,把健身餐做的多样而且美味!早餐系列-水果烤燕麦这个特别',
        praise:2669
      },
      {
        id: 2,
        userImg: '../../public/images/goods_list_01.png',
        userName: '李小帅',
        title: '有哪些美味又健康的食品适合减肥爱好者？',
        content: '自己做健身餐一年了,越来越喜欢这种饮食模式,而且也喜欢研究尝试各种菜谱,把健身餐做的多样而且美味!早餐系列-水果烤燕麦这个特别',
        praise: 2669
      },
      {
        id: 3,
        userImg: '../../public/images/goods_list_01.png',
        userName: '李小帅',
        title: '有哪些美味又健康的食品适合减肥爱好者？',
        content: '自己做健身餐一年了,越来越喜欢这种饮食模式,而且也喜欢研究尝试各种菜谱,把健身餐做的多样而且美味!早餐系列-水果烤燕麦这个特别',
        praise: 2669
      }
    ],
    question: [
      {
        id: 1,
        userImg: '../../public/images/goods_list_01.png',
        userName: '李小帅',
        title: '有哪些美味又健康的食品适合减肥爱好者？',
        content: '自己做健身餐一年了,越来越喜欢这种饮食模式,而且也喜欢研究尝试各种菜谱,把健身餐做的多样而且美味!早餐系列-水果烤燕麦这个特别',
        answer: 66,
        time:''
      },
      {
        id: 2,
        userImg: '../../public/images/goods_list_01.png',
        userName: '李小帅',
        title: '有哪些美味又健康的食品适合减肥爱好者？',
        content: '自己做健身餐一年了,越来越喜欢这种饮食模式,而且也喜欢研究尝试各种菜谱,把健身餐做的多样而且美味!早餐系列-水果烤燕麦这个特别',
        answer:66
      },
      {
        id: 3,
        userImg: '../../public/images/goods_list_01.png',
        userName: '李小帅',
        title: '有哪些美味又健康的食品适合减肥爱好者？',
        content: '自己做健身餐一年了,越来越喜欢这种饮食模式,而且也喜欢研究尝试各种菜谱,把健身餐做的多样而且美味!早餐系列-水果烤燕麦这个特别',
        answer: 66
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
  toTips:function(e){
    for(var i=0;i<this.data.tips.length;i++){
      if(e.currentTarget.dataset.name=this.data.tips[i].name){
        console.log(this.data.tips[i].imageUrl.split("_")[1].split(".")[0]);
      }
    }
  }
})