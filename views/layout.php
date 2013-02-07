<html>
	
	<head>
		
		<link rel="stylesheet" type="text/css" href="src/css/style.css">
		
	</head>

	<body>
		
		<div id="header">
			<h1><a href="index.php">SteampunkJS</a></h1>
		</div>
		
		<div id="content">
			<?php
					if(isset($_GET['page']))
						include 'templates/'.$page.'.php';
					else
					{
						include 'templates/home.php';
					}
				?>
		</div>
		
		<div id="footer"><div id="footer_p">
			<p><a href="https://github.com/kestion/SteampunkJS" target="_blank">Github</a></p>
			<p><a href="#">License</a></p>
			<p><a href="index.php?page=play">Play</a></p>
		</div></div>
		
	</body>
	
</html>