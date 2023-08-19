// pages/contact/contact.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      colorList: []
  },

  /**
   * 获取随机颜色的方法
   */
    getColors(){
      wx.showLoading({
        title: '获取数据中',
      })
      
      const temp = []
      for(let i=0; i < 10; i++){
        const R = Math.floor(Math.random() * 256)
        const G = Math.floor(Math.random() * 256)
        const B = Math.floor(Math.random() * 256)
        temp.push([R, G, B].join(", "))
      }
      wx.hideLoading()
      return temp
  },

  /**
   * 刷新页面，新生成一批颜色
   */
  refreshColors(){
    this.setData({
        colorList: [...this.getColors()]
      })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
        colorList: [...this.data.colorList, ...this.getColors()]
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
      this.refreshColors()
      wx.stopPullDownRefresh()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    console.log("reach bottom")
    this.setData({
        colorList: [...this.data.colorList, ...this.getColors()]
      })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})