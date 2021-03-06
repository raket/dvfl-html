	var oceanHeight = $("#ocean").height();
	var oceanWidth = $("#ocean").width();
	var count = 0;
	var play = false;
	var init;
	var startFishes = 0;



	/*---------------------------
		If audio starts to play
	----------------------------*/
	function playing() {
		$(".play").text('|');
		play = true;
		if (startFishes == 0) {
			moveFigure();		
			init = setInterval("moveFigure()", 4000);
			startFishes++;
		}
	}


	/*---------------------------
		Play button click
	----------------------------*/
	$(".play").click(function() {
		if (play) {
			clearInterval(init);
			$('#audio').trigger('pause');
			$(this).text('{');
			play=false;
		} else {
			startFishes++;
			$('#audio').trigger('play');
			$(this).text('|');
			play=true;
			moveFigure();
    		init = setInterval("moveFigure()", 4000);	
		}
	});

	/*---------------------------
		Fishes Draggable
	----------------------------*/
	$(".fish").draggable({
		containment: $('#ocean'),
		drag: function() {
        	colorFigure($(this));    
    	}, 
    	start: function () {
    		$($(this)).stop(true, true);
    		if(play){
    			clearInterval(init);
    		}
    	},
    	stop: function () {
    		if(play){
    			moveFigure();
    			init = setInterval("moveFigure()", 4000);
    		}
    	},
	});


	/*---------------------------
		Color Figure function
	----------------------------*/
	function colorFigure(figure) {
		// - Deeps  - //
		var deep_one = figure.children('.deep-one');
		var deep_two = figure.children('.deep-two');
		var mult = 0;
		(oceanHeight< 700) ? mult = 2.5 : mult = 2;
    	var yPos = figure.position().top;
		var height = yPos/oceanHeight*1.2;
	
		if (height > 0.5 || height == 1) {
			deep_one.css('opacity', '1');
			deep_two.css('opacity', ((height-0.5)*mult));
		} else if (height < 0.5 || height == 0.5) {
			deep_one.css('opacity', height*mult);
			deep_two.css('opacity', '0');
		} 
	}
	
	/*--------------------------------
		Moving Figures in interval
	---------------------------------*/	 		
	function moveFigure() {
		figures = $('#ocean').children();
	
		fish = figures.eq(count).removeClass('left').removeClass('right');
	
    	xPos = fish.position().left;
    
		var Width = Math.random()*oceanWidth;
		Width*0.8;
		(xPos < Width) ? xPos = 'right' : xPos = 'left';
		fish.addClass(xPos).animate({
			left: Width + 'px',
		}, 8000);
	
		(count == figures.size()-1) ? count = 0 : count++;
	}
	
	