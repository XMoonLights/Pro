let _compData={
  '_toast_.hidden':false,
  '_toast_.content':''
}
let toastPannel={
  show:function(data){
    let self =this;
    this.setData({
      '_toast_.hidden':true,
      '_toast_.content':data
    });
    setTimeout(function(){
      self.setData({
        '_toast_.hidden':false
      },3000)
    })
  }
}
function ToastPannel(){
  //获取当前页面
  let pages = getCurrentPages();
  let curPage = pages[pages.length-1];
  this._page=curPage;
  //
}