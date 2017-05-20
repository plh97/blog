/*bootstrapt---tap选项卡切换按钮*/
var number_parse = $(".badge").text();
$(".badge").parent().click(function () {
  number_parse++;
  $(".badge").text(number_parse);
})


// /*设置body-margin-top*/
// window.onresize = function () {
// 	$("body").css({"margin-top":$(".navbar").height()+20})
// 	if ($(window).width()<500) {
// 	};
// }
// window.onload = function () {
// 	$("body").css({"margin-top":$(".navbar").height()+20})
// 	if ($(window).width()<500) {
// 	};
// }

/*slidenav滚动监听*/
$(document).ready(function(){

	var some_boot_context = $(".container-context").find(".col-sm-12")
	$(".scroll ul li").click(function () {
		number_context = $(this).attr('class');
		context_top = $("#"+number_context).offset().top;
		$('body,html').animate({scrollTop:context_top-100},1000)
	})

	$(window).scroll(function () {
		Things = $(".scroll ul li");
		for ( i = Things.length ; i >= 1; i--) {
			this_number = $(".container-context #"+i).offset().top;
			if ($(window).scrollTop() >= this_number ) {
				$(".scroll ul li").removeClass("to_blue");
				$(".scroll ul ."+i).addClass("to_blue");
			};
		};
	});

	window.onresize = slidenav_func;
	window.onload = slidenav_func;
	function slidenav_func (){
		slidenav = $(".col-sm-12").offset().left;
		if (slidenav>300) {
			$(".scroll").css({"left":slidenav-320+"px"})
		}else{
			$(".scroll").css({"left":"0px"})
		}
	};
})
/*slidenav滚动监听*/