// pages/address/address.js
var util = require("../../utils/util.js");
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    addressList: [],
    icon: 'grey',
    pay: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      pay: options.pay_id
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
    var that = this;
    var addressData = {
      user_id: app.globalData.user_id,
      page: 1,
      page_size: 5
    }
    util.getData(app.globalData.urlID + 'user.address.list', addressData).then(function (data) {
      // console.log(data.data);
      that.setData({
        addressList: data.data.data
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

  /**
   * 跳转到添加地址页
   */
  toCreateAddress: function () {
    wx.navigateTo({
      url: '../create_address/create_address',
    })
  },

  /**
   * 修改地址信息
   */
  address_modify: function (e) {
    wx.navigateTo({
      url: '../create_address/create_address?address_id=' + e.currentTarget.dataset.index
    })
  },

  /**
   * 删除地址
   */
  address_delete: function (e) {
    var that = this;
    var address_del = {
      user_id: app.globalData.user_id,
      address_id: e.currentTarget.dataset.id
    }
    var address_list = that.data.addressList;
    util.getData(app.globalData.urlID + 'user.address.del', address_del).then(function (data) {
      // console.log(data);
      if (data.statusCode == 200) {
        for (var i = 0; i < address_list.length; i++) {
          if (address_list[i].id == e.target.dataset.id) {
            address_list.splice(i, 1);
            if (address_list.length == 0) {
              wx.removeStorage({
                key: 'address'
              })
            } else {
              wx.getStorage({
                key: 'address',
                success: function (res) {
                  if (res.data.id == e.currentTarget.dataset.id) {
                    wx.removeStorage({
                      key: 'address'
                    })
                  }
                },
              });
            }
            that.setData({
              addressList: address_list
            });
            break;
          }
        }
      }
    })
    /**
     * 执行get请求
     */
  },

  /**
   * 设置默认地址
   */
  setDefaultAddress: function (e) {
    var address_list = this.data.addressList;
    for (var i = 0; i < address_list.length; i++) {

      if (e.target.dataset.index == i) {
        address_list[e.target.dataset.index].is_default = (address_list[e.target.dataset.index].is_default == 0 ? 1 : 0);
      } else {
        address_list[i].is_default = 0;
      }
    }
    this.setData({
      addressList: address_list
    });
    var address_def = this.data.addressList[e.target.dataset.index];
    var addressDef = {
      user_id: app.globalData.user_id,
      address_id: address_def.id,
      name: address_def.name,
      mobile: address_def.mobile,
      province: address_def.province,
      city: address_def.city,
      area: address_def.area,
      address: address_def.address,
      is_default: address_def.is_default
    }
    util.getData(app.globalData.urlID + 'user.address.save', addressDef).then(function (data) {
      console.log("选定默认地址...");
    })
  },

  /**
   * 选择送货地址
   */
  selectAddress: function (e) {
    if (this.data.pay !== undefined) {
      wx.setStorage({
        key: 'address',
        data: this.data.addressList[e.currentTarget.dataset.index],
      })
      wx.navigateBack({
        url: '../check_order/check_order',
      })
    }
  }
})