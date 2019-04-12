var t = getApp(), e = t.requirejs("core"), a = t.requirejs("foxui"), i = t.requirejs("jquery");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    province: '地址选择',
    detail: {
      name: "",
      mobile: "",
      cohr: "",
      company_name:"",
      company_code:""
    },
    company_img: '',
    steps: [
      {
        text: '商企信息',
      },
      {
        text: '合作合同',
      },
      {
        text: '实名认证',
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    e.get("anter/getindustry", { options: options }, function (res) {
      console.log(res)
      that.setData({
        industry: res.industry,
        type: options.type,
        level: options.level,
        id: options.id
      })
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
  bindPickerChange(e) {
    this.setData({
      index: e.detail.value
    })
  },
  onChange: function (t) {
    var e = this,
      a = e.data.detail,
      r = t.currentTarget.dataset.type,
      s = i.trim(t.detail.value);
    "street" == r && (a.streetdatavalue = e.data.street[s].code, s = e.data.street[s].name), a[r] = s, e.setData({
      detail: a
    })
    console.log(a)
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
  submit:function(){
    var that = this;
    var detail = that.data.detail;
    var company_img = that.data.company_img;
    var type = that.data.type;
    var level = that.data.level;
    var id = that.data.id;
    var index = that.data.index;
    var industry = that.data.industry[index];
    e.get('anter/anters', { detail: detail, industry: industry, company_img: company_img, id: id, level: level, type: type},function(res){
      console.log(res)
      if (res.error == '1') {
        core.alert(res.message);
      }
      if (res.error == '0') {
        wx.navigateTo({
          url: 'no_contract?id=' + res.id
        })
      }
    })
  }
})