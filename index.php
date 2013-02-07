<?php 

	$base_dir = getcwd();
	
	if (isset($_GET['page']))
		$page = $_GET['page'];
	
	include 'views/layout.php';

?>