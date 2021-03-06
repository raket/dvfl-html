/* Foundation v2.2 http://foundation.zurb.com */
jQuery(document).ready(function ($) {
	$('html').disableSelection();
	/* Use this js doc for all application specific JS */

	/* Bind links for open in webapp */
	$("a").click(function (event) {
	    event.preventDefault();
	    if( ($(this).attr("href") != "#" &&  !$(this).hasClass("zoom"))|| (!$(this).hasClass("close-reveal-modal") &&  !$(this).hasClass("zoom"))) {
    		window.location = $(this).attr("href");
    	}
	});
	
	/*$(document).bind("contextmenu", function(e)
	{
		return false;
	});*/

	/*-------------------------------
		Description Toggle Header
	------------------------------- */
	$("#pane .show-more").click(function(e) {
		e.preventDefault();
		($(this).hasClass('active')) ? $(this).removeClass('active') : $(this).addClass('active');
		$("#pane .more").slideToggle('slow', 'easeOutBack');
	});
	
	
	/*--------------------------
		Small info Toggle header
	-------------------------- */
	$(".big").click(function(e) {
		e.preventDefault();
		$(".info-arrow").stop(true, true).slideToggle('slow');
		$("#info").stop(true, true).slideToggle('slow');
	});
	



	/* ALERT BOXES ------------ */
	$(".alert-box").delegate("a.close", "click", function(event) {
	event.preventDefault();
	  $(this).closest(".alert-box").fadeOut(function(event){
	    $(this).remove();
	  });
	});
	
	/*$(".header-back").click(function () {
		window.history.go(-2)
	});*/
	
	/* PLACEHOLDER FOR FORMS ------------- */
	/* Remove this and jquery.placeholder.min.js if you don't need :) */

	$('input, textarea').placeholder();

	/* TOOLTIPS ------------ */
	$(this).tooltips();


	$('#myModal').reveal();
	

	/* UNCOMMENT THE LINE YOU WANT BELOW IF YOU WANT IE6/7/8 SUPPORT AND ARE USING .block-grids */
//	$('.block-grid.two-up>li:nth-child(2n+1)').css({clear: 'left'});
//	$('.block-grid.three-up>li:nth-child(3n+1)').css({clear: 'left'});
//	$('.block-grid.four-up>li:nth-child(4n+1)').css({clear: 'left'});
//	$('.block-grid.five-up>li:nth-child(5n+1)').css({clear: 'left'});



	/* DROPDOWN NAV ------------- */

	var lockNavBar = false;
	$('.nav-bar a.flyout-toggle').live('click', function(e) {
		e.preventDefault();
		var flyout = $(this).siblings('.flyout');
		if (lockNavBar === false) {
			$('.nav-bar .flyout').not(flyout).slideUp(500);
			flyout.slideToggle(500, function(){
				lockNavBar = false;
			});
		}
		lockNavBar = true;
	});
  if (Modernizr.touch) {
    $('.nav-bar>li.has-flyout>a.main').css({
      'padding-right' : '75px'
    });
    $('.nav-bar>li.has-flyout>a.flyout-toggle').css({
      'border-left' : '1px dashed #eee'
    });
  } else {
    $('.nav-bar>li.has-flyout').hover(function() {
      $(this).children('.flyout').show();
    }, function() {
      $(this).children('.flyout').hide();
    })
  }


	/* DISABLED BUTTONS ------------- */
	/* Gives elements with a class of 'disabled' a return: false; */
  

});
