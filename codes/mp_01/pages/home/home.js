// pages/home/home.js
import {createStoreBindings} from "mobx-miniprogram-bindings"
import {store} from "../../store/store"

Page({
    
    /**
     * * 生命周期函数--监听页面加载
    */
    onLoad(options) {
        this.storeBindings = createStoreBindings(this, {
            store,
            fields: ['numA', 'numB', 'sum'],
            actions: ['updateNumA']
        })
    },
    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {
        this.storeBindings.destoryStoreBindings() 
    },

  /**
   * 页面的初始数据
   */
  data: {

  },

//   // 发起GET请求
//   getInfo(){
//       wx.request({
//         url: 'https://jsonplaceholder.typicode.com/posts/1',
//         method: 'GET',
//         data: {
//             name: 'zs',
//             age: 20
//         },
//         success: (res) => {
//             console.log(res)
//         }
//       })
//   },

  goToMessage(){
      wx.switchTab({
        url: '/pages/message/message',
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
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})