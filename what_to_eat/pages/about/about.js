
Page({
  data: {
    text: "This is page data."
  },
  onLoad: function (options) {
    // Do some initialize when page load.
  },
  // Event handler.
  viewTap: function () {
    this.setData({
      text: 'Set some data for updating view.'
    }, function () {
      // this is setData callback
    })
  },
  gotoAlbum() {
    wx.navigateTo({ url: 'album/album' });
  },
  gotoMenu() {
    wx.navigateTo({ url: 'menu/menu' });
  },
  gotoDIY() {
    wx.navigateTo({ url: '../make/diy/diy' });
  }
  
})

