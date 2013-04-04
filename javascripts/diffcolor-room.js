	//$('#reveal').reveal();
	// A Counter for Reveal box
	var count = 0;

	/*-------------------------------
		Color Element Draggable
	-------------------------------*/
	$(".color").draggable({
		revert: true,
		start: function() {
		},
    	stop: function () {	
    		if (count == 3) {
    			//$('#reveal').reveal();
    		}
    		$(this).removeClass('inside');
    		count++;
    	},
	});


	/*-------------------------------
		Box accepts Color Element
	-------------------------------*/
	$(".box").droppable({
		accept: '.color',
		drop: function( event , ui ) {
			var pos = '';
			var droppedOn = $(this);
			var dropped = ui.draggable;
			
	    	(droppedOn.hasClass('left')) ? pos = 'left' : pos = 'right';
	    	$.each($(".color"), function(i, val) {
	    		$(val).removeClass(pos);
	    	});
	    	dropped.addClass(pos).addClass('inside');
	    	var color = $(dropped).attr('data-color');
	    	droppedOn.animate({ backgroundColor: color }, "slow");
	    	$(".message.drag").fadeOut(4000);

        },
	});
	
	
	$(".change-color").live('click', function (event) {
		event.preventDefault();
		for (x = 0; x < $(".change-color").size();x++) {
			$(".change-color").eq(x).removeClass('active');
		}
		button = $(this).addClass('active');
		figures = button.children("figure");
		
		var row_left = figures.eq(0).attr('data-color');
		var row_right = figures.eq(1).attr('data-color');
		var box_left = $('#fixed-left').attr('data-color');
		var box_right = $('#fixed-right').attr('data-color');
		
		$('#fixed-left').css('backgroundColor', row_left).attr('data-color', row_left);
		$('#fixed-right').css('backgroundColor', row_right).attr('data-color', row_right);
		
		$(".message.change").fadeOut(4000);

		
	});
	
	
	
