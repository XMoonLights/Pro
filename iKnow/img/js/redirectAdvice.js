//跳转至评论页面
var topics=document.getElementsByName("topic");
var pNodeText=document.getElementsByName("pContent");
for(var i=0;i<topics.length;i++){
	topics[i].index=i;
	topics[i].onclick=function(){
		localStorage.setItem("pContent",pNodeText[this.index].innerHTML);
		localStorage.setItem("pId",pNodeText[this.index].id);
//		window.location.href="advice/"+localStorage.getItem("pId");
		window.location.href="http://127.0.0.1:8888/advice?questionId="+localStorage.getItem("pId");
	}
}