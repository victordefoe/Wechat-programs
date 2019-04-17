var util = require('../../../utils/util.js');
// pages/make/random/random.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    canteen:"西工大包子",
    canset: ["西工大包子", "学生一餐厅", "学生二餐厅", "公诚快餐", "风味小吃城", "美食广场"],
    food: '狗不理包子',
    foodset: [["1,1","1,2"],["2,1","2,2"],["3,1",'3,2'],['4,1','4,2'],['5,1','5,2'],['6,1','6,2']],
    rotator:"on",
    randnum:0,
    foodnum:0,
    
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 调用函数时，传入new Date()参数，返回值是日期和时间
    var canset = this.data.canset;
    var foodset = this.data.foodset;
    var end = canset.length;
    var sta = 0;
    var rand = Math.floor(Math.random() * (end - sta) + sta);

    var foodend = foodset[rand].length;
    var foodsta = 0;
    var food = Math.floor(Math.random() * (foodend - foodsta) + foodsta);
    this.setData({
      randnum:rand,
      canteen:canset[rand],
      food:foodset[rand][food],
    })
   
    
    // 再通过setData更改Page()里面的data，动态更新页面的数据
    
    
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
    var that = this;
    var canset = this.data.canset;
    var end = canset.length;
    var rotate = this.data.rotator;
    var num_1 = 0;
    var rand = this.data.randnum;
    setInterval(function () {
      var time = util.formatTime(new Date());
      var rotate = that.data.rotator;
      if(rotate == "on"){
        num_1++;
      }
      
      if(num_1 >= end){
        num_1 = 0;
      }
      that.setData({
        time: time,
        // canteen: canset[num_1]
      });
    }, 100)
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

  stopRotate(){
    this.setData({
      rotator: "off"
    })
  }
})