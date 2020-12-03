import React, {useState, useEffect} from 'react';

import Grid from '@material-ui/core/Grid';

import Clock from '../Components/Clock'
import SelectHeure from '../Components/SelectHeure'
import DateToday from '../Components/DateToday'
import UrlVideo from '../Components/UrlVideo';
import DisplayVideo from '../Components/DisplayVideo';
import Controleur from '../Components/Controleur';
import Timer from '../Components/Timer';



const Home = () => {

    const [date, setDate] = useState(new Date());
    const [url, setUrl] = useState(null);
    const [isRunning, setIsRunning] = useState(null);
    const [heure, setHeure] = useState(0);
    const [minute, setMinute] = useState(0);
    const [play, setPlay] = useState(0);
 
    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date());
        }, 1000);

        if(isRunning && heure == date.getHours() && minute == date.getMinutes()){
            setIsRunning(false);
            setPlay(1);
        }

        return () => clearInterval(interval);
    }, [date]);

    const handleChange = (event) => {
        setUrl(event.target.value);
    }

    const fnStartAlamr =  () => {
        if(isRunning)
            setIsRunning(false);
        else
            setIsRunning(true);
    }

    return(
        <div>
            <Grid container direction="column" justify="center" alignItems="center" >
                <h1 class="titre">Réveil en ligne</h1>
                <Clock date={date} />
                <DateToday date={date}/>
                <SelectHeure setHeure={setHeure} setMinute={setMinute}/>
                <UrlVideo handleChange={handleChange}/>
                <DisplayVideo play={play} url={url} />
                {isRunning ? <Timer heure={heure} minute={minute}/> : null}
                <Controleur isRunning={isRunning} onClick={fnStartAlamr} />
            </Grid>
        </div>
    )
}

export default(Home);