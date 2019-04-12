var t = getApp(),a = t.requirejs("core");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    isshow: true,
    isshow1: true,
    status: "",
    page: 1,
    countnum: '0.00',
    years: '',
    months: '',
  },


  closedList:function(){
    this.setData({
      isshow: !this.data.isshow,
    })
  },
  closedList1: function () {
    this.setData({
      isshow1: !this.data.isshow1,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getList()
    this.getList2()
    this.getordercount()
    this.setData({
      show: true
    })
  },
  getList: function () {
    var t = this;
    a.get("anter/get_orderlist1", {
      years: t.data.years,
      months: t.data.months
    }, function (a) {
      if(a.list.length>0){
        t.setData({
          list0: a.list,
          years: a.year,
          months: a.month
        })
      } else {
        t.setData({
          list0: '',
          years: a.year,
          months: a.month
        })
      }
    })
  },
  getList2: function () {
    var t = this;
    a.get("anter/get_orderlist2", {
      years: t.data.years,
      months: t.data.months
    }, function (a) {
      if (a.list.length > 0) {
        t.setData({
          list1: a.list,
          years: a.year,
          months: a.month
        })
      } else {
        t.setData({
          list1: '',
          years: a.year,
          months: a.month
        })
      }
    })
  },
  getordercount: function(){
    var that = this;
    a.get('commission/order/get_alllist', {}, function (res) {
      if (res.error == '0') {
        that.setData({
          countnum: res.countnum
        })
      }
    })
  },
  getDateTime: function (e) {
    var that = this;
    var newdate = []
    console.log(e)
    newdate = e.detail.value.split('-')
    this.setData({
      years: newdate[0],
      months: newdate[1]
    })
    var years = newdate[0];
    var months = newdate[1];
    that.getList();
    that.getList2();
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