function Verifnom() {
    var nom = document.getElementById("nom");
    nom.style.borderColor = "#ced4da";
    if (!nom.value) {
        $("#erreurnom").toggleClass("visible");
        nom.style.borderColor = "red";
        return n = false;
    } else {
        nom.style.borderColor = "green";
        return n = true;
    }
    window.addEventListerner("load", Verifnom);
}
;

function Verifprenom() {
    var prenom = document.getElementById("prenom");
    prenom.style.borderColor = "#ced4da";
    if (!prenom.value) {
        $("#erreurprenom").toggleClass("visible");
        prenom.style.borderColor = "red";
        
        return p = false;
    } else {
        prenom.style.borderColor = "green";
        return p = true;
    }
    window.addEventListerner("load", Verifprenom);
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

function Verifmessage() {
    var message = document.getElementById("msg");
    message.style.borderColor = "#ced4da";
    if (!message.value) {
        
        message.style.borderColor = "red";
       
        return m = false;
    } else {
        message.style.borderColor = "green";
        return m = true;
    }
    window.addEventListerner("load", Verifmessage);
}
;

function Valid(m, e, p, n) {
    if (m === true && e === true && p === true && n === true) {
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
;

