/* =================================================== */
(function (window) {

    "use strict";

    /* APP DEFINITION
     * ============== */

    var App = {
        settings: {},
        l10n: {}
    };

    /* APP SETTINGS
     * ============ */
    App.settings.mobile = {
        ismobile: /(android|iphone|ipad|blackberry|symbian|symbianos|symbos|netfront|model-orange|javaplatform|iemobile|windows phone|samsung|htc|opera mobile|opera mobi|opera mini|presto|huawei|blazer|bolt|doris|fennec|gobrowser|iris|maemo browser|mib|cldc|minimo|semc-browser|skyfire|teashark|teleca|uzard|uzardweb|meego|nokia|bb10|playbook)/gi,
        android: /Android/gi,
        blackberry: /BlackBerry|bb10/gi,
        iosmobile: /iPhone|iPod/gi,
        iostablet: /iPad/gi,
        windows: /IEMobile/gi
    };
    App.settings.bottinCarto = {
        l10n: {
            loadError: "Un problème est survenu. Veuillez réessayer dans un instant.",
            errorDistance: "L'itinéraire piéton est trop long. Veuillez choisir un itinéraire routier. ",
            errorCityEmpty: "Veuillez renseigner votre ville de départ. ",
            errorCity: "Veuillez réessayer ou rechercher à proximité en vous géolocalisant",
            rdv: "(sur rendez-vous)",
            geolocalization: {
                desactivate: 'Votre position n\'est pas identifiable. Veuillez vérifiez vos paramètres de sécurité.',
                base: "Erreur lors de la géolocalisation : ",
                timeout: "La localisation est trop longue. Veuillez réessayer dans un instant.",
                permission: "Vous n&rsquo;avez pas donné la permission",
                position: "La position n'a pu être déterminée",
                unknown: "Erreur inconnue"
            },
            info: [
                "@Agence",
                "@Agence Particulier",
                "@Agence Professionnel",
                "@Centre d'affaires",
                "Agence accessible aux personnes à mobilité réduite",
                "Coffre-fort",
                "@Ouvert le samedi",
                "@Distributeur",
                "Distributeur ouvert 24h/24h",
                "Distributeur ouvert aux heures d'ouverture de l'agence",
                "Espace libre service",
                "@Monnayeur",
                "Distributeur accessible aux personnes à mobilité réduite",
                "@DAB Wincor avec prise audio fonctionnelle"
            ]
        },
        images: {
            agency: {
                url: "https://www.caisse-epargne.fr:443/bundles/inddefault/images/app/contact/pin-map-small.png?2.3.22",
                width: 26,
                height: 38
            },
            start: {
                url: "https://www.caisse-epargne.fr:443/bundles/inddefault/images/app/contact/picto-cible.png?2.3.22",
                width: 28,
                height: 36
            }
        },
        mapProxy: '/ajax/bottincarto/agence' // 'http://qlf-fc1.1bis.com/proxy-agency-json.asp'
    };
    App.settings.sessionCookie = {
        name: "EZ_SES",
        keys: {
            type: "mbl", // true/false attendue
            conseilName: "conseil",
            conseilNumber: "number",
            conseilEmail: "email"
        }
    };
    App.settings.contextCookie = {
        name: "EZ_CONTEXTE"
    };
    App.settings.infoCookie = {
        name: "CONTEXTE"
    };
    App.settings.formCookie = {
        name: "EZ_FORM"
    };
    App.settings.trackingCookie = {
        name: "ez_track"
    };
    App.settings.store = {
        mobile: null,
        windows: {
            tablet: null,
            mobile: "http://www.windowsphone.com/fr-fr/store/app/banque/fc6e5ee1-2e32-403b-bab7-6addb7ae9c1b"
        },
        blackberry: {
            tablet: null,
            mobile: "https://appworld.blackberry.com/webstore/content/61323/?lang=fr"
        },
        ios: {
            tablet: "https://itunes.apple.com/fr/app/caisse-depargne-pour-ipad/id442737896?mt=8",
            mobile: "https://itunes.apple.com/fr/app/caisse-depargne/id402753249?mt=8"
        },
        android: {
            tablet: "https://play.google.com/store/apps/details?id=com.caisse.epargne.android.tablette&feature=more_from_developer#?t=W251bGwsMSwxLDEwMiwiY29tLmNhaXNzZS5lcGFyZ25lLmFuZHJvaWQudGFibGV0dGUiXQ",
            mobile: "https://play.google.com/store/apps/details?id=com.caisseepargne.android.mobilebanking"
        }
    };

    /* CONTACT FORM SCHEDULER
     * ============================= */
    App.settings.contactFormScheduler = {
        separatorDaysHours: ' de ',
        schedulesMax: 'Vous pouvez sélectionner jusqu\'à',
        noSchedulesLeft: 'Vous avez ajouté tous les créneaux disponibles',
        schedulesLeft: 'Vous pouvez encore ajouter',
        schedulesLeft1: '1 créneau',
        schedulesLeft2: '2 créneaux',
        schedulesLeft3: '3 créneaux'
    };

    /* BANKS BY DEPARTMENT
     * ============================= */
    App.settings.banksByDepartment = {
                                                                '79': "Aquitaine Poitou-Charentes",
                        '86': "Aquitaine Poitou-Charentes",
                        '17': "Aquitaine Poitou-Charentes",
                        '16': "Aquitaine Poitou-Charentes",
                        '24': "Aquitaine Poitou-Charentes",
                        '33': "Aquitaine Poitou-Charentes",
                        '47': "Aquitaine Poitou-Charentes",
                        '40': "Aquitaine Poitou-Charentes",
                        '64': "Aquitaine Poitou-Charentes",
                                                                        '87': "Auvergne Limousin",
                        '23': "Auvergne Limousin",
                        '19': "Auvergne Limousin",
                        '03': "Auvergne Limousin",
                        '63': "Auvergne Limousin",
                        '15': "Auvergne Limousin",
                        '43': "Auvergne Limousin",
                                                                        '89': "Bourgogne Franche-Comté",
                        '58': "Bourgogne Franche-Comté",
                        '21': "Bourgogne Franche-Comté",
                        '71': "Bourgogne Franche-Comté",
                        '25': "Bourgogne Franche-Comté",
                        '39': "Bourgogne Franche-Comté",
                        '70': "Bourgogne Franche-Comté",
                        '90': "Bourgogne Franche-Comté",
                                                                        '29': "Bretagne - Pays de Loire",
                        '22': "Bretagne - Pays de Loire",
                        '35': "Bretagne - Pays de Loire",
                        '56': "Bretagne - Pays de Loire",
                        '44': "Bretagne - Pays de Loire",
                        '53': "Bretagne - Pays de Loire",
                        '85': "Bretagne - Pays de Loire",
                        '49': "Bretagne - Pays de Loire",
                        '72': "Bretagne - Pays de Loire",
                                                                        '04': "CEPAC",
                        '05': "CEPAC",
                        '84': "CEPAC",
                        '13': "CEPAC",
                        '2A': "CEPAC",
                        '2B': "CEPAC",
                        '20': "CEPAC",
                        '971': "CEPAC",
                        '972': "CEPAC",
                        '974': "CEPAC",
                                                                        '83': "Côte d'Azur",
                        '06': "Côte d'Azur",
                                                                        '08': "Grand Est Europe",
                        '51': "Grand Est Europe",
                        '10': "Grand Est Europe",
                        '52': "Grand Est Europe",
                        '55': "Grand Est Europe",
                        '54': "Grand Est Europe",
                        '57': "Grand Est Europe",
                        '88': "Grand Est Europe",
                        '67': "Grand Est Europe",
                        '68': "Grand Est Europe",
                                                                        '62': "Hauts de France",
                        '59': "Hauts de France",
                        '80': "Hauts de France",
                        '60': "Hauts de France",
                        '02': "Hauts de France",
                                                                        '75': "Ile-de-France",
                        '77': "Ile-de-France",
                        '78': "Ile-de-France",
                        '95': "Ile-de-France",
                        '91': "Ile-de-France",
                        '93': "Ile-de-France",
                        '92': "Ile-de-France",
                        '94': "Ile-de-France",
                                                                        '66': "Languedoc Roussillon",
                        '11': "Languedoc Roussillon",
                        '34': "Languedoc Roussillon",
                        '30': "Languedoc Roussillon",
                        '48': "Languedoc Roussillon",
                                                                        '28': "Loire-Centre",
                        '45': "Loire-Centre",
                        '41': "Loire-Centre",
                        '18': "Loire-Centre",
                        '37': "Loire-Centre",
                        '36': "Loire-Centre",
                                                                        '26': "Loire Drôme Ardèche",
                        '07': "Loire Drôme Ardèche",
                        '42': "Loire Drôme Ardèche",
                                                                        '65': "Midi Pyrénées",
                        '09': "Midi Pyrénées",
                        '31': "Midi Pyrénées",
                        '32': "Midi Pyrénées",
                        '82': "Midi Pyrénées",
                        '81': "Midi Pyrénées",
                        '46': "Midi Pyrénées",
                        '12': "Midi Pyrénées",
                                                                        '76': "Normandie",
                        '27': "Normandie",
                        '61': "Normandie",
                        '14': "Normandie",
                        '50': "Normandie",
                                                                        '01': "Rhône Alpes",
                        '69': "Rhône Alpes",
                        '38': "Rhône Alpes",
                        '73': "Rhône Alpes",
                        '74': "Rhône Alpes",
                        '42410': "Rhône Alpes",
                                            '': ""
    };

    //CDU : ajout codes caisses
    App.settings.CodeByDepartment = {
        '01': '13825',
        '02': '18025',
        '03': '18715',
        '04': '11315',
        '05': '11315',
        '06': '18315',
        '07': '14265',
        '08': '15135',
        '09': '13135',
        '10': '15135',
        '11': '13485',
        '12': '13135',
        '13': '11315',
        '14': '11425',
        '15': '18715',
        '16': '13335',
        '17': '13335',
        '18': '14505',
        '19': '18715',
        '20': '11315',
        '21': '12135',
        '22': '14445',
        '23': '18715',
        '24': '13335',
        '25': '12135',
        '26': '14265',
        '27': '11425',
        '28': '14505',
        '29': '14445',
        '30': '13485',
        '31': '13135',
        '32': '13135',
        '33': '13335',
        '34': '13485',
        '35': '14445',
        '36': '14505',
        '37': '14505',
        '38': '13825',
        '39': '12135',
        '40': '13335',
        '41': '14505',
        '42': '14265',
        '43': '18715',
        '44': '14445',
        '45': '14505',
        '46': '13135',
        '47': '13335',
        '48': '13485',
        '49': '14445',
        '50': '11425',
        '51': '15135',
        '52': '15135',
        '53': '14445',
        '54': '15135',
        '55': '15135',
        '56': '14445',
        '57': '15135',
        '58': '12135',
        '59': '16275',
        '60': '18025',
        '61': '11425',
        '62': '16275',
        '63': '18715',
        '64': '13335',
        '65': '13135',
        '66': '13485',
        '67': '16705',
        '68': '16705',
        '69': '13825',
        '70': '12135',
        '71': '12135',
        '72': '14445',
        '73': '13825',
        '74': '13825',
        '75': '17515',
        '76': '11425',
        '77': '17515',
        '78': '17515',
        '79': '13335',
        '80': '18025',
        '81': '13135',
        '82': '13135',
        '83': '18315',
        '84': '11315',
        '85': '14445',
        '86': '13335',
        '87': '18715',
        '88': '15135',
        '89': '12135',
        '90': '12135',
        '91': '17515',
        '92': '17515',
        '93': '17515',
        '94': '17515',
        '95': '17515',
        '97': '11315'
    };
    //CDU : fin ajout codes caisses

    /* RANDOM LOCALIZATION VARIABLES
     * ============================= */
    App.l10n.users = {
        newMessage: "Vous avez 1 message non lu",
        newMessages: "Vous avez {messages} messages non lus"
    };
    App.l10n.pauth = {
        idClientEmpty: 'Merci de renseigner votre identifiant client',
        passwordEmpty: 'Le code confidentiel est obligatoire',
        cardEmpty: 'Merci de renseigner votre code',
        passwordSame: 'Les mots de passe renseignés sont différents, veuillez réessayer',
        passwordCtrl: 'Le mot de passe doit contenir entre 6 et 8 chiffres',
        changePasswordCode: '90'
    };
    App.l10n.error = {
        contact: {
            zipCode: 'Merci de renseigner un code postal valide',
            empty: 'Merci de renseigner votre code postal'
        }
    };
    App.l10n.contactForm = {
        required: 'Information obligatoire, veuillez indiquer celle-ci',
        minlength: 'Vous devez renseigner au moins %s caractères',
        type: {
            alphabet: 'Seuls les caractères alphabétiques sont acceptés',
            email: 'Veuillez indiquer une adresse email valide',
            bpcephone: 'Veuillez indiquer un numéro de téléphone valide',
            department: 'Veuillez indiquer un numéro de département valide',
            birthdate: 'Veuillez indiquer votre date de naissance au format : JJ/MM/AAAA',
            majority: 'Le formulaire de prise de rendez-vous est réservé aux personnes majeures, nous vous invitons à vous rendre en agence accompagné de votre responsable légal.'
        }
    };

    App.tooltipContact = {
        "webCallBack": {
            "type": "alternance",
            "open": [
                           [
                    ["09:00", "00:00"],
                            ["00:00", "18:00"]
                ],           [
                    ["09:00", "00:00"],
                            ["00:00", "18:00"]
                ],           [
                    ["09:00", "00:00"],
                            ["00:00", "18:00"]
                ],           [
                    ["09:00", "00:00"],
                            ["00:00", "18:00"]
                ],           [
                    ["09:00", "00:00"],
                            ["00:00", "18:00"]
                ],           [
                    ["00:00", "00:00"],
                            ["00:00", "00:00"]
                ],           [
                    ["00:00", "00:00"],
                            ["00:00", "00:00"]
                ]    
            ]
        }
    };

    App.url = {
        disconnection: '/authentification/disconnection',
        pauth_manage: "/authentification/manage",
        // Variables pour les bandeau Cnil et accompagnement client
        lien_conditions_generales: "/politique-cookies",
        lien_accompagnement_client: "/browser_update"
    };

    /* EXPOSE APP
     * ========== */
    window.App = App;

}(window));