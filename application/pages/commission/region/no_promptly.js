var t = getApp(),e = t.requirejs("core"),a = t.requirejs("foxui"),i = t.requirejs("jquery");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    province: '地址选择',
    detail: {
      address: ""
    },
    isshow: false,
    user_img: '',
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

  /**
   * 生命周期函数--监听页面加载
   */
  toheton() {
    wx.navigateTo({
      url: '/pages/no_heton/no_heton',
    })
  },

  onLoad: function(options) {
    var that = this;
    that.setData({
      areas: t.getCache("cacheset").areas,
      options: options
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },
  getStreet: function(t, a) {
    if (t && a) {
      var i = this;
      if (i.data.detail.province && i.data.detail.city && this.data.openstreet) {
        var r = t[a[0]].city[a[1]].code,
          s = t[a[0]].city[a[1]].area[a[2]].code;
        e.get("getstreet", {
          city: r,
          area: s
        }, function(t) {
          var e = t.street,
            a = {
              street: e
            };
          if (e && i.data.detail.streetdatavalue)
            for (var r in e)
              if (e[r].code == i.data.detail.streetdatavalue) {
                a.streetIndex = r, i.setData({
                  "detail.street": e[r].name
                });
                break
              }
          i.setData(a)
        })
      }
    }
  },
  selectArea: function(t) {
    var e = t.currentTarget.dataset.area,
      a = this.getIndex(e, this.data.areas);
    this.setData({
      pval: a,
      pvalOld: a,
      showPicker: !0
    })
  },
  getIndex: function(t, e) {
    if ("" == i.trim(t) || !i.isArray(e)) return [0, 0, 0];
    var a = t.split(" "),
      r = [0, 0, 0];
    for (var s in e)
      if (e[s].name == a[0]) {
        r[0] = Number(s);
        for (var d in e[s].city)
          if (e[s].city[d].name == a[1]) {
            r[1] = Number(d);
            for (var n in e[s].city[d].area)
              if (e[s].city[d].area[n].name == a[2]) {
                r[2] = Number(n);
                break
              }
            break
          }
        break
      }
    return r
  },
  bindChange: function(t) {
    var e = this.data.pvalOld,
      a = t.detail.value;
    e[0] != a[0] && (a[1] = 0), e[1] != a[1] && (a[2] = 0), this.setData({
      pval: a,
      pvalOld: a
    })
  },
  onCancel: function(t) {
    this.setData({
      showPicker: !1
    })
  },
  onConfirm: function(t) {
    var that = this;
    var e = this.data.pval,
      a = this.data.areas,
      i = this.data.detail;
    i.province = a[e[0]].name, i.city = a[e[0]].city[e[1]].name, i.datavalue = a[e[0]].code + " " + a[e[0]].city[e[1]].code, a[e[0]].city[e[1]].area && a[e[0]].city[e[1]].area.length > 0 ? (i.area = a[e[0]].city[e[1]].area[e[2]].name, i.datavalue += " " + a[e[0]].city[e[1]].area[e[2]].code, this.getStreet(a, e)) : i.area = "", i.street = "", this.setData({
      detail: i,
      streetIndex: 0,
      showPicker: !1
    })
  },
  onChange: function (t) {
    var e = this;
    var a = e.data.detail;
    var r = t.currentTarget.dataset.type;
    var s = i.trim(t.detail.value);
    a[r] = s,
      e.setData({
        detail: a
      })
  },
  upload: function (a) {
    var that = this;
    var company_img = this.data.company_img;
    e.upload(res => {
      company_img = res.url
      that.setData({
        company_img: company_img
      })
    })
  },
  submit: function(){
    var that = this;
    var detail = that.data.detail;
    var img = that.data.company_img;
    var options = that.data.options;
    e.get('anter/submits', { detail: detail, img: img, options: options }, function (res) {
      console.log(res)
      if (res.error == '1') {
        e.alert(res.message);
      }
      if (res.error == '0') {
        wx.navigateTo({
          url: 'no_contract?id=' + res.id
        })
      }
    })
  }
})