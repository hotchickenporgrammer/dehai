var t = getApp(),
  core = t.requirejs("core");
Page({
  data: {
    code: 0
  },
  onShow: function() {
    this.getData()
  },
  getData: function() {
    var t = this;
    core.get("commission/withdraw", {}, function(a) {
      if(a.error=='70000'){
        wx.showModal({
          title: '提示',
          content: '您不是合伙人，是否前往申请！',
          success: function(res){
            if(res.confirm){
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
        
      } else {
        a.show = !0, t.setData(a)
      }
    })
  },
  toggleSend: function(t) {
    0 == t.currentTarget.dataset.id ? this.setData({
      code: 1
    }) : this.setData({
      code: 0
    })
  },
  withdraw: function(t) {
    this.data.cansettle && wx.navigateTo({
      url: "/pages/commission/apply/index"
    })
  }
})