var sidebar = $("#sidebar");
var sidebarTrigger = $("#sidebar-trigger");
sidebarTrigger.on("click", function() {
	sidebar.css("right", 0);
	//	第二种方式:
	//	sidebar.animate({right:"0px"},1000);//animate表示动画
});
//var sidebarLi = $("#sidebar");
sidebar.on("click", function() {
	sidebar.css("right", -230);
});

//返回顶部
var topBtn = $("#topBtn");
topBtn.on("click", function() {
	$("html,body").animate({
		scrollTop: "0px"
	}, 800); //scrollTop：0px表示回滚到顶部
});

$(window).on("scroll", function() {
	if($(window).scrollTop() > $(window).height())
		topBtn.fadeIn();
	else
		topBtn.fadeOut();
});
$(window).trigger("scroll");//在页面刚开始加载时，程序自动触发滚动

//tips图片特效
var box=document.getElementById("clearfloat");
var tips=box.getElementsByTagName("a");
var boxTip=box.getElementsByClassName("box-tips");
for(var i=0;i<tips.length;i++){
	tips[i].index=i;
	tips[i].timer=null;
	tips[i].onmouseover=function(){
		startMove(this,-10,0);
	}
	tips[i].onmouseout=function(){
		startMove(this,10,160);
	}
}
//var timer=null;
function startMove(obj,speed,top){
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		if(boxTip[obj.index].offsetTop==top){
			clearInterval(obj.timer);
		}
		else{
			boxTip[obj.index].style.top=boxTip[obj.index].offsetTop+speed+"px";
		}
		
	},30);
	
}

$("#submit-btn").click(function(){
	$("#state-title").val("");
	$("#state-content").val("");
})

