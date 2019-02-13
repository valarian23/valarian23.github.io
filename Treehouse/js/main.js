$(document).ready(function () {

	$('#nav-toggle').on('click', function(e) {
		e.preventDefault();

		if ( $('#navigation').hasClass('navigation-holder--mobile-open') ) {
			$('#navigation').fadeOut();
			setTimeout( function() {
				$('#navigation').removeClass('navigation-holder--mobile-open');
			} , 1000)
			$(this).text('Open navigation');}
			else {
				$('#navigation').hide().addClass('navigation-holder--mobile-open').fadeIn();
				$(this).text('Close navigation');
			} 
		});
	});