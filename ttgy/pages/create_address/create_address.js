// pages/create_address/create_address.js
var util=require("../../utils/util.js");
var app=getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    icon:'grey',
    username:'',
    phone:'',
    address:'',
    customItem: '全部',
    address_details:'',
    address_state: false,
    modal: false,
    value:[0,0,0]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(options.address_id!==undefined){
      var pages = getCurrentPages();
      var prevPage = pages[pages.length - 2];
      var modifyData = prevPage.data.addressList[options.address_id]
      console.log(modifyData);
      this.setData({
        username:modifyData.name,
        phone:modifyData.mobile,
        address_details:modifyData.address,
        address_state:modifyData.is_default,
        address_id:modifyData.id,
        province:modifyData.province,
        city:modifyData.city,
        area:modifyData.area
      })
    }
    var that=this;
    that.setData({
      modify_address:options.address_id
    })
    this.getProvince();
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
   * 选择所在区域
   */
  regionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      address: e.detail.value,
      address_details: ''
    })
  },

  /**
   * 
   */
  getAddressDetails:function(e){
    this.setData({
      address_details:e.detail.value
    })
  },
  getUserName:function(e){
    this.setData({
      username:e.detail.value
    })
  },
  getPhone: function (e) {
    this.setData({
      phone: e.detail.value
    })
  },
  /**
   * 设置默认地址
   */
  setDefaultAddress:function(e){
    this.setData({
      // icon: (this.data.icon == '#e72142' ? 'grey' : '#e72142'),
      address_state:(this.data.address_state==1?0:1)
    })
  },
  
  /**
   * 选择区域
   */
  getPCA(e) {
    this.setData({
      value: e.detail.value,
    })
    this.getProvince();
  },
  getProvince() {
    var val = this.data.value;
    console.log(val);
    var that = this;
    var provinceData = {
      user_id: app.globalData.user_id,
      page: 1,
      page_size: 5
    }
    util.getData(app.globalData.urlID + 'data.province.list', provinceData).then(function(data){
      that.setData({
        prolist:data.data.data
      })
      var id1 = data.data.data[val[0]].id
      that.getCities(id1);
    })
  },
  getCities(ids) {
    var val = this.data.value;
    var prolist = this.data.prolist;
    console.log(prolist);
    var that = this;
    var cityData = {
      user_id: app.globalData.user_id,
      pid: ids,
      page: 1,
      page_size: 5
    }
    util.getData(app.globalData.urlID + 'data.province.pid', cityData).then(function (data) {
      that.setData({
        citlist: data.data.data
      })
      var id2 = data.data.data[val[1]].id
      that.getAreas(id2);
    })
  },
  getAreas(ids) {
    var that = this;
    var val = this.data.value;
    var arelist = this.data.arelist;
    var areaData = {
      user_id: app.globalData.user_id,
      pid: ids,
      page: 1,
      page_size: 5
    }
    util.getData(app.globalData.urlID + 'data.province.pid', areaData).then(function (data) {
      that.setData({
        arelist: data.data.data
      })
    })
  },
  /**
   * 确定所在地区
   */
  selectAddress:function(){
    var value = this.data.value;
    // console.log(value);
    var area=this.data.prolist[value[0]].name+this.data.citlist[value[1]].name+this.data.arelist[value[2]].name;
    // console.log(area);
    this.setData({
      modal:false,
      province:this.data.prolist[value[0]].id,
      city: this.data.citlist[value[1]].id,
      area: this.data.arelist[value[2]].id,
      address:area
    })
  },
  /**
   * 显示模态框
   */
  showModal: function () {
    this.setData({
      modal:true
    })
  },
  /**
   * 隐藏模态框
   */
  hiddenModal: function () {
    this.setData({
      modal:false
    })
  },
  /**
   * 保存地址
   */
  saveAddress: function (e) {
    var that=this;
    var address = {
      user_id: app.globalData.user_id,
      name: this.data.username,
      mobile: this.data.phone,
      province: this.data.province,
      city: this.data.city,
      area: this.data.area,
      address: this.data.address_details,
      is_default: this.data.address_state
    }
    if(this.data.modify_address===undefined){
      // console.log(address);
      util.getData(app.globalData.urlID + 'user.address.add', address).then(function (data) {
        wx.navigateBack({
          url: '../address/address',
        })
      })
    }else{
      //通过页面栈获取到上一页面对数据进行修改
      address.address_id=this.data.address_id;
      util.getData(app.globalData.urlID + 'user.address.save', address).then(function (data) {
        wx.navigateBack({
          url: '../address/address',
        });
        console.log("修改成功")
      })
    }
  }
})