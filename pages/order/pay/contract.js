var t = getApp(), e = t.requirejs("core"), i = t.requirejs("foxui"), j = t.requirejs("jquery");
Page({
	data : {
		icons : t.requirejs("icons"),
		success : !1,
    imgs:[],
    images:[],
    detail:{
      company: '',
      projectname: '',
      projectnum: '',
      contractnum: '',
      username: '',
      mobile: '',
      price: '',
    }
	},
	onLoad : function (e) {
    var that = this;
    wx.getSystemInfo({
      success: res => {
        if (res.model.search('iPhone X') != -1) {
          that.setData({
            isIpx: true
          });
        }
      }
    })
		this.setData({
			options : e,
		}),
		t.url(e)
	},
	onShow : function () {
    t.checkAccount();
		this.get_list()
	},
	get_list : function () {
		var t = this;
    console.log(t.data.options);
		e.get("order/contract", t.data.options, function (i) {
      console.log(i)
      
			t.setData({
				list : i,
        success: i.success,
				show : !0,
        address: i.address,
			})
      if (i.success == '1') {
        return wx.setNavigationBarTitle({
          title: "等待审核"
        })
      }
		})
	},
  onChange: function (t) {
    var e = this;
    var a = e.data.detail;
    var r = t.currentTarget.dataset.type;
    var s = j.trim(t.detail.value);
    a[r] = s,
    e.setData({
      detail: a
    })
  },
  upload: function (t) {
    var a = this,
      m = e.data(t),
      s = m.type,
      n = a.data.images,
      o = a.data.imgs,
      r = m.index;
    "image" == s ? e.upload(function (t) {
      a.setData({
        images: a.data.images.concat(t.filename),
        imgs: a.data.imgs.concat(t.url),
      })
    }) : "image-remove" == s ? (n.splice(r, 1), o.splice(r, 1), a.setData({
      images: n,
      imgs: o
    })) : "image-preview" == s && wx.previewImage({
      current: o[r],
      urls: o
    })
  },
  submit: function(t){
    var that = this;
    var detail = that.data.detail;
    var imgs = that.data.imgs;
    var orderid = that.data.list.order.id;
    e.post("order/contract/submit", {detail:detail,imgs:imgs,orderid:orderid}, function (res) {
      if(res.error != '1'){
        e.alert('提交成功，请等待后台审核！');
        that.setData({
          success: 1,
        })
      } else {
        e.alert(res.message);
      }
    })
  }
})
