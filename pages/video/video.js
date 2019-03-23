// pages/video/video.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0, // tab组件使用
    tabs: [
      [{
        id: "100",
        video_title: "阳光舜城项目视频近似的积分大家基地佛教冬季佛山地佛教冬季佛山地佛教冬季佛山地佛教冬季佛山",
        video_img: "/img/video_img.png",
        lookNum: "1001",
        date: "2月20日",
      }, {
        id: "102",
        video_title: "阳光舜城项目视频",
        video_img: "/img/video_img.png",
        lookNum: "1001",
        date: "2月20日",
      }, {
        id: "103",
        video_title: "阳光舜城项目视频",
        video_img: "/img/video_img.png",
        lookNum: "1001",
        date: "2月20日",
      }, {
        id: "104",
        video_title: "阳光舜城项目视频",
        video_img: "/img/video_img.png",
        lookNum: "1001",
        date: "2月20日",
      }],
      [{
        id: "110",
        video_title: "阳光舜城项目视频111",
        video_img: "/img/video_img.png",
        lookNum: "1001",
        date: "2月20日",
      }, {
          id: "111",
          video_title: "阳光舜城项目视频",
          video_img: "/img/video_img.png",
          lookNum: "1001",
          date: "2月20日",
        }, {
          id: "112",
          video_title: "阳光舜城项目视频",
          video_img: "/img/video_img.png",
          lookNum: "1001",
          date: "2月20日",
        }, {
          id: "113",
          video_title: "阳光舜城项目视频",
          video_img: "/img/video_img.png",
          lookNum: "1001",
          date: "2月20日",
        }], [{
          id: "120",
          video_title: "阳光舜城项目视频222",
          video_img: "/img/video_img.png",
          lookNum: "1001",
          date: "2月20日",
        }, {
          id: "121",
          video_title: "阳光舜城项目视频",
          video_img: "/img/video_img.png",
          lookNum: "1001",
          date: "2月20日",
        }, {
          id: "122",
          video_title: "阳光舜城项目视频",
          video_img: "/img/video_img.png",
          lookNum: "1001",
          date: "2月20日",
        }, {
          id: "123",
          video_title: "阳光舜城项目视频",
          video_img: "/img/video_img.png",
          lookNum: "1001",
          date: "2月20日",
        }], [{
          id: "130",
          video_title: "阳光舜城项目视频333",
          video_img: "/img/video_img.png",
          lookNum: "1001",
          date: "2月20日",
        }, {
          id: "131",
          video_title: "阳光舜城项目视频",
          video_img: "/img/video_img.png",
          lookNum: "1001",
          date: "2月20日",
        }, {
          id: "132",
          video_title: "阳光舜城项目视频",
          video_img: "/img/video_img.png",
          lookNum: "1001",
          date: "2月20日",
        }, {
          id: "133",
          video_title: "阳光舜城项目视频",
          video_img: "/img/video_img.png",
          lookNum: "1001",
          date: "2月20日",
        }],
    ],
    video_arr: [{
        id: "10",
      video_title: '省体育中心家属院封堵剂视频心家属院封堵剂视频心家属院封堵剂视频剂视视频剂视视频剂视视频剂视视频剂视频',
        video_img: '/img/video_img.png'
      }, {
        id: "11",
        video_title: '省体育中心家属院封堵剂视频',
        video_img: '/img/video_img.png'
      }, {
        id: "12",
        video_title: '省体育中心家属院封堵剂视频',
        video_img: '/img/video_img.png'
      }, {
        id: "13",
        video_title: '省体育中心家属院封堵剂视频',
        video_img: '/img/video_img.png'
      },

    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },


  toVideoDetail:function(e){
    console.log(e)
    wx.navigateTo({
      url: '/pages/video_detail/video_detail?id='+e.currentTarget.dataset.id,
    })
  },

  /**
   * 
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})