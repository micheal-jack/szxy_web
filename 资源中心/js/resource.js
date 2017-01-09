$(function(){

	$(".click-tab a").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		var index = $(this).index();
		$(this).parents(".container").find(".mine-list > ul").eq(index).addClass("dis-block").siblings().removeClass("dis-block");
	})


	/*********我的资源鼠标移上显示边框************/
	$(".mine-con li").hover(function(){
		$(this).addClass("act");
	},function(){
		$(this).removeClass("act");
	})
})