// pages/m_set/m_set.js
var util=require("../../utils/util.js");
var app=getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: "天天爱水果",
    head: "../../public/images/goods_list_01.png",
    sex: 1,
    borthday: "2017-09-10",
    bind: false,
    sex_choose: [
      {
        name: '男',
        value: 1,
        checked: ''
      },
      {
        name: '女',
        value: 2,
        checked: ''
      }
    ],
    choose_sex: false
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
    var that = this;
    wx.getStorage({
      key: 'user_info',
      success: function (res) {
        console.log(res.data);
        that.setData({
          head: res.data.head_img,
          sex: res.data.sex,
          borthday: res.data.birth,
          name: res.data.nickname
        })
      },
    });
    wx.getStorage({
      key: 'user_mobile',
      success: function (res) {
        console.log(res.data);
        if (res.data) {
          that.setData({
            bind: true
          })
        }
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

  /**
   * 设置头像
   */
  setImage:function(){
    var that=this;
    wx.chooseImage({
      count:1,
      success: function(res) {
        var tempTilePaths=res.tempFilePaths;
        console.log(tempTilePaths);
        wx.uploadFile({
          url: app.globalData.urlID +'upload.post.upload',
          filePath: tempTilePaths[0],
          name: 'file',
          success:function(res){
            var upload_img=JSON.parse(res.data);
            var img={
              user_id:app.globalData.user_id,
              img_id: upload_img.data.id
            };
            util.getData(app.globalData.urlID +'user.post.set_head_img',img).then(function(res){
              console.log(res.data);
              that.setData({
                head:upload_img.data.url
              });
              app.setUser('user_info','head_img',upload_img.data.url)
            })
          }
        })
      },
    })
  },

  /**
   * 跳转设置昵称
   */
  toSetName: function () {
    wx.navigateTo({
      url: '../m_set_name/m_set_name',
    })
  },

  /**
   * 设置生日
   */
  bindDateChange: function (e) {
    var that=this;
    var borthday={
      user_id:app.globalData.user_id,
      birth:e.detail.value
    };
    util.getData(app.globalData.urlID+'user.post.setbirth',borthday).then(function(res){
      // console.log(res.data);
      app.setUser('user_info','birth',e.detail.value);
      // that.setData({
      //   borthday: e.detail.value
      // })
    })
  },

  /**
   * 跳转绑定手机号
   */
  toSetPhone: function () {
    wx.navigateTo({
      url: '../m_set_phone/m_set_phone',
    })
  },

  /**
   * 选择性别
   */
  radioChange: function (e) {
    var that=this;
    var sex={
      user_id:app.globalData.user_id,
      sex:e.detail.value
    };
    util.getData(app.globalData.urlID+'user.post.setsex',sex).then(function(res){
      console.log(res.data);
      if(res.data.msg==="修改成功"){
        app.setUser('user_info','sex',e.detail.value)
      }
    })
    this.setData({
      choose_sex: false
    })
  },
  showModal: function () {
    var that = this;
    wx.getStorage({
      key: 'user_info',
      success: function (res) {
        console.log(res.data);
        var sex_choose = that.data.sex_choose;
        for (var i = 0; i < sex_choose.length; i++) {
          if (res.data.sex == sex_choose[i].value) {
            for (var j = 0; j < sex_choose.length; j++) {
              sex_choose[j].checked = ''
            }
            sex_choose[i].checked = 'true';
          }
        }
        that.setData({
          sex_choose: sex_choose,
          choose_sex: true
        })
      },
    });
    
  },
  hiddenModal: function () {
    this.setData({
      choose_sex: false
    });
  }
})