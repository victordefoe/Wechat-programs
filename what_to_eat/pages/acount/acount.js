// pages/acount/acount.js
var lunar = require('./lunar.js');
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    showyear1:2018,
    showmonth1: 8,
    showday1:1,
    showyear2: 2018,
    showmonth2: 8,
    showday2: 1,
    flag:0,
    days_style:{},
    lunar:'农历日期'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    
    let days = new Array;
    days.push({
      month: 'current', day: 8, color: '#a18ada'
    });

    days.push(
      { month: 'current', day: 12, color: 'white', background: '#b49eeb' },
      { month: 'current', day: 17, color: 'white', background: '#f5a8f0' },
      { month: 'current', day: 20, color: 'white', background: '#aad4f5' },
      { month: 'current', day: 25, color: 'white', background: '#84e7d0' },
    );

    this.setData({
      days_style: days,
      
    })
    console.log(this.data.days_style);

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

  dayClick: function (event) {
    if(this.data.flag==0){
      console.log('1111');
      this.setData({
        showmonth1: event.detail.month,
        showday1:event.detail.day,
        showyear1: event.detail.year,
        flag:~this.data.flag,
        
      })
    }
    
    else{
      console.log(this.data.days_style);
      this.setData({
        showmonth2: event.detail.month,
        showday2: event.detail.day,
        showyear2: event.detail.year,
        flag: ~this.data.flag,
        
      })
    }

    var arr1 = [this.data.showyear1, this.data.showmonth1, this.data.showday1]
    var arr2 = [this.data.showyear2, this.data.showmonth2, this.data.showday2]
    var lu = lunar.solarToLunar(this.showyear1, this.showmonth1, this.showday1)
    console.log(lu);
    var lunardate = lu.year + '年' + lu.month + '月' + lu.day + '日'
    if(this.compare(arr1, arr2) == 0){
      this.setData({
        showyear1:arr2[0],
        showmonth1:arr2[1],
        showday1:arr2[2],
        showyear2: arr1[0],
        showmonth2: arr1[1],
        showday2: arr1[2],
        lunar: lunardate,
        
      })
    }

    this.setData({
      days_style: [{ month: 'current', day: this.data.showday1, color: 'white', background: '#84e7d0' },
      { month: 'current', day: this.data.showday2, color: 'white', background: '#aad4f5' }]
    })

    

  },

  dateChange: function (event) {
    console.log(event.detail);
    this.setData({
      showday: event.detail.day,

    })
  },

  compare(arr1,arr2){
    if(arr1[0]>arr2[0]){
      return 0;
    }
    else if (arr1[1] > arr2[1]){
      return 0;
    }
    else if (arr1[2] > arr2[2]){
      return 0;
    }
    else
      return 1;
  },



  



})


