// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    shop_list:{
      all_order:[{
        shop_type:'商品类型',
        shop_img:'/img/shop.jpg',
        shop_title:'22222湛蓝裸露板材甲醛释放封堵剂复合高分子 板材强化封堵缓释降解甲醛除甲醛专用封堵1000ml大豆蛋白',
        shop_name:'1000ml大豆',
        shop_num: '1',
        shop_money:'99.9',
        shop_date:'2019-02-02',
        shop_time:'15:23:14',
        shop_come:'65.5',
        shop_cmsn:'10'
      },{
        shop_type:'商品类型',
        shop_img:'/img/shop.jpg',
        shop_title:'22222湛蓝裸露板材甲醛释放封堵剂复合高分子 板材强化封堵缓释降解甲醛除甲醛专用封堵1000ml大豆蛋白',
        shop_name:'1000ml大豆',
        shop_num: '1',
        shop_money:'99.9',
        shop_date:'2019-02-02',
        shop_time:'15:23:14',
        shop_come:'65.5',
        shop_cmsn:'10'
      },
      ],
      effective_order: [{
        shop_type: '商品类型',
        shop_img: '/img/shop.jpg',
        shop_title: '天空湛蓝裸露板材甲醛释放封堵剂复合高分子 板材强化封堵缓释降解甲醛除甲醛专用封堵1000ml大豆蛋白',
        shop_name: '1000ml大豆',
        shop_num: '1',
        shop_money:'99.9',
        shop_date: '2019-02-02',
        shop_time: '15:23:14',
        shop_come: '65.5',
        shop_cmsn: '10'
      }],
      failure_order: [{
        shop_type: '商品类型',
        shop_img: '/img/shop.jpg',
        shop_title: '3333天空湛蓝裸露板材甲醛释放封堵剂复合高分子 板材强化封堵缓释降解甲醛除甲醛专用封堵1000ml大豆蛋白',
        shop_name: '1000ml大豆',
        shop_num: '1',
        shop_money:'99.9',
        shop_date: '2019-02-02',
        shop_time: '15:23:14',
        shop_come: '65.5',
        shop_cmsn: '10'
      }]
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */



  // onChange(event) {
  //   wx.showToast({
  //     icon: 'none'
  //   });
  // },



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