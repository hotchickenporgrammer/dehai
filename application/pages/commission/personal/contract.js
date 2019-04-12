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
    steps: [
      {
        text: '个人信息',
      },
      {
        text: '合作合同',
      }
    ]
  },
  onischeck() {
    this.setData({
      ischeck: !this.data.ischeck 
    })
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
    console.log(e)
    var ischeck = that.data.ischeck;
    var id = that.data.apply.id;
    console.log(id)
    core.post('anter/ischeck', { ischeck: ischeck,id: id},function(res){
      if(res.error=='0'){
        wx.redirectTo({
          url: 'success'
        })
      }
    })
  }
})