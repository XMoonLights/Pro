// components/navbar/navbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    target: {
      type:String,
      default:'0'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    icon: [
      {
        text: "首页",
        pagePath: "../index/index",
        iconPath: "../../public/images/index_default.png",
        selectedIconPath: "../../public/images/index.png"
      },
      {
        text: "分类",
        pagePath: "../classify/classify",
        iconPath: "../../public/images/classify_default.png",
        selectedIconPath: "../../public/images/classify.png"
      },
      {
        text: "购物车",
        pagePath: "../shopping/shopping",
        iconPath: "../../public/images/shopping_default.png",
        selectedIconPath: "../../public/images/shopping.png"
      },
      {
        text: "我的",
        pagePath: "../mine/mine",
        iconPath: "../../public/images/mine_default.png",
        selectedIconPath: "../../public/images/mine.png"
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    select:function(e){
      wx.redirectTo({
        url: this.data.icon[e.currentTarget.dataset.index].pagePath
      })
    }
  }
})
