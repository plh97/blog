$(document).ready(function(){
	$('li.mainlevel').mousemove(function(){
		$(this).find('.dropmenu').slideDown("fast");
	});
	$('li.mainlevel').mouseleave(function(){
		$(this).find('.dropmenu').slideUp("fast");
	});
});