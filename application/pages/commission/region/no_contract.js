var t = getApp(), core = t.requirejs("core"), i = t.requirejs("foxui"), j = t.requirejs("jquery"), wxparse = t.requirejs("wxParse/wxParse");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 1,
    steps: [

      {
        text: '商企信息',
      },
      {
        text: '合作合同',
      },
      {
        text: '打款凭证',
      },
      {
        text: '实名认证',
      }
    ]
  },
  tocred:function(){
    wx.navigateTo({
      url: '/pages/cred/cred',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    core.get('anter/contract', { options: options }, function (res) {
      wxparse.wxParse("content", "html", res.contract.content, that, "5")
      that.setData({
        show: true,
        apply: res.apply,
        contract: res.contract,
        id: options.id
      })
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
  upload: function (a) {
    var that = this;
    var imgs = this.data.imgs;
    core.upload(res => {
      imgs = res.url;
      console.log(imgs)
      that.setData({
        imgs: imgs,
        ischeck: 1
      })
    })
  },
  delimg: function (e) {
    var that = this;
    var imgs = this.data.imgs;
    imgs = '';
    that.setData({
      imgs: imgs,
      ischeck: 0
    })
  },
  submit: function(){
    var that = this;
    var imgs = that.data.imgs;
    var id = that.data.id;
    core.get('anter/ischeck',{imgs:imgs,id:id},function(res){
      if(res.error=='0'){
        if (res.error == '0') {
          wx.navigateTo({
            url: 'cred?id=' + id
          })
        }
      }
    })
  }
})