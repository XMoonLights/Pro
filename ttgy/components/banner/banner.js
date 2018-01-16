var util = require("../../utils/util.js");
Component({
  data:{
    indicatorDots: true,//是否显示面板指示点
    indicatorColor: "rgba(0, 0, 0, .3)",//指示点颜色
    indicatorActiveColor: "#007aff",//当前选中的指示点颜色
    autoplay: true,//是否自动切换
    interval: 5000,//自动切换时间间隔
    duration: 1000,//滑动动画时长
    circular: true,//是否采用衔接滑动
    imageWidth: 0,
    imageHeight: 0
  },
  onReady:function(){
    
  },
  properties:{
    //设置属性接受外部引用页面的传值
    img:{
      type:Array
    },
    title:{
      type:Array
    }
  },
  methods:{
    //组件中自定义方法
    imageLoad: function (e) {
      var imageSize = util.imageUtil(e);
      this.setData({
        imageWidth: imageSize.imageWidth,
        imageHeight: imageSize.imageHeight
      })
    }
  }
})