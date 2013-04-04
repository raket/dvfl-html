$(function(){
	
	/*$(".overlay").click(function(event) {
		event.preventDefault();
		var who = $(this).data("position");
		$(".coloursamples li."+who+" *").fadeIn();
		console.log(who);
	})*/
	
	$(".overlay").toggle(function(event) {
		event.preventDefault();
		var who = $(this).data("position");
		$(".coloursamples li."+who+" div.container").transition({
			rotateX : '360deg',
			opacity : 1
		});
	}, function(event) {
		event.preventDefault();
		var who = $(this).data("position");
		$(".coloursamples li."+who+" div.container").transition({
			rotateX : '180deg',
			opacity : 0
		});
	});

	$(".colors figure").live('click', function (event) {
		figure = $(this);
		img = figure.find('img').attr('src');
		newImg = img.substring(img.indexOf('_')+1, img.length);
		
		$(".hidden. .colour").fadeOut('slow', function() {
			$(this).fadeIn().attr("src", "images/" + newImg);
		});

		$('ul.coloursamples .left figure').animate({backgroundColor: figure.attr('data-color-left')}, "slow");
		$('ul.coloursamples .left figcaption').html(figure.find('p.left').html());
		
		$('ul.coloursamples .center figure').animate({backgroundColor: figure.attr('data-color-center')}, "slow");
		$('ul.coloursamples .center figcaption').html(figure.find('p.center').html());
		
		$('ul.coloursamples .right figure').animate({backgroundColor: figure.attr('data-color-right')}, "slow");	
		$('ul.coloursamples .right figcaption').html(figure.find('p.right').html());
	});
	
	
	/* ZOOM DISABLED */
	
	/*---------------------------
		Resize Image
	----------------------------
	$(window).resize(function() {
  		$('.zoom').width($('.twelve').width());	
	});*/
	
	/*---------------------------
		Check devices
	----------------------------
	var deviceAgent = navigator.userAgent.toLowerCase();
    var agentID = deviceAgent.match(/(iphone|ipod|ipad)/);
    */
   
    /*---------------------------
		Andriod
	----------------------------
    if(deviceAgent.match(/android/i)){
    	$('.zoom').zoomy({
    	zoomSize: 150,
    	drag: true,
  	  });
  	 */
  	 
  	 /*---------------------------
		iphone|ipod|ipad
	----------------------------
    } else if (agentID) {
       $('.zoom').zoomy({
    	zoomSize: 200,
    	drag: true,
  	  }); 
  	  */
  	  
	/*---------------------------
		Regular Screen
	----------------------------
    } else {
    	$('.zoom').zoomy({
    	zoomSize: 300,
    	drag: false,
  	  });
  	  
    }
    */
                   
}(jQuery))



