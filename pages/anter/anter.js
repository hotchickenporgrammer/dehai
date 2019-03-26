// pages/firm/firm.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },


  toxinye_pro:function(){
    wx.navigateTo({
      url: '/pages/xinye_promptly/xinye_promptly',
    })
  },

  toxinye_no(){
    wx.navigateTo({
      url: '/pages/xinye_no_msg/xinye_no_msg',
    })
  },
  tocontract(){
    wx.navigateTo({
      url: '/pages/contract/contract',
    })
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

  }
})