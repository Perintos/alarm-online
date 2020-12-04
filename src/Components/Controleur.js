import React from 'react';
import Button from '@material-ui/core/Button';


const Controleur = ({onClick,isRunning}) => {

    return(
        <div class="margin-x-small">            
            <Button id="btn1" type="submit" onClick={onClick} variant="contained" color={isRunning ? "secondary" : "primary"}>
                {isRunning ? "Désactiver l'alarme" : "Régler l'alarme"}
            </Button>
        </div>
    )
}

export default(Controleur);