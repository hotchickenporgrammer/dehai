// pages/turnover/turnover.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isshow: true,
    order_info: [
      {
        data: [
          {
            days: '2019-03-01',
            vip: '一级会员',
            money:'1222'
          },
          {
            days: '2019-03-01',
            vip: '一级会员',
            money: '1222'

          },
          {
            days: '2019-03-01',
            money: '1222',
            vip: '一级会员',
          }
        ]
      }, {
        data: [
          {
            name:'杜文杰',
            avater:'/img/avater.png',
            money: '1220'
          },
          {
            name: '杜文杰',
            avater: '/img/avater.png',
            money: '1220'

          }
        ]
      }
    ]
  },



  showList:function(){
    this.setData({
      isshow: !this.data.isshow
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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