/*---------------------------------
	Color click - change Image
--------------------------------*/
$(".color").click(function () {
	$.each($(".color"), function(i, val) {
	    		$(val).removeClass('active');
	    	});
	$(this).addClass('active');
	$("#figure #floor").empty().append('<img src="images/floorcolor/' + $(this).attr("data-color") + '.jpg">');
});
