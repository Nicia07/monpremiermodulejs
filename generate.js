function getHeure() {
    const date = new Date(); /* Crée un objet Date qui représente la date et l'heure actuelles. */
    const heure = date.getHours(); /* Récupère l'heure actuelle (de 0 à 23). */
    const min = date.getMinutes(); /* Récupère les minutes actuelles (de 0 à 59). */
    const sec = date.getSeconds(); /* Récupère les secondes actuelles (de 0 à 59). */

    console.log(heure, "heur", min, "minute", sec, "seconde"); 
    /* Affiche dans la console l'heure, les minutes et les secondes sous forme lisible, par exemple : "12 heur 30 minute 45 seconde". */
}

export default {
    getHeure /* Exporte la fonction `getHeure` pour qu'elle puisse être utilisée dans d'autres fichiers. */
};
