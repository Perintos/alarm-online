export const  displayDaysLetters = (date) => {
    let result = "";

    switch (date.getDay()-1) {
        case 0:
            result = "Lundi";
          break;
        case 1:
            result = "Mardi";
        break;
        case 2:
            result = "Mercredi";
            break;
        case 3:
            result = "Jeudi";
            break;
        case 4:
            result = "Vendredi";
            break;
        case 5:
            result = "Samedi";
            break;
        case 6:
            result = "Dimanche";
            break;
        default:
          console.log(`NaN`);
      }

      return result;
}

export const displayMonthLetters = (date) => {
    let result = "";

    switch (date.getDate()) {
        case 0:
            result = "Janvier";
          break;
        case 1:
            result = "Février";
        break;
        case 2:
            result = "Mars";
            break;
        case 3:
            result = "Avril";
            break;
        case 4:
            result = "Mais";
            break;
        case 5:
            result = "Juin";
            break;
        case 6:
            result = "Juillet";
            break;
        case 6:
            result = "Aout";
            break;
        case 6:
            result = "Septembre";
            break;
        case 6:
            result = "Octobre";
            break;
        case 6:
            result = "Novembre";
            break;
        case 6:
            result = "Décembre";
            break;                                                                                 
        default:
          console.log(`NaN`);
      }

      return result;
}

export const calculateTimeRemaining = (heure, minutes) => {
    const date = new Date();
    const dateArrivee = new Date();

    dateArrivee.setHours(heure,minutes, 0);

    
    let time = date.getHours()*3600 + date.getMinutes()*60 + date.getSeconds();
    let timeArrive = dateArrivee.getHours()*3600 + dateArrivee.getMinutes()*60 + dateArrivee.getSeconds();
    let timeRestant = 0 ;

    if(time<timeArrive)
        timeRestant = timeArrive - time;
    else if(time>timeArrive)
        timeRestant = 86400 - time + timeArrive;
    else{ }

    const heuresRestantes = Math.trunc(timeRestant/3600);
    const minutesRestantes = Math.trunc((timeRestant - heuresRestantes * 3600)/60);
    const secondesRestantes = (timeRestant - heuresRestantes * 3600 - minutesRestantes * 60);


    console.log(heure);
    console.log(minutes);
    console.log("calculerTempsRestant : " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " -> " +
        dateArrivee.getHours() + ":" + dateArrivee.getMinutes() + ":" + dateArrivee.getSeconds() + " => " +
         + heuresRestantes + ":" + minutesRestantes + ":" + secondesRestantes); 

    return (heuresRestantes + ":" + minutesRestantes + ":" + secondesRestantes);
}
