var cardLis=document.getElementsByName("card_li");
var userMessage=document.getElementsByName("userMessage");
for(var i=0;i<cardLis.length;i++){
	cardLis[i].index=i;
	cardLis[i].onclick=function(){
		for(var i=0;i<cardLis.length;i++){
			userMessage[i].style.display="none";
		}
		userMessage[this.index].style.display="block";
	}
}
