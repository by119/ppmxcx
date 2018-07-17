//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [],
  },
  setimgUrls: function (e) {
    var that = this;
    console.log(that.data.imgUrls)
    wx.request({
      url: 'http://118.178.229.154:2019/bannerList',
      method: 'post',
      data: {
        position: 3,
        versionName: '2.8.0'
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
      },
      success: function (res) {
        // console.log(res.data);
        var len = res.data.result;
        that.data.imgUrls = [];
        for (var i in res.data.result){
          that.data.imgUrls[i] = app.globalData.imgUrlHost + res.data.result[i].image;
        }
        that.setData({
          imgUrls: that.data.imgUrls
        })
      }
    })
  },
  onLoad: function (options) {
    this.setimgUrls();
  },
  onPullDownRefresh: function () {
    this.setimgUrls();
  } 
})