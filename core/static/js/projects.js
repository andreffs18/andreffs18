$(document).ready(function(){

	// Hide opacity and arrow
	$(".work-wrapper div").hide();

	$('div.work-wrapper').hover(function() {
		$("div.work-wrapper").not($(this)).find("div.work-wrapper-opacity").toggle();
		$(this).toggleClass("work-wrapper-hover").find("div.arrow").toggle();
	});

});