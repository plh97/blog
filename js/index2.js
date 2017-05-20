/*bootstrapt---tap选项卡切换按钮*/
var number_parse = $(".badge").text();
$(".badge").parent().click(function () {
  number_parse++;
  $(".badge").text(number_parse);
})


/*百度分享*/
window._bd_share_config={
		"common":
			{"bdSnsKey":
				{
					"tsina": "3185645315",
					"douban": "0741f32a7258ef8715c5d97f570ace95"
				},
				"bdText":"",
				"bdMini":"2",
				"bdPic":"",
				 "bdStyle":"0",
				"bdSize":"24"
			},
		"share":{}
	};
with(document)0[(getElementsByTagName('head')[0]||body)
.appendChild(createElement('script'))
.src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];




/*设置body-margin-top*/
window.onresize = function () {
	$("body").css({"margin-top":$(".navbar").height()+20})
	if ($(window).width()<500) {
	};
}
window.onload = function () {
	$("body").css({"margin-top":$(".navbar").height()+20})
	if ($(window).width()<500) {
	};
}




/*slidenav滚动监听*/
$(document).ready(function(){

	var some_boot_context = $(".bootstrapt-container").find(".bootstrapt-context")
	$(".scroll ul li").click(function () {
		number_context = $(this).attr('class');
		context_top = $("#"+number_context).offset().top;
		$('body,html').animate({scrollTop:context_top-100},1000)
	})

	$(window).scroll(function () {
		Things = $(".scroll ul li");
		for ( i = Things.length ; i >= 1; i--) {
			this_number = $(".bootstrapt-container #"+i).offset().top;
			if ($(window).scrollTop() >= this_number-101 ) {
				$(".scroll ul li").removeClass("to_blue");
				$(".scroll ul ."+i).addClass("to_blue");
			};
		};
	});

	window.onresize = slidenav_func;
	window.onload = slidenav_func;
	function slidenav_func (){
		slidenav = $(".bootstrapt-context").offset().left;
		if (slidenav>300) {
			$(".scroll").css({"left":slidenav-320+"px"})
		}else{
			$(".scroll").css({"left":"0px"})
		}
	};
})
/*slidenav滚动监听*/
























