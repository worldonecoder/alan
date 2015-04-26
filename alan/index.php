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
					<span id="logo-text" class="transitioner-xl">ALAN DRECHSLER DESIGN</span>
				</a>
			</div>
			<nav class="pull-right">
				<a href="javascript:void(0);" id="nav-portfolio" class="nav-item transitioner">PORTFOLIO</a>
				<a href="javascript:void(0);" id="nav-contact" class="nav-item transitioner">CONTACT</a>				
			</nav>
		</div>
	</header>

	<?
		include 'home.php';
	?>

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
				<form action="send-info.php">
					<div class="form-group">
						<label for="enter-email">Email Address</label>
						<input type="email" id="enter-email" class="form-control" />
					</div>
					<div class="form-group">
						<label for="enter-message">Your Message</label>
						<textarea id="enter-message" class="form-control" rows="4"></textarea>
					</div>

					<button id="submit" type="submit" class="btn btn-default">Send Message</button>
				</form>
			</div>
			<div class="col-sm-4">
				<h1>Follow Me</h1>
				<a id="linkedin" class="transitioner" href="javascript:void(0);" onclick="alert('coming soon');">
					<i class="fa fa-linkedin transitioner"></i>
				</a>
			</div>
		</div>	
	</footer>



</body>
</html>