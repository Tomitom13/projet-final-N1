function VerifRadio() {
    var rep = document.getElementById("report1");
    if ($('input[name=choix]:checked').length > 0) {
    return r = true;
    rep.style.color = "green";
   }  
   else{
       return r = false;
       rep.style.color = "#ced4da";
    }
    window.addEventListerner("load", VerifRadio);
   }
    ;


    function Verifemail() {
        var email = document.getElementById("email");
        email.style.borderColor = "#ced4da";
        var model_email = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;

        if (!email.value || !model_email.test(document.envoi.email.value)) {
            email.style.borderColor = "red";

            return e = false;
        } else {
            email.style.borderColor = "green";
            return e = true;
        }
        window.addEventListerner("load", Verifemail);
    }
    ;

    function Valid(e,r) {
        if (r === true && e === true) {
            alert("Le formulaire va être envoyé !");
            document.envoi.submit();
        }
        window.addEventListerner("load", Valid);
    }
    ;

    function resetForm() {
        var nom = document.getElementById("nom");
        var prenom = document.getElementById("prenom");
        var email = document.getElementById("email");
        var message = document.getElementById("msg");

        document.getElementById("form").reset();
        $("#erreurprenom").removeClass("visible");
        $("#erreurnom").removeClass("visible");
        $("#erreuremail").removeClass("visible");
        $("#erreurmessage").removeClass("visible");
        email.style.borderColor = "#ced4da";
        nom.style.borderColor = "#ced4da";
        prenom.style.borderColor = "#ced4da";
        message.style.borderColor = "#ced4da";
        window.addEventListerner("load", resetForm);
    }