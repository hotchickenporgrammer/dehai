var t = getApp(), e = t.requirejs("core"), a = t.requirejs("foxui"), i = t.requirejs("biz/diyform"), n = t.requirejs("jquery");

Page({
  data: {
    member: {}
  },
  onLoad: function (e) {
    t.url(e);
    var a = this;
    this.getInfo();
  },
  getInfo: function () {
    var t = this;
    e.get("member/mymember", {}, function (e) {
      i = {
        isagent: e.isagent,
        isshowdown: e.member.isshowdown,
        isabandon: e.member.isabandon,
        member: e.member,
        agent: e.agent,
        show: !0,
        agentnum: e.agentnum,
        return_member: e.return_member,
      };
      t.setData(i);
    });
  },
  downshow: function(t){
    var that = this;
    var downshow = t.currentTarget.dataset['downshow'];
    if(downshow=='1'){
      var texts = '关闭后，会员可以查看信息！';
    } else {
      var texts = '开启后，会员无法查看信息！';
    }
    wx.showModal({
      title: '提示',
      content: texts,
      success: function (sm) {
        if (sm.confirm) {
          e.get("member/mymember/downshow", { downshow: downshow }, function (res) {
            console.log(res)
            0 == res.error ? (that.setData({
              isshowdown: res.downshow
            }), e.alert("设置成功！")) : e.alert(res.message);
          });
        } else if (sm.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  abandon: function(t){
    var that = this;
    var isabandon = t.currentTarget.dataset['isabandon'];
    if (isabandon == '1') {
      var texts = '关闭后，获得返利！';
    } else {
      var texts = '开启后，清除返利并无法获得返利！';
    }
    wx.showModal({
      title: '提示',
      content: texts,
      success: function (sm) {
        if (sm.confirm) {
          e.get("member/mymember/abandon", { isabandon: isabandon }, function (res) {
            console.log(res)
            0 == res.error ? (that.setData({
              isabandon: res.isabandon
            }), e.alert("设置成功！")) : e.alert(res.message);
          });
        } else if (sm.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  usershare: function(){
    var that = this;
    var isagent = that.data.isagent;
    if (isagent == '0') {
      e.alert("您不是合伙人，请前往申请！")
    } else {
      wx.navigateTo({
        url: '/pages/commission/poster/index',
      })
    }
  },
  mymoney: function(){
    var that = this;
    var isagent = that.data.isagent;
    if(isagent=='0'){
      e.alert("您不是合伙人，请前往申请！")
    } else {
      wx.navigateTo({
        url: '/pages/commission/withdraw/index',
      })
    }
  },
  userinfos: function(){
    var that = this;
    var isagent = that.data.isagent;
    if (isagent == '0') {
      e.alert("您不是合伙人，请前往申请！")
    } else {
      wx.navigateTo({
        url: '/pages/commission/down/index',
      })
    }
  }
});