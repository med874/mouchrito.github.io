var ObjetButton =
{
    connect: function(oElem, sEvType, fn, bCapture) {
        if (oElem) {
            return oElem.addEventListener ?
                oElem.addEventListener(sEvType, fn, bCapture) :
                oElem.attachEvent ?
                    oElem.attachEvent('on' + sEvType, fn) :
                    false;
        }
    },

    cancelClick: function(e)
    {
        if(e && e.stopPropagation && e.preventDefault)
        {
            e.stopPropagation();
            e.preventDefault();
        }
        else if(e && window.event)
        {
            window.event.cancelBubble = true;
            window.event.returnValue = false;
        }
        return false;
    },

    IdButton: function(e)
    {
        e = e || window.event;
        var el = e.target || e.srcElement;
        if (el.nodeType == 3) {
            el = el.parentNode;
        }
        if (el.getAttribute('aria-label') == "touche") {
            if (el.id) {
                var $visiblePauth = $("#pauth #pauth_default");

                var oldNewCodeConfValue = $visiblePauth.find('#newCodeConf').val();
                var newCodeConfValue = $visiblePauth.find('#newCodeConf').val(oldNewCodeConfValue+el.id);
                var oldcodconfstarValue = $visiblePauth.find('#codconfstar').val();
                $visiblePauth.find('#codconfstar').val("*"+oldcodconfstarValue);
                $visiblePauth.find('#codconf').val(newCodeConfValue);
                $(el).focus();
            }
        }
    }
};

function ResetCodConf() {
    var $visiblePauth = $("#pauth #pauth_default");
    $visiblePauth.find('#newCodeConf').val("");
    $visiblePauth.find('#codconfstar').val("");
    $visiblePauth.find('#codconf').val("");
}

function lanceur() {
    ObjetButton.connect(document, 'click', ObjetButton.IdButton, false);
}

function InitialiseClavierSonore(testage){
    if (testage =="1")
    {
        clavierSonore = true;
        return clavierSonore;
    }
    else{
        clavierSonore = false;
        return clavierSonore;
    }
}

function PlaySound(sound) {
    if (sound < 15) {
        if (clavierSonore) {
            document.getElementById('son-' + sound).play();
        }
    }
}
function StopSound(sound) {
    if (sound < 15) {
        if (clavierSonore) {
            document.getElementById('son-' + sound).pause();
            document.getElementById('son-' + sound).currentTime = 0;
        }
    }
}