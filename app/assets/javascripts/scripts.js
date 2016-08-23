$(function(){
	$('.pop').on('click', function(e){
		e.preventDefault();
		$('.popup').addClass('open');
	});
	$('.pop-let').on('click', function(e){
		e.preventDefault();
		$(this).parent().find('.popup').addClass('open');
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
	if($(window).width < 768){
		$('#hero').owlCarousel({
		    center: true,
		    items:1,
		    nav:true,
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
	}
	
	function callback(event){
		var items = event.item.count;     // Number of items
    	var item  = (event.item.index + 1) - event.relatedTarget._clones.length / 2;  
    	$('.num').html(''+item+'/'+items+'');
	}
	
	$('#testimonials').owlCarousel({
		items:1,
		dots:true,
		animateOut: 'slideOutUp',
        animateIn: 'slideInUp'
	});
});