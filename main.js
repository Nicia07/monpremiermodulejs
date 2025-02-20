// Importer la fonction  getHeure() qui se trouve 
//import getHeure from "./generate.js";

// j'importe 
//import {nom} from "./user.js"
//let nomUtilisateur = document.querySelector("#nom")
//nomUtilisateur.textContent = nom;


import { utilisateur } from "./user.js";  /* Importe l'objet 'utilisateur' à partir du fichier "user.js". Cet objet contient les informations sur l'utilisateur. */

// Sélectionne l'élément avec l'id "nomUtilisateur" et y place le nom de l'utilisateur suivi d'un espace.
let elementSpanNom = document.querySelector("#nomUtilisateur");
elementSpanNom.textContent = utilisateur.nom + " ";  /* Assigne le nom de l'utilisateur à cet élément, suivi d'un espace. */

// Sélectionne l'élément avec l'id "prenomUtilisateur" et y place le prénom de l'utilisateur.
let elementSpanPrenom = document.querySelector("#prenomUtilisateur");
elementSpanPrenom.innerHTML = utilisateur.prenom;  /* Assigne le prénom de l'utilisateur à cet élément. */

// Sélectionne l'élément avec l'id "utilisteurVillage" (attention à l'orthographe, il manque un 'a' : 'utilisateurVillage') et y place le village de l'utilisateur.
let elementSpanVillage = document.querySelector("#utilisteurVillage");
elementSpanVillage.innerHTML = utilisateur.village;  /* Assigne le village de l'utilisateur à cet élément. */

// Sélectionne l'élément avec l'id "utilisateurSituation" et y place la situation de l'utilisateur.
let elementSpanSituation = document.querySelector("#utilisateurSituation");
elementSpanSituation.innerHTML = utilisateur.situation;  /* Assigne la situation de l'utilisateur à cet élément. */

 // j'ai importer l'utilisateur qui est dans le fichier user.js







//const heure = getHeure;

//console.log(heure);

//document.body.innerHTML = heure;