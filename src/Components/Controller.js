import React from 'react';
import Button from '@material-ui/core/Button';


const Controller = (props) => {

    return(
        <div class="margin-x-small">            
            <Button type="submit" onClick={props.onClick} variant="contained" color={props.isRunning ? "secondary" : "primary"}>
                {props.isRunning ? "Désactiver l'alarme" : "Régler l'alarme"}
            </Button>
        </div>
    )
}

export default(Controller);