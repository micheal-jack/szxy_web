$(function(){

	$("#click-tab1 a").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		var index = $(this).index();
		$("#mine-list1 > ul").eq(index).addClass("dis-block").siblings().removeClass("dis-block");
	})
	$("#click-tab2 a").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		var index = $(this).index();
		$("#mine-list2 > ul").eq(index).addClass("dis-block").siblings().removeClass("dis-block");
	})
	$("#click-tab3 a").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		var index = $(this).index();
		$("#mine-list3 > ul").eq(index).addClass("dis-block").siblings().removeClass("dis-block");
	})


	/*********我的资源鼠标移上显示边框************/
	$(".mine-con li").hover(function(){
		$(this).addClass("act");
	},function(){
		$(this).removeClass("act");
	})
})