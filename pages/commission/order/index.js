var t = getApp(),
  a = t.requirejs("core");
Page({
  data: {
    status: "",
    page: 1,
    list: []
  },
  onLoad: function() {
    this.getList()
  },
  onReachBottom: function() {
    this.data.loaded || this.data.list.length == this.data.total || this.getList()
  },
  onPullDownRefresh: function() {
    wx.stopPullDownRefresh()
  },
  toggleSend: function(t) {
    if (this.data.openorderdetail || this.data.openorderbuyer) {
      var a = t.currentTarget.dataset.index,
        e = this.data.list[a].code,
        s = this.data.list;
      s[a].code = 1 == e ? 0 : 1, this.setData({
        list: s
      })
    }
  },
  getList: function() {
    var t = this;
    a.get("commission/order/get_list", {
      page: t.data.page,
      status: t.data.status
    }, function(a) {
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
      delete a.error;
      var e = a;
      e.show = !0, a.list.length > 0 && (e.page = t.data.page + 1, e.list = t.data.list.concat(a.list), a.list.length < a.pagesize && (e.loaded = !0)), t.setData(e), wx.setNavigationBarTitle({
        title: a.textorder
      })
    }, this.data.show)
  },
  myTab: function(t) {
    var e = this,
      s = a.pdata(t).status;
    e.setData({
      status: s,
      page: 1,
      list: []
    }), e.getList()
  }
})