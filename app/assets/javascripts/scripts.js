$(function(){
	$('.pop').on('click', function(e){
		e.preventDefault();
		$('.popup').addClass('open');
	});
	$('.pop-home').on('click', function(e){
		e.preventDefault();
		$('#popup').addClass('open');
	});
	$('.pop-faq').on('click', function(e){
		e.preventDefault();
		$('#popdown').addClass('open');
	});
	$('.pop-let').on('click', function(e){
		e.preventDefault();
		$('.popup').addClass('open');
	});
	$('.popup span').on('click', function(){
		$('.popup').removeClass('open');
	});
	$('a[href*="#"]:not([href="#"])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      	var target = $(this.hash);
	      	target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      	if (target.length) {
		        $('html, body').animate({
		          scrollTop: target.offset().top-230
		        }, 1000);
		        return false;
		    }
		}
	});
	$('#menu').click(function(){
		$(this).toggleClass('open');
		$('.nav').toggleClass('open');
	});
	$(document).on('scroll', function(){
		$('nav, .r').addClass('scroll');
		if($(window).scrollTop() == 0){
			$('nav, .r').removeClass('scroll');
		}
	});
	$('#hero').owlCarousel({
	    center: true,
	    items:1,
	    nav:true,
	    autoplay:true,
	    navText:['',''],
	    loop:true,
	    responsive:{
	        768:{
	            items:1.7
	        }
	    },
	    onTranslate:callback,
	    onInitialized:callback
	});
$('.owl-item.active.center').on('click', function (){
		console.log('fdafd')
	});
	function callback(event){
		var items = event.item.count;     // Number of items
    	var item  = (event.item.index + 1) - event.relatedTarget._clones.length / 2;  
    	$('.num').html(''+item+'/'+items+'');
	}
	
	$('#testimonials').owlCarousel({
		items:1,
		dots:true,
		autoplay:'autoplay',
		animateOut: 'slideOutUp',
        animateIn: 'slideInUp'
	});

	$(".fancybox").fancybox();

});