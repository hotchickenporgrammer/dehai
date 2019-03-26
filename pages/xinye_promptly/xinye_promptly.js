// pages/promptly/promptly.js
var list = []
var that

Page({

  /**
   * 页面的初始数据
   */
  data: {
    bottomshow: false,
    province:'地址选择',
    city:'',
    areaList:{
      province_list: {
        110000: '北京市',

      },
      city_list: {
        110100: '北京市',
      }
      },
    show: [
      {
        isshow: true,
      }, {
        isshow: true,
      }, {
        isshow: true,
      }
    ],


    user_list: [
      { user_img: '' },
      { user_img: '' },
      { user_img: '' },
    ],
    steps: [
      {
        text: '商企信息',
      },
      {
        text: '合作合同',
      },
      {
        text: '打款凭证',
      }
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

  selcted_yes(e){
    console.log(e)
    var first = e.detail.values[0].name, //省
      two = e.detail.values[1].name //市
    
    this.setData({
      province:first,
      city:two,
      bottomshow: false
    })
  },
  selcted_no() {
    this.setData({
      bottomshow: false
    })
  },

  showselect(){
    this.setData({
      bottomshow: true
    })
  },
  onLoad: function (options) {
    that = this
  },

  toxinye_heton:function(){
    wx.navigateTo({
      url: '/pages/xinye_heton/xinye_heton',
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})