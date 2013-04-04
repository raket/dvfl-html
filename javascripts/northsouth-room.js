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
	
	$('img').load(function() {
        console.log(this);
    });
	/*--------------------------------------
		Undre panelens färgstick click
	---------------------------------------*/
	$('ul.coloursamples li').click(function () {
		if (!$(this).hasClass('active')) {
			for (x = 0; x < $('ul.coloursamples li').size();x++) {
				$('ul.coloursamples li').eq(x).removeClass('active');
			}
			coloursample = $(this).addClass('active');
			
			$('#room #box-right').fadeOut(1000, function() {
				$(this).css({
					backgroundImage:  'url("images/north-south/' + coloursample.attr('data-folder') + '/n_' + coloursample.attr('data-name') + '.jpg")'
				}).fadeIn(1000);
			});
			$('#room #box-left').fadeOut(1000, function() {
				$(this).css({
					backgroundImage: 'url("images/north-south/' + coloursample.attr('data-folder') + '/s_' + coloursample.attr('data-name') + '.jpg")'
				}).fadeIn(1000);	
			});
		}
	});
	
	
	
	/*--------------------------------------------------------
		Byte av grundfärg från de små thumbnailsen i asiden
	---------------------------------------------------------*/
	$('aside.diff-colors .row').click(function () {
		if (!$(this).hasClass('active')) {
			var panelBoxes = $('ul.coloursamples li');
			var clicked = $(this);
			$('#room #box-right').fadeOut(1000, function() {
				$(this).css({
					backgroundImage:  'url("images/north-south/' + clicked.children('figure').eq(0).attr('data-folder') + '/n_' + clicked.children('figure').eq(0).attr('data-name') + '.jpg")'
				}).fadeIn(1000);
			});
			$('#room #box-left').fadeOut(1000, function() {
				$(this).css({
					backgroundImage: 'url("images/north-south/' + clicked.children('figure').eq(0).attr('data-folder') + '/s_' + clicked.children('figure').eq(0).attr('data-name') + '.jpg")'
				}).fadeIn(1000);
			});		
			
			for (x = 0; x < $('ul.coloursamples li').size();x++) {
				$('ul.coloursamples li').eq(x).removeClass('active');
			}
	
			for (x = 0; x < $('aside.diff-colors .row').size(); x++) {
				$('aside.diff-colors .row').eq(x).removeClass('active');
			}
			$(this).addClass('active');
			/*--------------------------------------------------------
				Lopar igenom alla små thumbnails och byter värden
			---------------------------------------------------------*/
			for (var x = 0; x < $(this).children('figure').size(); x++) {
				currentAsideBox = $(this).children('figure').eq(x);
				currentPanelBox = panelBoxes.eq(x);
				
				currentPanelBox.find('figure').css('background', currentAsideBox.attr('data-color'));
				currentPanelBox.find('figcaption span').html(currentAsideBox.attr('data-name'));
				currentPanelBox.attr('data-name', currentAsideBox.attr('data-name')).attr('data-folder', currentAsideBox.attr('data-folder'));
			}
			
			panelBoxes.eq(0).addClass('active');
		}
			
	});
	