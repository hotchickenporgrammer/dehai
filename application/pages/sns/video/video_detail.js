var t = getApp(), a = t.requirejs("core"), e = t.requirejs("jquery"), wxparse = t.requirejs("wxParse/wxParse");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShow: true, //控制cover-view显示与隐藏
    show : false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    a.get("sns/video/video_detail", {'id':options.id}, function (res) {
      console.log(res)
      wxparse.wxParse("content", "html", res.post.content, that, "5")
      if (res.error == 0) {
        that.setData({
          post: res.post,
          show : true,
        })
      }
    })
  },


  // hidebg: function (e) {// 播放按钮点击事件
  //   this.setData({
  //     isShow : false,

  //   })
  //   var videoContext = wx.createVideoContext('myvideo')
  //   videoContext.play()
  // },

  // videoend:function(){
  //   this.setData({
  //     isShow: true,

  //   })
  // },

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