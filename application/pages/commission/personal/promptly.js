var t = getApp(), core = t.requirejs("core"), i = t.requirejs("foxui"), j = t.requirejs("jquery");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bottomshow: false,
    showview: false,
    imgs:['',''],
    detail: {
      name: '',
      mobile: '',
      address: '',
      userId: '',
    },
    id:'',
    level:'',
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
    steps: [
      {
        text: '个人信息',
      },
      {
        text: '合作合同',
      },

    ]

  }, 

  /**
   * 生命周期函数--监听页面加载
   */
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
  onLoad: function (options) {
    var that = this;
    var type = options.type;
    core.get("anter/getindustry",{options:options},function(res){
      if(res.error=='0'){
        that.setData({
          type: type,
          industry: res.industry,
          showview: true,
          id: options.id,
          level: options.level
        })
      }
      if(res.error=='1'){
        wx.showModal({
          title: '提示',
          content: res.message,
          success: function (sm) {
            if (sm.confirm) {
                wx.redirectTo({
                  url: '/pages/index/index'
                })
            } else if (sm.cancel) {
              wx.redirectTo({
                url: '/pages/index/index'
              })
            }
          }
        })
      }
    })
  },

  delimg: function(e){
    var that = this;
    var index =  e.currentTarget.dataset.index;
    var imgs = this.data.imgs;
    imgs[index] = '';
    that.setData({
      imgs: imgs
    })
  },

  toxinye_heton:function(){
    var that = this;
    var imgsFlag = this.data.imgs.length == 3 && this.data.imgs.every(item=>{
      return item != '';
    })
    var index = that.data.index;
    if(!index){
      core.alert('请选择行业！');
      return;
    }
    var industry = that.data.industry[index];
    if (!that.data.detail.name) {
      core.alert('请填写联系人姓名！');
      return;
    }
    if (!that.data.detail.mobile) {
      core.alert('请填写联系人电话！');
      return;
    }
    if (!that.data.detail.address) {
      core.alert('请填写联系人地址！');
      return;
    }
    if (!that.data.detail.userId) {
      core.alert('请填写证件号！');
      return;
    }
    if (!imgsFlag){
      core.alert('请上传完整图片！');
      return;
    }
    var imgs = that.data.imgs;
    var detail = that.data.detail;
    var id = that.data.id;
    var level = that.data.level;
    var type = that.data.type;
    core.post('anter/submit', { industry: industry, detail : detail, imgs : imgs, id : id, level : level,type : type},function(res){
      console.log(res)
      if(res.error=='1'){
        core.alert(res.message);
      }
      if (res.error == '0') {
        wx.navigateTo({
          url: 'contract?id='+res.id
        })
      }
    })
    // wx.navigateTo({
    //   url: '/pages/xinye_heton/xinye_heton',
    // })
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
  bindPickerChange(e){
    this.setData({
      index: e.detail.value
    })
  },
  upload: function (e) {
    var { index } = e.currentTarget.dataset;
    var that = this;
    var imgs = this.data.imgs;
    core.upload(res=>{
      imgs[index] = res.url
      that.setData({
        imgs: imgs
      })
    })
  },
})