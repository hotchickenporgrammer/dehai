var t = getApp(), e = t.requirejs("core"), i = t.requirejs("foxui"), j = t.requirejs("jquery");
Page({
  data: {
    show: false,
    isshow:false,
    activeNames: []
  },

  onChange(event) {
    this.setData({
      activeNames: event.detail
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var type = options.type;
    e.get('anter/anter', { type: type},function(res){
      if(res.error=='1'){
        e.alert(res.message);
      }
      if(res.error=='0'){
        that.setData({
          type: type,
          levelarr: res.levelarr,
          show: true,
          isapply: res.isapply
        })
      }
      console.log(res)
    })
  },
  treate: function(e){
    wx.navigateTo({
      url: '/application/pages/commission/treate?id=' + e.currentTarget.dataset.id,
    })
  },
  apply: function (options) {
    var that = this;
    var level = options.currentTarget.dataset.level;
    var type = that.data.type;
    if(that.data.isapply){
      e.alert('您的申请正在审核中，请耐心等候！');
      return;
    }
    if (level == '91'){
      wx.navigateTo({
        url: '/application/pages/commission/personal/promptly?id=' + options.currentTarget.dataset.id +'&level='+level+'&type='+type,
      })
    } else if(level == '92'){
      wx.navigateTo({
        url: '/application/pages/commission/personal/no_promptly?id=' + options.currentTarget.dataset.id + '&level=' + level + '&type=' + type,
      })
    } else if(level == '95'){
      wx.navigateTo({
        url: '/application/pages/commission/region/promptly?id=' + options.currentTarget.dataset.id + '&level=' + level + '&type=' + type,
      })
    } else if(level == '96'){
      wx.navigateTo({
        url: '/application/pages/commission/region/promptly?id=' + options.currentTarget.dataset.id + '&level=' + level + '&type=' + type,
      })
    } else if(level == '97'){
      wx.navigateTo({
        url: '/application/pages/commission/region/no_promptly?id=' + options.currentTarget.dataset.id + '&level=' + level + '&type=' + type,
      })
    } else if(level == "98"){
      wx.navigateTo({
        url: '/application/pages/commission/region/no_promptly?id=' + options.currentTarget.dataset.id + '&level=' + level + '&type=' + type,
      })
    }
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