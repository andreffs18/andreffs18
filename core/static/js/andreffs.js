/*** 
André Silva 1st April 2014  
***/

$(document).ready(function(){


	var image_name = $('header').data('image');
	$('header').css('background-image', 'url('+STATIC_URL+'img/'+image_name+')');
			 //   	.find('h1')
			 //   	.fadeIn(1500, function(){
			 //   		$(this).animate({  letterSpacing: '25px' }, {
				// 	    step: function(now,fx) {
				// 	      $(this).css('-webkit-transform','rotate('+now+'deg)'); 
				// 	      $(this).css('-moz-transform','rotate('+now+'deg)');
				// 	      $(this).css('transform','rotate('+now+'deg)');
				// 	    },
				// 	    duration:2500
				// 	},'easing');
				// });

	// Zoom efect on logo and text
	// $("#logo").hover(function(){
	// 	$(this).stop().animate({ marginTop : "5px" }, 100).find("span").stop().animate({ fontSize : "30px" }, 100);
	// }, function(){
	// 	$(this).stop().animate({ marginTop : "-5px" }, 100).find("span").stop().animate({ fontSize : "28px" }, 100);
	// });

	// Opacity effect on navigation bar
	// $('.h-link').hover(function(){
	// 	//ANIMATIONS FOR THE THUMBS
	// 	$('.h-link').not(this).animate({opacity:.5},{queue:false,duration:100});
	// 	//$(this).css("cursor","crosshair");
	// 	}, function(){
	// 	//(this).children('.portSecRollOver').css("display","none");
	// 	$('.h-link').not(this).animate({opacity:1},{queue:false,duration:100});
	// });
	

	// // Opacity effect on footer nav bar
	// $('#footer .fa').css({opacity:0.5});
	// $('#footer .fa').hover(function(){
	// 	//ANIMATIONS FOR THE THUMBS
	// 	$(this).animate({opacity:1},{queue:false,duration:100});
	// 	//$(this).css("cursor","crosshair");
	// 	}, function(){
	// 	//(this).children('.portSecRollOver').css("display","none");
	// 	$('#footer .fa').animate({opacity:0.5},{queue:false,duration:100});
	// });

});

