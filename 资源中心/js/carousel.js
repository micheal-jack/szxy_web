window.onload=function(){
$(function(){
	var num=0;
	$('.lunbo span').click(play);
	function play(){
		if(!$('.lunbo ul li').is(':animated')){
			if($(this).hasClass('l')){
				num--;
				if(num==-1) num=$('.lunbo ul li').length-1;
			}else{
				num++;
				if(num==$('.lunbo ul li').length) num=0;
			}
			$('.lunbo ul li').eq(num).css("display","block").siblings().css("display","none");
		}
	}
	var timer=null;
	timer=setInterval(play,3000);
	$('.lunbo').hover(function(){
		clearInterval(timer);
	},function(){
		timer=setInterval(play,3000);
	})
})
}