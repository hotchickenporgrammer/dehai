var t = getApp(), a = t.requirejs("core"), e = t.requirejs("jquery");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    icons: t.requirejs("icons"),
    boards:{},
    planting:{},
    show: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    a.get("sns/video", {}, function (res) {
      if(res.error==0){
        that.setData({
          boards: res.boards,
          planting: res.planting,
          show: true,
        })
      }
    })
  },


  toVideoDetail:function(e){
    wx.navigateTo({
      url: '/application/pages/sns/video/video_detail?id='+e.currentTarget.dataset.id,
    })
  },

  /**
   * 
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})