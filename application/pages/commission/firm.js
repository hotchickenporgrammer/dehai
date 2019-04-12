var app = getApp();
var core = app.requirejs('core');
var foxui = app.requirejs('foxui');
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },


  topromptly:function(){
    wx.navigateTo({
      url: '/pages/promptly/promptly',
    })
  },

  tocontract:function(){
    wx.navigateTo({
      url: '/pages/contract/contract',
    })
  },

  nopro:function(){
    wx.navigateTo({
      url: '/pages/no_promptly/no_promptly',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    core.get('commission/firm', {}, function (res) {
      console.log(res);
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

  }
})