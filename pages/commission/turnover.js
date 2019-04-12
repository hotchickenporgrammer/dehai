var t = getApp(), a = t.requirejs("core");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isshow: false,
    show: false
  },



  showList:function(){
    this.setData({
      isshow: false
    })
  },
  showLists: function () {
    this.setData({
      isshow: true
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getList()
    this.getordercount()
    this.getalldown()
    this.getdownorder()
  },
  getList: function () {
    var t = this;
    a.get("commission/order/get_list2", {
      years: t.data.years,
      months: t.data.months
    }, function (a) {
      if (a.error == '70000') {
        wx.showModal({
          title: '提示',
          content: '您不是合伙人，是否前往申请！',
          success: function (res) {
            if (res.confirm) {
              wx.navigateTo({
                url: '/application/pages/commission/partner'
              })
            } else {
              wx.navigateBack({
                data: 1
              })
            }
          }
        })
      }
      if (a.list.length > 0) {
        t.setData({
          list: a.list,
          years: a.year,
          months: a.month,
          show: true,
        })
      } else {
        t.setData({
          list: '',
          years: a.year,
          months: a.month,
          show: true,
        })
      }
    })
  },
  getalldown: function(){
    var that = this;
    a.get("commission/down/get_set", {}, function (res) {
      that.setData({
        downtotal: res.total
      })
    })
  },
  getordercount: function () {
    var that = this;
    a.get('commission/order/get_alllist', {}, function (res) {
      if (res.error == '0') {
        that.setData({
          countnum: res.countnum
        })
      }
    })
  },
  getdownorder: function(){
    var that = this;
    a.get('commission/down/get_alldown',{},function(res){
      console.log(res)
    })
  },
  getDateTime: function (e) {
    var newdate = []
    console.log(e)
    newdate = e.detail.value.split('-')
    this.setData({
      years: newdate[0],
      months: newdate[1]
    })
    this.getList()
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