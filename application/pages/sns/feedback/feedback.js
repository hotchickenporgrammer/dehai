var t = getApp(), e = t.requirejs("core"), i = t.requirejs("foxui"), j = t.requirejs("jquery");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    icons: t.requirejs("icons"),
    isshow: false,
    user_img: '',
    images:[],
    imgs:[],
    vals:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (t) {
    var that = this;
    setTimeout(function () {
      that.setData({
        isshow:true
      })
    }, 1000)
  },
  upload: function (t) {
    var a = this,
      m = e.data(t),
      s = m.type,
      n = a.data.images,
      o = a.data.imgs,
      r = m.index;
    "image" == s ? e.upload(function (t) {
      a.setData({
        images: a.data.images.concat(t.filename),
        imgs: a.data.imgs.concat(t.url),
      })
    }) : "image-remove" == s ? (n.splice(r, 1), o.splice(r, 1), a.setData({
      images: n,
      imgs: o
    })) : "image-preview" == s && wx.previewImage({
      current: o[r],
      urls: o
    })
  },
  onchange:function(t){
    var that = this;
    var vals = t.detail.value;
    that.setData({
      vals: vals
    })
  },
  submit:function(t){
    var that = this;
    var imgs = that.data.imgs;
    var vals = that.data.vals;
    e.get('feedback/main',{vals:vals,imgs:imgs},function(res){
      if(res.error=='1'){
        e.alert(res.message);
      }
      if(res.error=='0'){
        wx.redirectTo({url:'/application/pages/sns/feedback/success'})
      }
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