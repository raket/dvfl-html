	var thisHeight = $("#figure").height();
	var thisWidth = $("#figure").width();
	
	
	/*---------------------------
		Handlers for image
	----------------------------*/
	$( "#red" ).resizable({
		minHeight:	thisHeight,
		maxHeight:	thisHeight,
		minWidth:	10,
		maxWidth:	thisWidth,
		handles: 	{ e: $("#handlered-right"), w: $("#handlered-left") }
	}).css('zIndex', '1');
	
	$( "#green" ).resizable({
		minHeight:	thisHeight,
		maxHeight:	thisHeight,
		minWidth:	10,
		maxWidth:	thisWidth,
		handles: 	{ e: $("#handlegreen-right"), w: $("#handlegreen-left") }
	});
	
	/*---------------------------
		BULB DRAGGABLE
	----------------------------*/
	$(".bulb").draggable({
		snap: true,
		snapMode: 'inner',
		snapTolerance: 50,
		cursor: 'pointer',
		/* - Class 'in' removes bottom of bulb 
		   - Removes color from figure and hole */
		start: function(){
			$(this).removeClass("in");
			$(this).parent().removeClass('red green');
        	var position = $(this).parent().attr('id');
        	$('#figure .'+position).removeClass(position);
		},
		stop: function(){
			$(this).addClass("in");
		},
		/* Re-color figure if the revert is false */
		revert: function(bulb) {
			if(bulb === false) {
				var color;
				($(this).hasClass('red')) ? color = 'red': color = 'green';
				$(this).parent('.hole').addClass(color);
				colorFigure(color, $(this).parent('.hole').attr('id'));
				return true;
			} else {
				return false;
			}
		},
	});

	/*---------------------------
		HOLE DROPPABLE
	----------------------------*/
	$(".hole").droppable({
		accept: '.bulb',
		accept: function(draggable) {
			if ($(this).children().size() < 1) {
				return '.bulb';
			}
        }, 
		hoverClass: 'hover',
		activeClass: 'hole-pulse',
		drop: function( event , ui ) {
					var dropped = ui.draggable;
		        	var droppedOn = $(this);
		        	var color = $(dropped).attr('data-color');
		        	var position = $(droppedOn).attr('id');
		        	$(dropped).addClass('in');
					colorFigure(color, position);
		        	$(droppedOn).addClass(color);
		        	$(dropped).appendTo(droppedOn).css({
		        		position:'relative',
		        		zIndex: 200,
		        		left: -12,
		        		top:-65
		        	});
		        	$('#red').css('zIndex', '1');
		        	$('#green').css('zIndex', '1');
		        	$('.message').fadeOut(3000);
        },
	});


	/*---------------------------
		FIGURE COLORING
	----------------------------*/
	function colorFigure (color, position) {
		var figure = $('#figure #'+color);
		figure.children().removeClass('hide');
		figure.addClass(position).removeAttr('style');
		$('#figure #handle'+color+'-'+position).addClass('hide');
	}