import React from 'react';
import Grid from '@material-ui/core/Grid';

const UrlVideo = ({onUrlChange}) => {

    return(
        <Grid container direction="column" justify="center" alignItems="center" >
            <Grid item xs={12}><p>URL de la vidéo youtube ?</p></Grid>
            <Grid item xs={12}><input type="text" id="standard-basic" name="url-video" label="url de la vidéo" onChange={onUrlChange}/></Grid>
        </Grid>
    )
}

export default(UrlVideo);