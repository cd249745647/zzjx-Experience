var util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nickName: '',
    avatarUrl: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getUserInfo({
      success: function (res) {
        var userInfo = res.userInfo;
        var nickName = userInfo.nickName;
        var avatarUrl = userInfo.avatarUrl;
        that.setData({
          nickName: userInfo.nickName,
          avatarUrl: userInfo.avatarUrl
        })
      },
      fail: function(){
        console.log('拒绝');
      }
    })
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
    return {
      title: '欢迎进入中直教学',
      path: 'pages/index/index',
      success: function (res) {

      }
    }
  },
  bindDateChange: function(e){
    this.setData({
      date: e.detail.value
    })
  }
})