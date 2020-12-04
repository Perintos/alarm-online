import React from 'react';
import Button from '@material-ui/core/Button';


const Controller = ({onClick, isRunning }) => {

    return(
        <div class="margin-x-small">            
            <Button type="submit" onClick={onClick} variant="contained" color={isRunning ? "secondary" : "primary"}>
                {isRunning ? "Désactiver l'alarme" : "Régler l'alarme"}
            </Button>
        </div>
    )
}

export default(Controller);