// pages/forDemo/forDemo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "listArr":["JAVA","C++","HTML","PS"],
    "objArr":[
      {title:"文章标题1",time:"2020-11-11"},
      {title:"文章标题2",time:"2020-11-12"},
      {title:"文章标题3",time:"2020-11-13"},
      {title:"文章标题4",time:"2020-11-14"}
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("监听页面加载");
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("监听页面初次渲染完成");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("监听页面显示");
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("监听页面隐藏");
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("监听页面卸载");
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log("监听用户下拉动作");
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("触底了")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})