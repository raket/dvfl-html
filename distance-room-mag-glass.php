<?php session_start();
if($_SESSION['ie'] != 2 ) {$_SESSION['ie'] = 1;} ?>
<!DOCTYPE html>

<!-- paulirish.com/2008/conditional-css-vs-css-hacks-answer-neither/ -->
<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js lt-ie9 lt-ie8" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js lt-ie9" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html lang="en"> <!--<![endif]-->
<head>
	<meta charset="utf-8" />

	<!-- Set the viewport width to device width for mobile -->
	<meta name="viewport" content="width=device-width" />

	<title>Virtuella Färglaboratoriet: Avstånd</title>
  	<?php 
  	require 'lessc.inc.php';
  	try {	
  			lessc::ccompile('less/style.less', 'css/style.css');
  			lessc::ccompile('less/distance-room.less', 'css/distance-room.css');
		} catch (exception $ex) {
		    exit($ex->getMessage());
		}
	?>
	<!-- Included CSS Files -->
	<link rel="stylesheet" href="css/foundation.css">
	<link rel="stylesheet" href="css/style.css">
	<link rel="stylesheet" href="css/zoomy.css">
	<link rel="stylesheet" href="css/distance-room.css">
	<link rel="stylesheet" href="css/jquery.ui.all.css">
	<!--[if lt IE 9]>
		<link rel="stylesheet" href="css/ie.css">
	<![endif]-->


	<!-- IE Fix for HTML5 Tags -->
	<!--[if lt IE 9]>
		<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->
	<?php $page = 'Färg på avstånd'; ?>
</head>
<body>

	<!-- container -->
	<!--Header-->
	<?php require 'header.php' ?>
	
	<div class="container" id="pane">
		<div class="row">
			<article class="eleven columns">
				<h3>Avstånd</h3>
				<p>När man ska välja färg för fasader finns ett ständigt åkerkommande problem: ”Färgen på den färdiga fasaden motsvarar inte den på det lilla färgprov jag valde. Det blev inte som jag hade tänkt mig.” Ett annat sätt att säga detta är att den uppfattade färgen inte motsvarar egenfärgen.
</p>
			</article>
			<div class="one columns">
				<a href="#" class="show-more hidden"><span>more</span></a>
			</div>
		</div>
		<div class="row more">
			<article class="six columns">
				<h3>Forskning om färg på målade träfasader sedda från c:a 50 metersavstånd visar:</h3>
				<p>• den uppfattade fasadfärgen blir alltid ljusare och klarare än den färg du ser på färgprovet</p>
				<p>• den uppfattade fasadfärgen blir ofta starkare och intensivare än den färg du ser på färgprovet</p>
				<p>• fasaden kan få en annan kulörton än den du ser på färgprovet – ofta ”kallare” än provets färg så att t.ex. ett gulgrönt prov ger en blågrön fasad.</p>
				<p>• ett ljust neutralgrått färgprov ger en blåaktigt grå fasad. För att få en neutralgå fasad måste man välja ett förgprov som är tydligt varmt, alltså gulaktigt, grått.</p>
			</article>
			<article class="six columns">
				<p>Variationsmönstret är likartat även för andra fasadmaterial, men kan ibland motverkas genom exempelvis små skuggbildningar i en grovt strukturerad putsyta.<br />
Fasadens uppfattade färg varierar dessutom med situationen: Väder och årstid ger olika ljus, olika omgivningsfärger och olika mängd dis eller föroreningar i luften. Allt detta påverkar vilken färg vi ser på fasaden. <br /><br />De skärmar som visas i Det Virtuella Färglaboratoriet har en och samma egenfärg men

Det Virtuella Färglaboratoriet
uppfattas allt gråare och blåaktigare med längre avstånd. Ingen av dem ser likadan ut som det lilla färgprovets färg.</p>
			</article>
		</div>
	</div>
	<div class="container diff-colors">
		<div class="row">
			<div class="twelve columns centered">
				<a href="images/distancehouses-distance.jpg" class="zoom">
					<!--<img src="images/three_houses.jpg" alt="This is the Display Image" />-->
					<img src="images/distancehouses-distance.jpg" alt="This is the Display Image" />
				</a>
			</div>
		</div>
	</div>			
	<div id="bg-stretch"></div>
	<!-- container -->




	<!-- Included JS Files -->
	<script src="javascripts/jquery.min.js"></script>
	<script src="javascripts/jquery-ui-1.8.18.custom.min.js"></script>
	<script src="javascripts/easein.js"></script>
	<script src="javascripts/jquery.ui.touch-punch.min.js"></script>
	<script src="javascripts/modernizr.foundation.js"></script>
	<script src="javascripts/zoomy.min.js"></script>
	<script src="javascripts/foundation.js"></script>
	<script src="javascripts/distance-room.js"></script>
	<script src="javascripts/app.js"></script>

</body>
</html>
