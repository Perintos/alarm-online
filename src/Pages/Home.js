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
    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);
    const [play, setPlay] = useState(0);
    const [timesUp, setTimesUp] = useState(false);
 
    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date());
        }, 1000);

        if(isRunning && hour === date.getHours() && minute === date.getMinutes()){
            setPlay(1);
            setTimesUp(true)
        }

        console.log("play = " + play);

        return () => clearInterval(interval);
    }, [date,isRunning,minute,hour,play]);

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
                <Grid item xs={12}><h1 class="titre">Réveil en ligne</h1></Grid>
                <Grid item xs={12}><Clock date={date} /></Grid>
                <Grid item xs={12}><DateToday date={date}/></Grid>
                <Grid item xs={12}><SelectHour setHour={setHour} setMinute={setMinute}/></Grid>
                <Grid item xs={12}><UrlVideo onUrlChange={onUrlChange}/></Grid>
                <Grid item xs={12}><DisplayVideo play={play} url={url} /></Grid>
                <Grid item xs={12}>{isRunning ? <Timer timesUp={timesUp} hour={hour} minute={minute}/> : null}</Grid>
                <Grid item xs={12}><Controller isRunning={isRunning} onClick={fnStartAlamr} /></Grid>
            </Grid>
        </div>
    )
}

export default(Home);