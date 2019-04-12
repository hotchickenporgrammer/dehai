var t = getApp(), core = t.requirejs("core"), i = t.requirejs("foxui"), j = t.requirejs("jquery");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 2,
    imgs: ['', ''],
    detail: {
      userId: '',
    },
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
  onLoad: function (options) {
    var that = this;
    that.setData({
      id: options.id
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
  upload: function (e) {
    var { index } = e.currentTarget.dataset;
    var that = this;
    var imgs = this.data.imgs;
    core.upload(res => {
      imgs[index] = res.url
      that.setData({
        imgs: imgs
      })
    })
  },
  delimg: function (e) {
    var that = this;
    var index = e.currentTarget.dataset.index;
    var imgs = this.data.imgs;
    imgs[index] = '';
    that.setData({
      imgs: imgs
    })
  },
  onChange: function (t) {
    var e = this;
    var a = e.data.detail;
    var r = t.currentTarget.dataset.type;
    var s = j.trim(t.detail.value);
    a[r] = s,
      e.setData({
        detail: a
      })
  },
  submit: function(){
    var that = this;
    var imgs = that.data.imgs;
    var detail = that.data.detail;
    var id = that.data.id;
    core.get('anter/realuser',{imgs:imgs,detail:detail,id:id},function(res){
      console.log(res)
      if (res.error == '0') {
        wx.redirectTo({
          url: 'success'
        })
      }
    })
  }
})