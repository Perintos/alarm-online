import React, {useState, useEffect} from 'react';

import Grid from '@material-ui/core/Grid';

import Clock from '../Components/Clock'
import SelectHour from '../Components/SelectHour'
import DateToday from '../Components/DateToday'
import UrlVideo from '../Components/UrlVideo';
import DisplayVideo from '../Components/DisplayVideo';
import Controller from '../Components/Controller';
import Timer from '../Components/Timer';



const Home = () => {

    const [date, setDate] = useState(new Date());
    const [url, setUrl] = useState(null);
    const [isRunning, setIsRunning] = useState(null);
    const [heure, setHeure] = useState(0);
    const [minute, setMinute] = useState(0);
    const [play, setPlay] = useState(0);
    const [TimesUp, setTimesUp] = useState(false);
 
    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date());
        }, 1000);

        if(isRunning && heure == date.getHours() && minute == date.getMinutes()){
            setPlay(1);
            setTimesUp(true)
        }

        console.log("play = " + play);

        return () => clearInterval(interval);
    }, [date]);

    const onUrlChange = (event) => {
        setUrl(event.target.value);
    }

    const fnStartAlamr =  () => {
        if(isRunning)
        {
            setIsRunning(false);
            setPlay(0);
            setTimesUp(false)
        }
        else
            setIsRunning(true)
    }

    return(
        <div>
            <Grid container direction="column" justify="center" alignItems="center" >
                <h1 class="titre">Réveil en ligne</h1>
                <Clock date={date} />
                <DateToday date={date}/>
                <SelectHour setHeure={setHeure} setMinute={setMinute}/>
                <UrlVideo handleChange={handleChange}/>
                <DisplayVideo play={play} url={url} />
                {isRunning ? <Timer heure={heure} minute={minute}/> : null}
                <Controller isRunning={isRunning} onClick={fnStartAlamr} />
            </Grid>
        </div>
    )
}

export default(Home);