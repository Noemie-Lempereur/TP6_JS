function tirets(){
    console.log("========================================================")
}

function informations(){
    let e="Titre de la page: ";
    let d=document.title;
    console.log(e+d);
    e="Type du contenu de la page: ";
    d=document.querySelector("body")
    console.log(e+d);
    e="La troisieme bande annonce est: ";
    d=document.links;
    console.log(e+d[2]);
}

function GoneGirl(){
    let e="Le titre ";
    let d=document.querySelector("h2");
    e=e+d.innerHTML;
    e=e+" est de type: ";
    console.log(e+d);    
}

function paragraphes(){
    let para=document.getElementsByTagName("p");
    para=para.length;
    let img=document.images;
    img=img.length;
    console.log("Notre page contient " + para + " paragraphes et " + img +" images");
}

function synopsis(){
    let syn=document.getElementsByClassName("syn");
    syn=syn.length;
    console.log("Notre page contient " + syn + " synopsis de films.");
}

function rubrique(){
    let date=document.querySelector("h1");
    date=date.innerHTML;
    console.log("La premiere rubrique des films date de l'année " + date);
    let number= document.getElementById("id2").querySelectorAll(".film").length;
    date = document.getElementsByTagName("h1");
    console.log("Il existe " + number + " films sous la rubrique " + date[2].innerHTML);
}

function imitation(){
    let film = document.getElementsByClassName("film");
    console.log("Synopsis du film :" + film[1].innerHTML + ":");
    let info = document.querySelector("#id1");
    console.log(info.innerHTML);
}

function main() {
    tirets();
    informations();
    tirets();
    GoneGirl();
    tirets();
    paragraphes();
    tirets();
    synopsis();
    tirets();
    rubrique();
    tirets();
    imitation();
    tirets();
}

main();