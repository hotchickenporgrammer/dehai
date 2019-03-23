// component/picker/picker.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    years: '2019',
    months: '3'

  },

  /**
   * 组件的方法列表
   */
  methods: {
    getDateTime:function(e){
      var newdate = []
      console.log(e)
      newdate = e.detail.value.split('-')
      this.setData({
        years: newdate[0],
        months: newdate[1]
      })
    }
  }
})
