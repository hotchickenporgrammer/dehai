var t = getApp(), e = t.requirejs("core"), a = (t.requirejs("icons"), t.requirejs("jquery")),i = t.requirejs("biz/goodspicker");
Page({
	data : {
		route : "category",
		category : {},
		icons : t.requirejs("icons"),
		selector : 0,
		advimg : "",
		recommands : {},
		level : 0,
		back : 0,
		child : {},
		parent : {},
    spec: {},

	},
	tabCategory : function (t) {
		this.setData({
			selector : t.target.dataset.id,
			advimg : t.target.dataset.src,
			child : t.target.dataset.child,
			back : 0
		}),
		a.isEmptyObject(t.target.dataset.child) ? this.setData({
			level : 0
		}) : this.setData({
			level : 1
		})
	},
	cateChild : function (t) {
		this.setData({
			parent : t.currentTarget.dataset.parent,
			child : t.currentTarget.dataset.child,
			back : 1
		})
	},
	backParent : function (t) {
		this.setData({
			child : t.currentTarget.dataset.parent,
			back : 0
		})
	},
	getCategory : function () {
		var t = this;
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
		e.get("shop/get_category", {}, function (e) {
			t.setData({
				category : e.category,
				show : !0,
				set : e.set,
				advimg : e.set.advimg,
				recommands : e.recommands,
				child : e.recommands
			})
		})
	},
	onShow : function () {
		this.getCategory()
	},
	onHide:function(){
	this.setData({
	  selector: "",
	  advimg:""
	})
	},
	onShareAppMessage : function () {
		return e.onShareAppMessage()
	},
  selectPicker: function (t) {
    var a = this;
    wx.getSetting({
      success: function (e) {
        if (e.authSetting["scope.userInfo"]) {
          i.selectpicker(t, a, "goodslist"),
            a.setData({
              cover: "",
              showvideo: !1
            });
        } else a.setData({
          modelShow: !0
        });
      }
    });
  },
  emptyActive: function () {
    this.setData({
      active: "",
      slider: "out",
      tempname: "",
      specsTitle: ""
    });
  },
  buyNow: function (t) {
    var thst = this;
    i.buyNow(t, thst);
  },
  getCart: function (t) {
    var e = this;
    i.getCart(t, e);
  },
  select: function () {
    var that = this;
    i.select(that);
  },
  inputNumber: function (t) {
    var that = this;
    i.inputNumber(t, that);
  },
  number: function (t) {
    var that = this;
    i.number(t, that);
  },
  onChange: function (t) {
    return s.onChange(this, t);
  },
  specsTap: function (th) {
    var that = this;
    console.log(that.data);
    i.specsTap(th, that);
  },
})
