// pages/m_set_name/m_set_name.js
var util=require("../../utils/util.js");
var app=getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
  
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
   * 获取输入昵称
   */
  getNickName:function(e){
    this.setData({
      nickname:e.detail.value,
      prompt:''
    })
  },

  /**
   * 清空输入框
   */
  clearInput:function(){
    this.setData({
      nickname:''
    })
  },

  /**
   * 设置昵称
   */
  setNickName:function(){
    var that=this;
    var regu = "^[a-zA-Z0-9_\u4e00-\u9fa5]+$";
    var re = new RegExp(regu);
    var nickName={
      user_id:app.globalData.user_id,
      nickname: that.data.nickname
    };
    if(nickName.nickname==''||nickName.nickname==undefined){
      that.setData({
        prompt:'昵称不能为空'
      });
      return false;
    }
    if(re.test(nickName.nickname)){
      util.getData(app.globalData.urlID + 'user.post.setnickname', nickName).then(function (res) {
        console.log(res.data);
        app.setUser('user_info', 'nickname', that.data.nickname, '../m_set/m_set');
      })
    }else{
      this.setData({
        prompt:'昵称格式错误'
      })
    }
    
  }
})