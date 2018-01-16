var util = require("../../utils/util.js");
var init = require("../../components/footer/footer.js");
var app = getApp();

// pages/welfare_more/welfare_more.js
var ctx = wx.createCanvasContext('welfare');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    target:2,
    start_x:0,
    start_y:0,
    join:true
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
    ctx.setFillStyle('#cccccc');
    ctx.fillRect(0,0,200,100);
    ctx.draw();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that=this;
    var welfare={
      user_id:app.globalData.awards_id,
      draw_id:2
    };
    util.getData(app.globalData.urlID+'lucky.get.luckyapplyinfo',welfare).then(function(res){
      console.log(res.data);
      if (res.data.data.is_apply == 0 && res.data.data.apply_people == res.data.data.with_people){
        that.setData({
          join:false
        })
      }
      if(res.data.data.is_apply==2){
        that.setData({
          result:'恭喜中得'+res.data.data.award.name
        })
      }else{
        that.setData({
          result:'谢谢惠顾'
        })
      }
      that.setData({
        activity:res.data.data
      })
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
  touchStart:function(e){
    var start_x=e.changedTouches[0].x;
    var start_y=e.changedTouches[0].y;
    ctx.save();
    ctx.beginPath();
    ctx.clearRect(start_x,start_y,10,10);
    ctx.restore();
    ctx.draw(true);
  },
  touchMove:function(e){
    var start_x = e.changedTouches[0].x;
    var start_y = e.changedTouches[0].y;
    ctx.save();
    ctx.moveTo(this.data.start_x,this.data.start_y)
    ctx.beginPath();
    ctx.clearRect(start_x, start_y, 10, 10);
    ctx.restore();
    this.setData({
      start_x:start_x,
      start_y:start_y
    });
    ctx.draw(true);
    // wx.drawCanvas({
    //   canvasId: 'welfare',
    //   reserve: true,
    //   actions: ctx.getActions() // 获取绘图动作数组
    // })
  },
  /**
   * 参与活动
   */
  joinActivity:function(){
    var that=this;
    var activity={
      user_id:app.globalData.awards_id,
      draw_id:2
    };
    util.getData(app.globalData.urlID+'lucky.get.luckyapply',activity).then(function(res){
      console.log(res.data);
      if(res.data.code==3){
        var activity=that.data.activity;
        activity.apply_people=activity.apply_people+1;
        activity.is_apply=1;
        that.setData({
          activity: activity
        })
      }
    })
  }
})