(function($) {
    "use strict"; // Start of use strict

    // Hide/Show Footer
    $('div.footer-switch').bind('click', function(event) {
    	console.log('clicked');
    	$("html, body").animate({ scrollTop: $(document).height() }, "fast", function() {
    		if ($("div.footer-site-map").hasClass('footer-revealed')) {
	    		$( "div.footer-site-map" ).slideDown( "slow" );
    		} else {
	    		$( "div.footer-site-map" ).slideUp( "slow" );
    		}
    		$("div.footer-site-map").removeClass('footer-hidden');		
    	});   
		$( "div.footer-site-map" ).toggleClass('footer-revealed');
		$( ".footer-switch .fa" ).toggleClass('fa-hidden');
    });

})(jQuery); // End of use strict