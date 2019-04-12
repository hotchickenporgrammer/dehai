var e = getApp(),t = e.requirejs("core"),a = e.requirejs("wxParse/wxParse"),i = e.requirejs("biz/diypage"),r = e.requirejs("jquery");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    icons: e.requirejs("icons"),
    route: 'member',
    ordercounts:'0.00',
    commission_ok:'0.00',
    countnum: '0.00',

  },

  /**
   * 生命周期函数--监听页面加载
   */

  toturnover:function(){
    wx.navigateTo({
      url: '/pages/commission/turnover',
    })
  },
  toorder:function(){
    wx.navigateTo({
      url: '/pages/commission/order/index',
    })
  },
  tospend:function(){
    wx.navigateTo({
      url: '/pages/commission/spend',
    })
  },
  topartner:function(){
    wx.navigateTo({
      url: '/application/pages/commission/partner',
    })
  },
  mymember:function(){
    wx.navigateTo({
      url: '/pages/member/mymember/index',
    })
  },
  myaddress:function()
  {
    wx.navigateTo({
      url: '/pages/member/address/index',
    })
  },
  myorders: function(that){
    var status = that.currentTarget.dataset.status;
    wx.navigateTo({
      url: '/pages/order/index?status='+status
    })
  },
  shareuser: function(){
    wx.navigateTo({
      url: '/pages/commission/poster/index',
    })
  },
  showcompany: function(){
    wx.navigateTo({
      url: '/pages/commission/company',
    })
  },
  onLoad: function (options) {
    var that = this;
    wx.getSetting({
      success: function (t) {
        console.log(t);
        t.authSetting["scope.userInfo"] ? that.setData({
          modelShow: !1
        }) : that.setData({
          modelShow: !0,
        });
      }
    });
  },
  getmemberInfo: function () {
    var e = this;
    t.get("member", {}, function (t) {
      if (0 != t.error) {
        e.setData({
          modelShow: !0
        })
      } else {
        if (t.notsatisfygrade) {
          wx.redirectTo({
            url: t.jumpUrl,
          })
        }
        e.setData({
          member: t,
          show: !0,
          background: t.background ? t.background : "#ff5555",
          customer: t.customer,
          customercolor: t.customercolor,
          phone: t.phone,
          phonecolor: t.phonecolor,
          phonenumber: t.phonenumber,
          iscycelbuy: t.iscycelbuy,
          bargain: t.bargain
        }), a.wxParse("wxParseData", "html", t.copyright, e, "5");
      }
    });
  },
  getwithdraw: function(){
    var that = this;
    t.get('commission/withdraw', {}, function (res) {
      if (res.error == '0') {
        that.setData({
          commission_ok: res.member.commission_ok
        })
      }
    })
  },
  getallorder: function(){
    var that = this;
    t.get('anter/myallorder', {}, function (res) {
      if (res.error == '0') {
        that.setData({
          ordercounts: res.ordercounts
        })
      }
    })
  },
  getdownorder: function () {
    var that = this;
    t.get('commission/order/get_alllist', {}, function (res) {
      if (res.error == '0') {
        that.setData({
          countnum: res.countnum
        })
      }
    })
  },
  confirmclick: function () {
    this.setData({
      modelShow: !1
    });
  },
  cancelclick: function () {
    console.log(1)
    wx.redirectTo({
      url: "/pages/index/index"
    });
  },
  userinfo: function (t) {
    var a = this;
    if (t.detail.userInfo) wx.showLoading({ title: '正在授权', mask: true })
    if (t.detail.userInfo) e.getUserInfo(function () {
      a.onShow();
    });
    a.setData({
      modelShow: !1
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
    var that = this;
    wx.getSetting({
      success: function (t) {
        console.log(t);
        t.authSetting["scope.userInfo"] ? that.setData({
          modelShow: !1
        }) : that.setData({
          modelShow: !0,
        });
      }
    });
    that.getmemberInfo();
    that.getdownorder();
    that.getwithdraw();
    that.getallorder();
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

  },
  userinfos: function(){
    wx.navigateTo({
      url: '/pages/member/info/index',
    })
  },
  mymoney: function(){
    wx.navigateTo({
      url: '/pages/commission/withdraw/index',
    })
  }
})