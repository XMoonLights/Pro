//工具栏设计
$(window).on("scroll", function() {
	var toolDiv_height=$('.advice').height()+$('.answer').height();
	if($(window).scrollTop() > toolDiv_height)
		$("#answer").fadeIn();
	else
		$("#answer").fadeOut();
});
$(window).trigger("scroll");//在页面刚开始加载时，程序自动触发滚动