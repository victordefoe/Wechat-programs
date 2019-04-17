
var util = require('../../../utils/util.js');
// pages/make/diy/diy.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 调用函数时，传入new Date()参数，返回值是日期和时间
    var time = util.formatTime(new Date());
    // 再通过setData更改Page()里面的data，动态更新页面的数据
    this.setData({
      time: time
    });
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
  
  },
  fail() {
    wx.showModal({
      title: '呜呜~~~',
      content: '这个功能程序猿在追剧还没写呢~~',
      success: function (res) {
        if (1) {
          wx.showModal({
            title: '既然这样(-_-)',
            content: '你还爱我么~~',
            success: function(res2){
              if (res2.confirm) {
                wx.showModal({
                  title: '哈哈(^_^)',
                  content: '就知道你最爱我了~',
                })
              }
              else
              {
                wx.showModal({
                  title: '贱人',
                  content: '你不爱我了...滚！',
                  success:function(res3){
                    while(1){wx.showLoading({
                      title: '坏人！',
                    })}
                  }
                })
                
              }
            }
          })
                
        }
        }
      })
    },

  

  gotResult() {
    wx.navigateTo({
      url: '../random/random',
    })
  }
  
})