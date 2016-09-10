$(document).ready(function(){

	"use strict";
	
	// Nav Sticky
	
	$(window).scroll(function(){
		if($(window).scrollTop() > 500 && !$('.mobile-toggle').is(":visible")){
			$('.top-bar').addClass('nav-sticky');
		}else{
			$('.top-bar').removeClass('nav-sticky');
		}
	});
	
	// Offscreen Nav
	
	$('.offscreen-toggle').click(function(){
		$('.main-container').toggleClass('reveal-nav');
		$('.offscreen-container').toggleClass('reveal-nav');
		$('.offscreen-menu .container').toggleClass('reveal-nav');
	});
	
	$('.main-container').click(function(){
		if($(this).hasClass('reveal-nav')){
			$('.main-container').toggleClass('reveal-nav');
			$('.offscreen-container').toggleClass('reveal-nav');
			$('.offscreen-menu .container').toggleClass('reveal-nav');
		}
	});

	

	
	// Mobile Toggle
	
	$('.mobile-toggle').click(function(){
		$('nav').toggleClass('open-nav');
	});
	
	// Fullscreen nav toggle
	
	$('.fullscreen-nav-toggle').click(function(){
		if(!$('.fullscreen-nav-container').hasClass('show-fullscreen-nav')){
			$('.fullscreen-nav-container').addClass('show-fullscreen-nav');
			setTimeout(function(){
				$('.fullscreen-nav-container').addClass('fade-fullscreen-nav');
			},100);
			$(this).addClass('toggle-icon');
		}else{
			$(this).removeClass('toggle-icon');
				$('.fullscreen-nav-container').removeClass('fade-fullscreen-nav');
			setTimeout(function(){
				
				$('.fullscreen-nav-container').removeClass('show-fullscreen-nav');
			},500);
		}
	});	
	
	$('.fullscreen-nav-container .menu li a').click(function(){
		$('.fullscreen-nav-toggle').removeClass('toggle-icon');
			$('.fullscreen-nav-container').removeClass('fade-fullscreen-nav');
		setTimeout(function(){
			$('.fullscreen-nav-container').removeClass('show-fullscreen-nav');
		},500);
	});
	
	// Margin first section for top bar
	
	if(!$('nav').hasClass('overlay-bar') && !$('nav').hasClass('contained-bar')){
		$('.main-container').first().css('margin-top', $('nav').outerHeight());
	}
	
	$(window).resize(function(){
		if(!$('nav').hasClass('overlay-bar') && !$('nav').hasClass('contained-bar')){
			$('.main-container').first().css('margin-top', $('nav').outerHeight());
		}
	});
	
	// Pad first section for overlay bar
	
	if($('nav').hasClass('overlay-bar') || $('nav').hasClass('contained-bar') ){
		var currentPad = parseInt($('.main-container').find(':first-child').css('padding-top'));
		var newPad = currentPad + $('nav').outerHeight() - 48;
		if(currentPad > 0){
			$('.main-container').children(':first').css('padding-top', newPad);
		}else if($('.main-container').find(':first').hasClass('hero-slider')){
			var height = parseInt($('.hero-slider .slides li:first-child').outerHeight());
			var newHeight = height + $('nav').outerHeight();
			$('.hero-slider .slides li').css('height', newHeight);
		}
	}
	
	
	// Fullwidth Subnavs
	
	// Position Fullwidth Subnavs fullwidth correctly

    $('.subnav-fullwidth').each(function () {
        $(this).css('width', $('.container').width());
        var offset = $(this).closest('.has-dropdown').offset();
        offset = offset.left;
        var containerOffset = $(window).width() - $('.container').outerWidth();
        containerOffset = containerOffset /2;
        offset = offset - containerOffset - 15;
        $(this).css('left', -offset);
    });

    $(window).resize(function () {
        $('.subnav-fullwidth').each(function () {
            $(this).css('width', $('.container').width());
			var offset = $(this).closest('.has-dropdown').offset();
			offset = offset.left;
			var containerOffset = $(window).width() - $('.container').outerWidth();
			containerOffset = containerOffset /2;
			offset = offset - containerOffset - 15;
			$(this).css('left', -offset);
        });
    });

	
	

	
	// Slide Sizes
	
	$('.slider-fullscreen .slides li').each(function(){
		$(this).css('height', $(window).height());
	});
	
	$('.fullscreen-element').each(function(){
		$(this).css('height', $(window).height());
	});


	// Feature Selector
	
	$('.selector-tabs li').click(function(){
		$(this).parent('.selector-tabs').children('li').removeClass('active');
		$(this).addClass('active');
		
		var activeTab = $(this).index() + 1;
		
		$(this).closest('.feature-selector').find('.selector-content').children('li').removeClass('active');
		$(this).closest('.feature-selector').find('.selector-content').children('li:nth-child('+activeTab+')').addClass('active');
	});
	
	// Append .background-image-holder <img>'s as CSS backgrounds
	
	
	
	// Accordion
	
	$('.accordion li').click(function(){
		$(this).parent('.accordion').children('li').removeClass('active');
		$(this).addClass('active');
	});
	
	/************** Parallax Scripts **************/


    
 
	

	
	// Map Details Holder
	
	$('.details-holder').each(function(){
		$(this).css('height', $(this).width());
	});
	
	$('.details-holder').mouseenter(function(){
		$(this).closest('.map-overlay').addClass('fade-overlay');
	}).mouseleave(function(){$(this).closest('.map-overlay').removeClass('fade-overlay');});
	


	
	// Expanding Lists (updated in Pivot 1.4.0)
	
	$('.expanding-ul li').click(function(){
		$('.expanding-ul li').removeClass('active');
		$(this).addClass('active');
	});

});

$(window).load(function(){

  "use strict";
  	
  
	// Align Elements Vertically
	
	alignVertical();
	alignBottom();
	
	$(window).resize(function(){
		alignVertical();
		alignBottom();
	});
	
	// Isotope Projects
	

	
	

});



function alignVertical(){

		$('.align-vertical').each(function(){
			var that = $(this);
			var height = that.height();
			var parentHeight = that.parent().height();
			var padAmount = (parentHeight / 2) - (height/2);
			that.css('padding-top', padAmount);
		});
	
}

function alignBottom(){
	$('.align-bottom').each(function(){
		var that = $(this);
		var height = that.height();
		var parentHeight = that.parent().height();
		var padAmount = (parentHeight) - (height) - 32;
		that.css('padding-top', padAmount);
	});
}


