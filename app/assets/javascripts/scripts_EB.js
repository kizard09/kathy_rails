$(function(){

// Owl Carousel Moore-Place 

	if($(window).width() < 768){
		$(".moore-carousel").owlCarousel({
 
	      autoPlay: 3000, //Set AutoPlay to 3 seconds
	 
	      items : 1,
	      dots: true,
	      autoHeight : true,
	      loop: true,
	      itemsDesktop : [1199,3],
	      itemsDesktopSmall : [979,3]
		 
		});
	} else {
		$(".moore-carousel").removeClass('owl-carousel')
	}

// FancyBox iFrame

	$(".fancybox").fancybox();

	
});