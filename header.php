<header id="bar" class="container">
		<div class="row">
			<div class="three columns">
				<a href="index.html" class="header-back nice small radius black button"><i>(</i>Tillbaka</a>		
			</div>
			<div class="six columns">
				<?php if (!($page == 'start')) {?>
				<h2><?php echo $page;?></h2>
				<?php } else {?>
				<h2>Det virtuella färglaboratoriet</h2>
				<?php } ?>
			</div>
			<div class="three columns">
				<?php if($page == 'Fiskar i djupet') {?><i class="play">{</i><?php } else if ($page != 'info') { ?>
					<a href="about-dvfl.html" title="Om Virtuella Färglabbet" class="right"><i class="big">`</i></a>
				<?php } ?>
			</div>
		</div>
	</header>
<!--[if lt IE 9]>
	<?php if ($_SESSION['ie'] == 1) { ?>
	<div id="myModal" class="reveal-modal [expand, xlarge, large, medium, small]">
	  <h2>Var god att uppdatera din webbläsare</h2>
	  <p class="lead">Tyvärr så fungerar inte denna applikation fullt ut i Internet Explorer 8 eller äldre.</p>
	  <p>Du kan gå in på Chromes hemsida och hämta hem den senaste versionen <a href="http://www.google.com/intl/sv/chrome/browser/" title="Chrome">här.</a></p>
	  <a class="close-reveal-modal" href="#">&#215;</a>
	</div>
	<?php
	$_SESSION['ie'] = 2; 
} ?>

<![endif]-->
