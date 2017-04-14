$(function () {
	$('[data-toggle="tooltip"]').tooltip();

	$('a[href="#contact"]').bind("click", function(e){        
        $('html, body').stop().animate({
            scrollTop: $('#contact').offset().top
        }, 1000);
        e.preventDefault();
    });	
});