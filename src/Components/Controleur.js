import React from 'react';


const Controleur = (props) => {
    return(
        <div>
            <input type="submit" value={props.isRunning ? "Désactiver l'alarme" : "Régler l'alarme"} onClick={props.onClick}/>
        </div>
    )
}

export default(Controleur);