// components/footer/footer.js
var _compData = {
  icon: [
    // {
    //   text: "首页",
    //   pagePath: "../index/index",
    //   iconPath: "../../public/images/index_default.png",
    //   selectedIconPath: "../../public/images/index.png"
    // },
    // {
    //   text: "分类",
    //   pagePath: "../classify/classify",
    //   iconPath: "../../public/images/classify_default.png",
    //   selectedIconPath: "../../public/images/classify.png"
    // },
    // {
    //   text: "购物车",
    //   pagePath: "../shopping/shopping",
    //   iconPath: "../../public/images/shopping_default.png",
    //   selectedIconPath: "../../public/images/shopping.png"
    // },
    // {
    //   text: "我的",
    //   pagePath: "../mine/mine",
    //   iconPath: "../../public/images/mine_default.png",
    //   selectedIconPath: "../../public/images/mine.png"
    // },
    {
      pagePath: "../welfare/welfare",
      text: "去抽奖",
      iconPath: "../../public/images/classify_default.png",
      selectedIconPath: "../../public/images/classify.png"
    }, 
    {
      pagePath: "../win_record/win_record",
      text: "中奖记录",
      iconPath: "../../public/images/classify_default.png",
      selectedIconPath: "../../public/images/classify.png"
    },
    {
      pagePath: "../welfare_more/welfare_more",
      text: "积分夺宝",
      iconPath: "../../public/images/classify_default.png",
      selectedIconPath: "../../public/images/classify.png"
    }
  ]
}
var _compEvent = {
  select: function (e) {
    var pages=getCurrentPages();
    var page_route=[];
    for(var i=0;i<pages.length;i++){
      if(page_route.indexOf(pages[i].route)==-1){
        page_route.push(pages[i].route)
      }
    }
    if(this.data.target==e.currentTarget.dataset.index){
      return false;
    }else{
      var tab = "pages"+e.currentTarget.dataset.page.split('..')[1];
      if(page_route.indexOf(tab)>-1){
        wx.reLaunch({
          url: e.currentTarget.dataset.page
        })
      }else{
        wx.navigateTo({
          url: e.currentTarget.dataset.page,
        })
      }
    }
  }
}
function init(that) {
  // console.log(that.data.target);
  var pages = getCurrentPages();
  var curPage = pages[pages.length - 1];
  var navbar = {
    icon: _compData.icon,
    target: that.data.target
  }
  that.setData({
    navbar: navbar
  });
  Object.assign(curPage, _compEvent);
}
module.exports = {
  init: init
}