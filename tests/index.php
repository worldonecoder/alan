<!DOCTYPE html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />
<title>Alan Drechsler Design</title>
<meta name="description" content="" />
<meta name="keywords" content="" />
<link href="css/bootstrap.css" rel="stylesheet" type="text/css" />
<link href="fonts/fonts.css" rel="stylesheet" type="text/css" />
<link href="css/style.css" rel="stylesheet" type="text/css" />

<script type="text/javascript" src="js/jquery.min.js"></script>
<script type="text/javascript" src="js/jquery-ui.js"></script>
<script type="text/javascript">$(document).bind("mobileinit", function(){$.extend(  $.mobile , {autoInitializePage: false})});</script>
<script type="text/javascript" src="js/jquery.mobile-1.4.5.min.js"></script>
<script type="text/javascript" src="js/jquery.hoverIntent.js"></script>
<script src="js/scripts.js" type="text/javascript"></script>

<link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="format-detection" content="telephone=no">
</head>
<body id="home">
	
	<header>
		<div class="container">
			<div id="logo" class="pull-left">
				<a href="javascript:void(0);">
					<img src="images/logo.png" alt="logo"/>
					<span id="logo-text" class="transitioner-xl ru-sm">ALAN DRECHSLER DESIGN</span>
				</a>
			</div>
			<nav class="pull-right">
				<a href="javascript:void(0);" id="nav-portfolio" class="nav-item transitioner"><span class="ru-md">PORTFOLIO</span>
					<i class="ro-md fa fa-home"></i>
				</a>
				<a href="javascript:void(0);" id="nav-contact" class="nav-item transitioner"><span class="ru-md">CONTACT</span>
					<i class="ro-md fa fa-envelope"></i>
				</a>				
			</nav>
		</div>
	</header>
	<main id="viewport">
	<?php
		include 'includes/portfolio.php';
		echo    '<div id="detail-views" class="ru-sm">';
		include 'includes/siamaks.php';
		include 'includes/affordable.php';
		include 'includes/umazda.php';
		include 'includes/roberson.php';
		include 'includes/stirling.php';
		include 'includes/atlas.php';
		include 'includes/autotown.php';
		include 'includes/skyactiv.php';
		include 'includes/vancouverrv.php';
		include 'includes/stayton.php';
		include 'includes/canby.php';
		include 'includes/couve.php';
		echo    '</div>';
	?>
</main>
	<footer>
		<div class="container">
			<div class="col-sm-4">
				<h1>About Me</h1>
				<p>Malis voluptaria eu usu, probo nominavi scriptorem duo no. Iudico labores appareat sed ut. Facete omittam accusata cu mei, idque nonumy nominavi qui et. Adhuc iudicabit has in, eripuit abhorreant vel
				</p>
				<p>Facete omittam accusata.</p>
			</div>
			<div class="col-sm-4">
				<h1>Contact Me</h1>
				<form action="form/contactengine.php">
					<div class="form-group">
						<label for="Email">Email Address</label>
						<input type="text" id="Email" class="form-control" name="Email" />
					</div>
					<div class="form-group">
						<label for="Message">Your Message</label>
						<textarea id="Message" class="form-control" rows="4" name="Message"></textarea>
					</div>

					<button id="submit" name="submit" type="submit" class="btn btn-default">Send Message</button>
				</form>
			</div>
			<div class="col-sm-4">
				<h1>Follow Me</h1>
				<a id="linkedin" class="transitioner spin" href="javascript:void(0);" onclick="alert('coming soon');">
					<i class="fa fa-linkedin transitioner"></i>
				</a>
			</div>
		</div>	
	</footer>
	<a id="to-the-top" href="javascript:void(0);"><i class="fa fa-caret-up"></i></a>



</body>
</html>