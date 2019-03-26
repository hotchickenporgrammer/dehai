// pages/app_in_two/app_in_two.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 2,
    show: [
      {
        isshow: true,
      }, {
        isshow: true,
      }, {
        isshow: true,
      }
    ],
    user_list: [
      { user_img: '' },
      { user_img: '' },
      { user_img: '' },
    ],

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



  upfile: function (e) {
    var that = this
    console.log(e)
    var i = e.target.dataset.index
    var userlist = this.data.user_list;
    var show_img = this.data.show
    wx.chooseImage({
      success: function (res) {
        userlist[i].user_img = res.tempFilePaths
        show_img[i].isshow = false
        that.setData({
          user_list: userlist,
          show: show_img
        })
      },
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