maDiv = document.getElementById("maDiv");
valeurResultat = document.getElementById("valeurResultat");
afficheAction = document.getElementById("afficheAction");

maDiv.onclick = function() {
    valeurResultat.innerHTML = parseInt(valeurResultat.innerHTML)-10;
    afficheAction.innerHTML = "le monstre à perdu 10PV !";
}

