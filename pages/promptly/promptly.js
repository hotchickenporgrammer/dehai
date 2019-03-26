// pages/promptly/promptly.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active:'0',
    isshow: false,
    user_img: '',
    steps: [
      {
        text: '商企信息',
      },
      {
        text: '合作合同',
      },
      {
        text: '实名认证',
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  toapp_in:function(){
    wx.navigateTo({
      url: '/pages/app_in/app_in',
    })
  },

  upfile: function () {
    var that = this
    wx.chooseImage({
      success: function (res) {
        that.setData({
          user_img: res.tempFilePaths,
          isshow: true
        })
      },
    })
  },
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