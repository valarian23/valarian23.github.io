$(document).ready(function() {

	$('.about__toggle').click(function(e){
		e.preventDefault();
		$('.about-content__box').hide();
		var href = $(this).attr('href');
		$(href).fadeIn()
	});

	var windowHeight = $(window).height();

	$(window).scroll(function(){

		if ( $(this).scrollTop() > windowHeight) {
			$('#scrollToTop').fadeIn(); 
			} else {
				$('#scrollToTop').fadeOut();
			}
		});

	$('#scrollToTop').click(function(e) {
		e.preventDefault();
		$('html').animate({scrollTop: 0}, 800);
	});	
});