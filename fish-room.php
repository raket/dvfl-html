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

	<title>Virtuella Färglaboratoriet: Fiskar i djupet</title>
	
  	<?php 
  	require 'lessc.inc.php';
  	try {	
  			lessc::ccompile('less/style.less', 'css/style.css');
  			lessc::ccompile('less/fish-room.less', 'css/fish-room.css');
		} catch (exception $ex) {
		    exit($ex->getMessage());
		}
		
		$page = 'fish-room';
	?>
	<!-- Included CSS Files -->
	<link rel="stylesheet" href="css/foundation.css">
	<link rel="stylesheet" href="css/style.css">
	<link rel="stylesheet" href="css/fish-room.css">
	<link rel="stylesheet" href="css/jquery.ui.all.css">
	<!--[if lt IE 9]>
		<link rel="stylesheet" href="css/ie.css">
	<![endif]-->


	<!-- IE Fix for HTML5 Tags -->
	<!--[if lt IE 9]>
		<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->
	<?php $page = 'Fiskar i djupet'; ?>

</head>
<body>
	<!-- container -->
	<!--Header-->
	<?php require 'header.php' ?>
	
	<div class="container" id="pane">
		<div class="row">
			<article class="eleven columns">
				<h3>Fiskar i djupet</h3>
				<p>lorum ipsum</p>
			</article>
			<div class="one columns">
				<a href="#" class="show-more hidden"><span>more</span></a>
			</div>
		</div>
		<div class="row more">
			<article class="six columns">
				<h3>Fiskar i djupet</h3>
				<p>lorum ipsum</p>
			</article>
			<article class="six columns">
				<h3>Fiskar i djupet</h3>
				<p>lorum ipsum</p>
			</article>
		</div>
	</div>
	<div class="container ocean" id="room">
		<div class="row">
			<section class="twelve columns">
				<div id="figure">
					<div id="ocean">
						<img src="images/Bluewater.jpg" />
						<figure id="one" class="fish">
							<div class="deep-one"></div>
							<div class="deep-two"></div>
						</figure>
						<figure id="two" class="fish">
							<div class="deep-one"></div>
							<div class="deep-two"></div>
						</figure>
						<figure id="three" class="fish">
							<div class="deep-one"></div>
							<div class="deep-two"></div>
						</figure>
					</div>
				</div>
			</section>
		</div>
	</div>
	<div id="bg-stretch"></div>
	<!-- container -->


	<div id="jquery_jplayer_1"></div>

	<!-- Included JS Files -->
	<script src="javascripts/jquery.min.js"></script>
	<script src="javascripts/jquery-ui-1.8.18.custom.min.js"></script>
	<script src="javascripts/easein.js"></script>
	<script src="javascripts/jquery.ui.touch-punch.min.js"></script>
	<script src="javascripts/modernizr.foundation.js"></script>
	<script src="javascripts/foundation.js"></script>
	<script src="javascripts/fish-room.min.js"></script>
	<script src="javascripts/app.js"></script>
	<audio id="audio" onplaying="javascript: playing();"autoplay="autoplay" loop="loop">
		<source src="sounds/ububbles.mp3"></source>
		<source src="sounds/ububbles.wav"></source>
 	</audio>
</body>
</html>
