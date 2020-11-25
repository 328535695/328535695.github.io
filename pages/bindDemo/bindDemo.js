// pages/bindDemo/bindDemo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "name":"张三",
    "hig":"50px",
    "wid":"200px",
    "bgColor":"orange"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //查看调用手机设备信息
    //console.log(wx.getSystemInfoSync().model)

    //加载中提示
    // wx.showLoading({
    //   title: '加载中..',
    // })

    // setTimeout(res=>{
    //   wx.hideLoading();
    // },2000)

    //提交提示信息
    wx.showToast({
      title: '提交成功',
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

  },

  mytap:function(res){
    var name = res.currentTarget.dataset.myname;
    this.setData({
      name:name
    })
  },

  changeStyle:function(res){
    var height = res.currentTarget.dataset.height;
    var width = res.currentTarget.dataset.width;
    var backgroundcolor = res.currentTarget.dataset.backgroundcolor;
    this.setData({
      hig:height,
      wid:width,
      bgColor:backgroundcolor
    })
  },

  mytouchstart: function(){
    console.log("手指触摸动作开始");
  },

  mytouchmove: function(){
    console.log("手指触摸后移动	");
  }
})