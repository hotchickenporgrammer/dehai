// pages/spend/spend.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isshow: true,
    isshow1: true,
    order_info:[
      {
        data:[
          {
            order_num: "SH2019011203145688690",
            days: '2019-03-01',
            time: '10:21',
            money: '1234',
            },
          {
            order_num: "SH2019011203145688690",
            days: '2019-03-01',
            time: '10:21',
            money: '1234',
          },
          {
            order_num: "SH2019011203145688690",
            days: '2019-03-01',
            time: '10:21',
            money: '1234',
          }
        ]
      },{
        data:[
          {
            order_num: "SH2019011203145688690",
            days: '2019-03-01',
            time: '10:21',
            money: '1234',
          }, 
          {
            order_num: "SH2019011203145688690",
            days: '2019-03-01',
            time: '10:21',
            money: '1234',
          }
        ]
      }
    ]


  },


  closedList:function(){
    this.setData({
      isshow: !this.data.isshow,
    })
  },
  closedList1: function () {
    this.setData({
      isshow1: !this.data.isshow1,
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