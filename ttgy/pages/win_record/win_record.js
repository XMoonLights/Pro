var util=require("../../utils/util.js");
var init = require("../../components/footer/footer.js");
var app=getApp();

// pages/win_record/win_record.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    target:1,
    records:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    init.init(this);
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
    var that=this;
    wx.getStorage({
      key: 'awards_id',
      success: function(res) {
        app.globalData.awards_id=res.data;
        var record={
          user_id:res.data,
          draw_id:1
        };
        util.getData(app.globalData.urlID+'user.get.luckdrawrecord',record).then(function(res){
          console.log(res.data);
          that.setData({
            records:res.data.data
          })
        })
      },
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
  getAwards:function(e){
    var that=this;
    var awards={
      user_id:app.globalData.awards_id,
      record_id:e.currentTarget.dataset.record,
      award_id:e.currentTarget.dataset.awards
    };
    util.getData(app.globalData.urlID+'lucky.get.getprize',awards).then(function(res){
      console.log(res.data);
      if(res.data.code==3){
        var records=that.data.records;
        for(var i=0;i<records.length;i++){
          if(records[i].id==awards.record_id){
            records[i].is_receive=1;
            that.setData({
              records:records
            });
            break;
          }
        }
      }
    })
  }
})