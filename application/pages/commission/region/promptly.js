var t = getApp(),e = t.requirejs("core"),a = t.requirejs("foxui"),i = t.requirejs("jquery");
var list = []
var that

Page({

  /**
   * 页面的初始数据
   */
  data: {
    bottomshow: false,
    province: '地址选择',
    imgs: ['', ''],
    detail: {
      name: "",
      mobile: "",
      areas: "",
      street: "",
      address: "",
      userId:""
    },
    showPicker: !1,
    pvalOld: [0, 0, 0],
    pval: [0, 0, 0],
    areas: [],
    street: [],
    streetIndex: 0,
    noArea: !1,
    steps: [
      {
        text: '个人信息',
      },
      {
        text: '合作合同',
      },
      {
        text: '打款凭证',
      },

    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  upfile: function (e) {
    var that = this
    console.log(e)
    var i = e.target.dataset.index
    var userlist = this.data.user_list;
    var show_img = this.data.show
    wx.chooseImage({
      success: function (res) {
        userlist[i].user_img = res.tempFilePaths
        show_img[i].isshow = false
        that.setData({
          user_list: userlist,
          show: show_img
        })
      },
    })
  },
  showselect() {
    this.setData({
      bottomshow: true
    })
  },
  onLoad: function (options) {
    var that = this;
    that.setData({
      areas: t.getCache("cacheset").areas,
      type: options.type,
      level: options.level,
      id: options.id
    })
  },

  toxinye_heton: function () {
    var that = this;

    var i = that.data.detail;
    if ("" == i.province || !i.province) {
      e.alert('请选择经营地址！');
      return;
    }
    if ("" == i.name || !i.name){
      e.alert('请填写联系人姓名！');
      return;
    }
    if ("" == i.mobile || !i.mobile) {
      e.alert('请填写联系人电话！');
      return;
    }
    if ("" == i.address || !i.address) {
      e.alert('请填写联系人地址！');
      return;
    }
    if ("" == i.userId || !i.userId) {
      e.alert('请填写联系人证件号！');
      return;
    }
    var imgsFlag = this.data.imgs.length == 3 && this.data.imgs.every(item => {
      return item != '';
    })
    if (!imgsFlag) {
      e.alert('请上传完整图片！');
      return;
    }
    var detail = that.data.detail;
    var imgs = that.data.imgs;
    var id = that.data.id;
    var level = that.data.level;
    var type = that.data.type;
    e.get('anter/submit', { detail: detail, imgs: imgs, id: id, level: level, type: type},function(res){
      console.log(res)
      if (res.error == '1') {
        e.alert(res.message);
      }
      if (res.error == '0') {
        wx.navigateTo({
          url: 'contract?id=' + res.id
        })
      }
    })
    // wx.navigateTo({
    //   url: '/pages/xinye_heton/xinye_heton',
    // })
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
  onChange: function (t) {
    var e = this,
      a = e.data.detail,
      r = t.currentTarget.dataset.type,
      s = i.trim(t.detail.value);
    "street" == r && (a.streetdatavalue = e.data.street[s].code, s = e.data.street[s].name), a[r] = s, e.setData({
      detail: a
    })
  },
  getStreet: function (t, a) {
    if (t && a) {
      var i = this;
      if (i.data.detail.province && i.data.detail.city && this.data.openstreet) {
        var r = t[a[0]].city[a[1]].code,
          s = t[a[0]].city[a[1]].area[a[2]].code;
        e.get("getstreet", {
          city: r,
          area: s
        }, function (t) {
          var e = t.street,
            a = {
              street: e
            };
          if (e && i.data.detail.streetdatavalue) for (var r in e) if (e[r].code == i.data.detail.streetdatavalue) {
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
  selectArea: function (t) {
    var e = t.currentTarget.dataset.area,
    a = this.getIndex(e, this.data.areas);
    this.setData({
      pval: a,
      pvalOld: a,
      showPicker: !0
    })
  },
  getIndex: function (t, e) {
    if ("" == i.trim(t) || !i.isArray(e)) return [0, 0, 0];
    var a = t.split(" "),
      r = [0, 0, 0];
    for (var s in e) if (e[s].name == a[0]) {
      r[0] = Number(s);
      for (var d in e[s].city) if (e[s].city[d].name == a[1]) {
        r[1] = Number(d);
        for (var n in e[s].city[d].area) if (e[s].city[d].area[n].name == a[2]) {
          r[2] = Number(n);
          break
        }
        break
      }
      break
    }
    return r
  },
  bindChange: function (t) {
    var e = this.data.pvalOld,
      a = t.detail.value;
    e[0] != a[0] && (a[1] = 0), e[1] != a[1] && (a[2] = 0), this.setData({
      pval: a,
      pvalOld: a
    })
  },
  onCancel: function (t) {
    this.setData({
      showPicker: !1
    })
  },
  onConfirm: function (t) {
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
  upload: function (a) {
    var { index } = a.currentTarget.dataset;
    var that = this;
    var imgs = this.data.imgs;
    e.upload(res => {
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
})