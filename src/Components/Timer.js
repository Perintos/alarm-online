import React from 'react';




const Timer = (props) => {
    const calculerTempsRestant = (heure, minutes) => {
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

    return(
        <div class=".margin-x-small">
            <p class="timer">{calculerTempsRestant(props.heure, props.minute)}</p>
        </div>
    )
}

export default(Timer);


    //    //GESTION DES SECONDES
    //    if(date.getSeconds() > dateArrivee.getSeconds()){
    //     secondesRestantes = 60 - date.getSeconds() + dateArrivee.getSeconds();
    //     minutesRetenue++;
    // }
    // else if(date.getSeconds() < dateArrivee.getSeconds()){
    //     secondesRestantes = dateArrivee.getSeconds(); - date.getSeconds()
    // }
    
    // //GESTION DES MINUTES
    // if(date.getMinutes() > dateArrivee.getMinutes()){
    //     minutesRestantes = date.getMinutes() + dateArrivee.getMinutes() - minutesRetenue;
    //     heureRetenue++;
    // }
    // else if(date.getMinutes() < dateArrivee.getMinutes()){
    //     minutesRestantes = dateArrivee.getMinutes() - date.getMinutes() - minutesRetenue;
    // }

    // //GESTION DES HEURES
    // if(date.getHours()+heureRetenue > dateArrivee.getHours()){
    //     heuresRestantes = 24-date.getHours() + dateArrivee.getHours() - heureRetenue;
    // }
    // else if(date.getHours()+heureRetenue < dateArrivee.getHours() ){
    //     heuresRestantes = dateArrivee.getHours() - date.getHours() - heureRetenue
    // }
