document.querySelector("#updateData").addEventListener("click", DataTitle, false);
document.querySelector("#updateData").addEventListener("click", DataGround, false);
document.querySelector("#updateData").addEventListener("click", DataSize, false);
document.querySelector("#updateData").addEventListener("click", DataFurniture, false);
document.querySelector("#goBack").addEventListener("click", retourIndex, false);
document.querySelector("#removeData").addEventListener("click", supprimerDataNews, false);

var Title = document.querySelector("#Title");
var Title1 = document.querySelector("#Title1");
var Title2 = document.querySelector("#Title2");
var Title3 = document.querySelector("#Title3");
var Title4 = document.querySelector("#Title4");

var Ground1 = document.querySelector("#ground_1");
var Ground2 = document.querySelector("#ground_2");
var Ground3 = document.querySelector("#ground_3");

var length1 = document.querySelector("#length1");
var length2 = document.querySelector("#length2");
var length3 = document.querySelector("#length3");
var length4 = document.querySelector("#length4");
var length5 = document.querySelector("#length5");
var length6 = document.querySelector("#length6");

var width1 = document.querySelector("#width1");
var width2 = document.querySelector("#width2");
var width3 = document.querySelector("#width3");
var width4 = document.querySelector("#width4");
var width5 = document.querySelector("#width5");
var width6 = document.querySelector("#width6");

var height1 = document.querySelector("#height1");
var height2 = document.querySelector("#height2");
var height3 = document.querySelector("#height3");
var height4 = document.querySelector("#height4");
var height5 = document.querySelector("#height5");
var height6 = document.querySelector("#height6");

var Bed1 = document.querySelector("#Bed1");
var Bed2 = document.querySelector("#Bed2");
var Bed3 = document.querySelector("#Bed3");

var Table1 = document.querySelector("#Table1");
var Table2 = document.querySelector("#Table2");
var Table3 = document.querySelector("#Table3");

var description1 = document.querySelector("#description1");
var description2 = document.querySelector("#description2");
var description3 = document.querySelector("#description3");
var description4 = document.querySelector("#description4");
var description5 = document.querySelector("#description5");
var description6 = document.querySelector("#description6");


function DataTitle() {
    if (Title.value !== "") {
        localStorage.setItem("Title", Title.value);
    }
    if (Title1.value !== "") {
        localStorage.setItem("Title1", Title1.value);
    }
    if (Title2.value !== "") {
        localStorage.setItem("Title2", Title2.value);
    }
    if (Title3.value !== "") {
        localStorage.setItem("Title3", Title3.value);
    }
    if (Title4.value !== "") {
        localStorage.setItem("Title4", Title4.value);
    }
}

function DataGround(){
    if (Ground1.value !== "") {
        localStorage.setItem("Ground1", Ground1.value);
    }
    if (Ground2.value !== "") {
        localStorage.setItem("Ground2", Ground2.value);
    }
    if (Ground3.value !== "") {
        localStorage.setItem("Ground3", Ground3.value);
    }
}


function DataFurniture(){
    
    if (Bed1.value !== "") {
        localStorage.setItem("Bed1", Bed1.value);
    }
    if (Bed2.value !== "") {
        localStorage.setItem("Bed2", Bed2.value);
    }
    if (Bed3.value !== "") {
        localStorage.setItem("Bed3", Bed3.value);
    }
    if (Table1.value !== "") {
        localStorage.setItem("Table1", Table1.value);
    }
    if (Table2.value !== "") {
        localStorage.setItem("Table2", Table2.value);
    }
    if (Table3.value !== "") {
        localStorage.setItem("Table3", Table3.value);
    }
    
    
    if (description1.value !== "") {
        localStorage.setItem("description1", description1.value);
    }
    if (description2.value !== "") {
        localStorage.setItem("description2", description2.value);
    }
    if (description3.value !== "") {
        localStorage.setItem("description3", description3.value);
    }
    if (description4.value !== "") {
        localStorage.setItem("description4", description4.value);
    }
    if (description5.value !== "") {
        localStorage.setItem("description5", description5.value);
    }
    if (description6.value !== "") {
        localStorage.setItem("description6", description6.value);
    }
    
}


function DataSize(){
    if (length1.value !== "") {
        localStorage.setItem("length1", length1.value);
    }
    if (length2.value !== "") {
        localStorage.setItem("length2", length2.value);
    }
    if (length3.value !== "") {
        localStorage.setItem("length3", length3.value);
    }
    if (length4.value !== "") {
        localStorage.setItem("length4", length4.value);
    }
    if (length5.value !== "") {
        localStorage.setItem("length5", length5.value);
    }
    if (length6.value !== "") {
        localStorage.setItem("length6", length6.value);
    }
    
    
    if (width1.value !== "") {
        localStorage.setItem("width1", width1.value);
    }
    if (width2.value !== "") {
        localStorage.setItem("width2", width2.value);
    }
    if (width3.value !== "") {
        localStorage.setItem("width3", width3.value);
    }
    if (width4.value !== "") {
        localStorage.setItem("width4", width4.value);
    }
    if (width5.value !== "") {
        localStorage.setItem("width5", width5.value);
    }
    if (width6.value !== "") {
        localStorage.setItem("width6", width6.value);
    }
    
    
    if (height1.value !== "") {
        localStorage.setItem("height1", height1.value);
    }
    if (height2.value !== "") {
        localStorage.setItem("height2", height2.value);
    }
    if (height3.value !== "") {
        localStorage.setItem("height3", height3.value);
    }
    if (height4.value !== "") {
        localStorage.setItem("height4", height4.value);
    }
    if (height5.value !== "") {
        localStorage.setItem("height5", height5.value);
    }
    if (height6.value !== "") {
        localStorage.setItem("height6", height6.value);
    }
}

function supprimerDataNews() {
   
    localStorage.clear();
    location.reload();
}

function retourIndex() {
    window.location.href = '../HTML/Estimate.html';
}

document.querySelector("#display").innerHTML = localStorage.getItem("NamePerson");


