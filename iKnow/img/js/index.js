var btn = document.getElementsByName("choose");
var webs = document.getElementsByClassName("text");
for(var i = 0; i < btn.length; i++) {
	btn[i].index = i;
	btn[i].onclick = function() {
		for(var i = 0; i < btn.length; i++) { //遍歷所有頁面，使其初始化
			//			btn[i].className='col-xs-3';
			webs[i].style.display = 'none';
		}
		//		this.className="col-xs-3 active";
		webs[this.index].style.display = 'block';
	}
}

//侧边栏效果实现
//var sidebar_btn = document.getElementById("sidebar");
//var sidebar_div = document.getElementsByName("sidebar");
//var body_width = document.body.offsetWidth;
//var sidebar_width = body_width * 0.3;
//window.onload = function() {
//	sidebar_div[0].style.width = sidebar_width + 'px';
//	sidebar_div[0].style.left = '-' + sidebar_width + 'px';
//}
//sidebar_btn.onclick = function() {
//	sidebar_div[0].style.left = '0';
//}


//function whichElement(e){
//	var tag;
//	if(!e){
//		var e=window.event;
//	}if(e.target){
//		tag=e.target;
//	}else if(e.srcElement){
//		tag=e.srcElement;
//	}
//	var tname;
//	tname=tag.tagName;
//	if(tname!='aside'){
//		sidebar_div[0].style.left='-'+sidebar_width+'px';
//	}
//}

//获取页面中点击的标签元素对象
//document.body.onmousedown = function(e) {
//	var tag;
//	if(!e) {
//		var e = window.event;
//	}
//	if(e.target) {
//		tag = e.target;
//	} else if(e.srcElement) {
//		tag = e.srcElement;
//	}
//	var tname;
//	tname = tag.tagName;
//	if(tname != 'ASIDE') { //注意：返回的是一个大写的对象
//		//		console.log(tname);
//		sidebar_div[0].style.left = '-' + sidebar_width + 'px';
//	}
//}

//跳转至评论页面
var topics=document.getElementsByName("topic");
var pNodeText=document.getElementsByName("pContent");
for(var i=0;i<topics.length;i++){
	topics[i].index=i;
	topics[i].onclick=function(){
		localStorage.setItem("pContent",pNodeText[this.index].innerHTML);
		localStorage.setItem("pId",pNodeText[this.index].id);
//		window.location.href="advice/"+localStorage.getItem("pId");
		window.location.href="advice?questionId="+localStorage.getItem("pId");
	}
}


//登录模态框
var loginlis = document.getElementsByName("loginLi");
var loginlists = document.getElementsByName("loginList");
for(var i = 0; i < loginlis.length; i++) {
	loginlis[i].index = i;
	loginlis[i].onclick = function() {
		for(var i = 0; i < loginlis.length; i++) { //遍歷所有頁面，使其初始化
			//			btn[i].className='col-xs-3';
			loginlists[i].style.display = 'none';
		}
		//		this.className="col-xs-3 active";
		loginlists[this.index].style.display = 'block';
	}
}