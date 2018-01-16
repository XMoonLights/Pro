// pages/m_message/m_message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message:[
      {
        id:1,
        title:'双十一疯狂购活动通知1',
        time:'2016-06-21',
        content:'双十一给力活动，一言不合就发红包，抢到红包全场抵扣，疯狂购买无上限，买得越多返的越多，分享好友还能再赢抽奖机会，根本停不下来'
      },
      {
        id: 2,
        title: '双十一疯狂购活动通知2',
        time: '2016-06-21',
        content: '双十一给力活动，一言不合就发红包，抢到红包全场抵扣，疯狂购买无上限，买得越多返的越多，分享好友还能再赢抽奖机会，根本停不下来'
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
   * 删除消息
   */
  deleteMessage:function(e){
    var message = this.data.message;
    for(var i=0;i<this.data.message.length;i++){
      if(e.currentTarget.dataset.id==this.data.message[i].id){
        message.splice(i,1);
        this.setData({
          message:message
        })
      }
    }
  },

  /**
   * 清空消息
   */
  clearMessage:function(){
    this.setData({
      message:[]
    })
  }
})