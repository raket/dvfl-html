	var thisHeight = $("#figure").height();
	var thisWidth = $("#figure").width();
	
	/*---------------------------
		Handlers for image
	----------------------------*/
	$( "#box-left" ).resizable({
		minHeight:	thisHeight,
		maxHeight:	thisHeight,
		minWidth:	10,
		maxWidth:	thisWidth,
		handles: 	{ e: $("#handleleft-right") },
			//alsoResizeReverse: "#box-right"
		});
	$( "#box-right" ).resizable({
		minHeight:	thisHeight,
		maxHeight:	thisHeight,
		minWidth:	10,
		maxWidth:	thisWidth,
		//handles: 	{ e: $("#handleleft-right") },
			//alsoResizeReverse: "#box-left"
		});
	/*---------------------------
		Colors Draggable
	----------------------------*/
	$(".color").draggable({
		revert: true,
    	stop: function () {	
    		$(this).removeClass('inside');
    	},
	});

	/*---------------------------
		Image box droppable
	----------------------------*/
	$(".box").droppable({
		accept: '.color',
        drop: function( event , ui ) {
			var pos = '';
			var droppedOn = $(this);
			var dropped = ui.draggable;
			
	    	$.each($(".color"), function(i, val) {
	    		$(val).removeClass('active');
	    	});
	    	
	    	dropped.addClass('active').addClass('inside');
	    	$(".box").fadeOut('slow', function () {
				$(".box").fadeIn();
			});
        },
	});


