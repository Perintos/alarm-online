export function afficherJourEnLettre(date) {
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

export function afficherMoisEnLettre(date) {
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
