// pages/promptly/promptly.js
var list = []
var that

Page({

  /**
   * 页面的初始数据
   */
  data: {
    bottomshow: false,
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
      { user_img: '/img/jia.png' },
      { user_img: '/img/jia.png' },
      { user_img: '/img/jia.png' },
    ],
    steps: [
      {
        text: '商企信息',
      },
      {
        text: '合作合同',
      }
    ]

  },


  toxinye_no(){
    wx.navigateTo({
      url: '/pages/xinye_no_heton/xinye_no_heton',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  upfile: function (e) {
    var that = this
    console.log(e)
    var i = e.target.dataset.index
        
    wx.chooseImage({
      success: function (res) {
        var userimg = 'user_list['+i+'].user_img',
        showimg = 'show['+i+'].isshow'
        that.setData({
          [userimg] : res.tempFilePaths,
          [showimg]: false
        })
      },
      fail(err){
        console.log(err)
      }
    })
  },

  onLoad: function (options) {
    that = this
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