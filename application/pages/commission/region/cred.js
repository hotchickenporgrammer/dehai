var t = getApp(), core = t.requirejs("core"), i = t.requirejs("foxui"), j = t.requirejs("jquery");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 2,
    isshow: false,
    user_img: '',
    detail: {
      franchise_price:"",
      purchase_price: "",
      total_price: "",
      bank: "",
      cardnum: ""
    },
    steps: [
      {
        text: '个人信息',
      },
      {
        text: '合作合同',
      },
      {
        text: '打款凭证',
      }
    ]
  },
  to_readname:function(){
    wx.navigateTo({
      url: '/pages/no_real/no_real',
    })
  },

  upfile: function () {
    var that = this
    wx.chooseImage({
      success: function (res) {
        that.setData({
          user_img: res.tempFilePaths,
          isshow: true
        })
      },
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    core.get('anter/getcontract',{options:options},function(res){
      if(res.error=='0'){
        if (res.level.level == '97' || res.level.level == '98'){
          var steps = [
            {
              text: '个人信息',
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
          ];
          that.setData({
            steps: steps
          })
        }
        that.setData({
          level: res.level,
          id: options.id
        })
      }
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
      s = j.trim(t.detail.value);
    "street" == r && (a.streetdatavalue = e.data.street[s].code, s = e.data.street[s].name), a[r] = s, e.setData({
      detail: a
    })
    console.log(a)
  },
  upload: function (a) {
    var that = this;
    var img = this.data.img;
    core.upload(res => {
      img = res.url;
      console.log(img)
      that.setData({
        img: img,
      })
    })
  },
  delimg: function (e) {
    var that = this;
    var img = this.data.img;
    img = '';
    that.setData({
      img: img
    })
  },
  submit: function (e) {
    var that = this;
    var id = that.data.id;
    var img = that.data.img;
    var detail = that.data.detail;
    var level = that.data.level;
    core.post('anter/voucher', { detail: detail, id: id, img: img }, function (res) {
      console.log(res)
      if (res.error == '0') {
        if (level.level == '97' || level.level == '98'){
          wx.navigateTo({
            url: 'no_real?id='+id
          })
        } else {
          wx.navigateTo({
            url: 'success'
          })
        }
        
      }
    })
  },
})