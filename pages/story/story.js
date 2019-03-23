// pages/video/video.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0, // tab组件使用
    tabs: [
      [{
        id: "200",
        story_title: "阳光舜城项目视频近似的积分大家基地佛教冬季佛山地佛教冬季佛山地佛教冬季佛山地佛教冬季佛山",
        story_img: "/img/video_img.png",
        lookNum: "2001",
        date: "2月20日",
      }, {
        id: "202",
        story_title: "阳光舜城项目视频",
        story_img: "/img/video_img.png",
        lookNum: "2001",
        date: "2月20日",
      }, {
        id: "203",
        story_title: "阳光舜城项目视频",
        story_img: "/img/video_img.png",
        lookNum: "2001",
        date: "2月20日",
      }, {
        id: "204",
        story_title: "阳光舜城项目视频",
        story_img: "/img/video_img.png",
        lookNum: "2001",
        date: "2月20日",
      }],
      [{
        id: "1020",
        story_title: "阳光舜城项目视频111",
        story_img: "/img/video_img.png",
        lookNum: "2001",
        date: "2月20日",
      }, {
        id: "1021",
        story_title: "阳光舜城项目视频",
        story_img: "/img/video_img.png",
        lookNum: "1001",
        date: "2月20日",
      }, {
        id: "1022",
        story_title: "阳光舜城项目视频",
        story_img: "/img/video_img.png",
        lookNum: "1001",
        date: "2月20日",
      }, {
        id: "1023",
        story_title: "阳光舜城项目视频",
        story_img: "/img/video_img.png",
        lookNum: "1001",
        date: "2月20日",
      }], [{
        id: "1024",
        story_title: "阳光舜城项目视频222",
        story_img: "/img/video_img.png",
        lookNum: "1001",
        date: "2月20日",
      }, {
        id: "1025",
        story_title: "阳光舜城项目视频",
        story_img: "/img/video_img.png",
        lookNum: "1001",
        date: "2月20日",
      }, {
        id: "1026",
        story_title: "阳光舜城项目视频",
        story_img: "/img/video_img.png",
        lookNum: "1001",
        date: "2月20日",
      }, {
        id: "1026",
        story_title: "阳光舜城项目视频",
        story_img: "/img/video_img.png",
        lookNum: "1001",
        date: "2月20日",
      }], [{
        id: "321",
        story_title: "阳光舜城项目视频333",
        story_img: "/img/video_img.png",
        lookNum: "1001",
        date: "2月20日",
      }, {
        id: "322",
        story_title: "阳光舜城项目视频",
        story_img: "/img/video_img.png",
        lookNum: "1001",
        date: "2月20日",
      }, {
        id: "323",
        story_title: "阳光舜城项目视频",
        story_img: "/img/video_img.png",
        lookNum: "1001",
        date: "2月20日",
      }, {
        id: "324",
        story_title: "阳光舜城项目视频",
        story_img: "/img/video_img.png",
        lookNum: "1001",
        date: "2月20日",
      }],
    ],
    story_arr: [{
      id: "50",
      story_title: '省体育中心家属院封堵剂视频心家属院封堵剂视频心家属院封堵剂视频剂视视频剂视视频剂视视频剂视视频剂视频',
      story_img: '/img/video_img.png'
    }, {
      id: "51",
      story_title: '省体育中心家属院封堵剂视频',
      story_img: '/img/video_img.png'
    }, {
      id: "52",
      story_title: '省体育中心家属院封堵剂视频',
      story_img: '/img/video_img.png'
    }, {
      id: "53",
      story_title: '省体育中心家属院封堵剂视频',
      story_img: '/img/video_img.png'
    },

    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },


  toVideoDetail: function (e) {
    console.log(e)
    wx.navigateTo({
      url: '/pages/story_detail/story_detail?id=' + e.currentTarget.dataset.id,
    })
  },

  /**
   * 
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