var Title_Project = document.querySelector("#Title_Project").value;

var i=1;



document.querySelector("#updateData").addEventListener("click", miseAJourData, false);
document.querySelector("#updateData").addEventListener("click", miseAJourDataLegend, false);
document.querySelector("#updateData").addEventListener("click", miseAJourDataTeam, false);
document.querySelector("#goBack").addEventListener("click", retourIndex, false);
document.querySelector("#removeData").addEventListener("click", supprimerDataNews, false);


var Title1 = document.querySelector("#Title1");
var text_content_1 = document.querySelector("#text_content_1");

var Title2 = document.querySelector("#Title2");
var text_content_2 = document.querySelector("#text_content_2");

var Title3 = document.querySelector("#Title3");
var Title4 = document.querySelector("#Title4");

var Job1 = document.querySelector("#Job1");
var Worker1 = document.querySelector("#Worker1");

var Job3 = document.querySelector("#Job3");
var Worker3 = document.querySelector("#Worker3");

var Job5 = document.querySelector("#Job5");
var Worker5 = document.querySelector("#Worker5");

var Job2 = document.querySelector("#Job2");
var Worker2 = document.querySelector("#Worker2");

var Job4 = document.querySelector("#Job4");
var Worker4 = document.querySelector("#Worker4");

var Job6 = document.querySelector("#Job6");
var Worker6 = document.querySelector("#Worker6");

var Work1_legend = document.querySelector("#Work1_legend");
var Work2_legend = document.querySelector("#Work2_legend");
var Work3_legend = document.querySelector("#Work3_legend");
var Work4_legend = document.querySelector("#Work4_legend");
var Work5_legend = document.querySelector("#Work5_legend");
var Work6_legend = document.querySelector("#Work6_legend");
var Work7_legend = document.querySelector("#Work7_legend");
var Work8_legend = document.querySelector("#Work8_legend");
var Work9_legend = document.querySelector("#Work9_legend");
var Work10_legend = document.querySelector("#Work10_legend");
var Work11_legend = document.querySelector("#Work11_legend");

var display = document.querySelector("#display");


function miseAJourData(Title_Project) {
    Title_Project = document.querySelector("#Title_Project").value;
    var i =0;
        while(localStorage.getItem("Projet"+i) !== null){
            if(localStorage.getItem("Projet"+i) === Title_Project){
                break;
            }
        i++;
    }
    localStorage.setItem('Projet'+i,Title_Project );
    if (Title_Project !== "") {
       
        if (Title1.value !== "") {
            localStorage.setItem(Title_Project + "_Title1", Title1.value);
        }
        if (text_content_1.value !== "") {
            localStorage.setItem(Title_Project +"_text_content_1", text_content_1.value);
        }    
        if (Title2.value !== "") {
            localStorage.setItem(Title_Project +"_Title2", Title2.value);
        }
        if (Title3.value !== "") {
            localStorage.setItem(Title_Project +"_Title3", Title3.value);
        }    
        if (text_content_2.value !== "") {
            localStorage.setItem(Title_Project +"_text_content_2", text_content_2.value);
        }   
        if (Title4.value !== "") {
            localStorage.setItem(Title_Project +"_Title4", Title4.value);
        }
    }
}

function miseAJourDataTeam(Title_Project){
    Title_Project = document.querySelector("#Title_Project").value;

    if (Title_Project !== "") {
       
        if (Job1.value !== "") {
            localStorage.setItem(Title_Project +"_Job1", Job1.value);
        }  
        if (Worker1.value !== "") {
            localStorage.setItem(Title_Project +"_Worker1", Worker1.value);
        }  
        if (Job3.value !== "") {
            localStorage.setItem(Title_Project +"_Job3", Job3.value);
        }  
        if (Worker3.value !== "") {
            localStorage.setItem(Title_Project +"_Worker3", Worker3.value);
        }  
        if (Job5.value !== "") {
            localStorage.setItem(Title_Project +"_Job5", Job5.value);
        } 
        if (Worker5.value !== "") {
            localStorage.setItem(Title_Project +"_Worker5", Worker5.value);
        }  
        if (Job2.value !== "") {
            localStorage.setItem(Title_Project +"_Job2", Job2.value);
        }  
        if (Worker2.value !== "") {
            localStorage.setItem(Title_Project +"_Worker2", Worker2.value);
        }  
        if (Job4.value !== "") {
            localStorage.setItem(Title_Project +"_Job4", Job4.value);
        }  
        if (Worker4.value !== "") {
            localStorage.setItem(Title_Project +"_Worker4", Worker4.value);
        }  
        if (Job6.value !== "") {
            localStorage.setItem(Title_Project +"_Job6", Job6.value);
        }  
        if (Worker6.value !== "") {
            localStorage.setItem(Title_Project +"_Worker6", Worker6.value);
        }  
    }
}

function miseAJourDataLegend(Title_Project){
    Title_Project = document.querySelector("#Title_Project").value;

    if (Title_Project !== "") {
        if (Work1_legend.value !== "") {
            localStorage.setItem(Title_Project +"_Work1_legend", Work1_legend.value);
        }  
        if (Work2_legend.value !== "") {
            localStorage.setItem(Title_Project +"_Work2_legend", Work2_legend.value);
        } 
        if (Work3_legend.value !== "") {
            localStorage.setItem(Title_Project +"_Work3_legend", Work3_legend.value);
        } 
        if (Work4_legend.value !== "") {
            localStorage.setItem(Title_Project +"_Work4_legend", Work4_legend.value);
        } 
        if (Work5_legend.value !== "") {
            localStorage.setItem(Title_Project +"_Work5_legend", Work5_legend.value);
        } 
        if (Work6_legend.value !== "") {
            localStorage.setItem(Title_Project +"_Work6_legend", Work6_legend.value);
        } 
        if (Work7_legend.value !== "") {
            localStorage.setItem(Title_Project +"_Work7_legend", Work7_legend.value);
        } 
        if (Work8_legend.value !== "") {
            localStorage.setItem(Title_Project +"_Work8_legend", Work8_legend.value);
        } 
        if (Work9_legend.value !== "") {
            localStorage.setItem(Title_Project +"_Work9_legend", Work9_legend.value);
        } 
        if (Work10_legend.value !== "") {
            localStorage.setItem(Title_Project +"_Work10_legend", Work10_legend.value);
        } 
        if (Work11_legend.value !== "") {
            localStorage.setItem(Title_Project +"_Work11_legend", Work11_legend.value);
        } 
    }
}


function supprimerDataNews() {
   
    localStorage.clear();
    location.reload();
}

function retourIndex() {
    window.location.href = '../../HTML/project.html';
}


