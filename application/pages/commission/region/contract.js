var t = getApp(), core = t.requirejs("core"), i = t.requirejs("foxui"), j = t.requirejs("jquery"), wxparse = t.requirejs("wxParse/wxParse");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    apply: '',
    contract: '',
    active: '1',
    ischeck: false,
    imgs: '',
    steps: [
      {
        text: '个人信息',
      },
      {
        text: '合作合同',
      },
      {
        text: '打款凭证',
      }
    ]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    core.get('anter/contract',{options:options},function(res){
      wxparse.wxParse("content", "html", res.contract.content, that, "5")
      that.setData({
        show: true,
        apply: res.apply,
        contract: res.contract,
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
  submit: function(e){
    var that = this;
    var ischeck = that.data.ischeck;
    var id = that.data.apply.id;
    var imgs = that.data.imgs;
    console.log(id)
    core.post('anter/ischeck', { ischeck: ischeck,id: id,imgs: imgs},function(res){
      console.log(res)
      if(res.error=='0'){
        wx.navigateTo({
          url: 'cred?id='+id
        })
      }
    })
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
})