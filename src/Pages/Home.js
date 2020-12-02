import React, {useState, useEffect} from 'react';


import Clock from '../Components/Clock'
import SelectHeure from '../Components/SelectHeure'
import DateToday from '../Components/DateToday'
import UrlVideo from '../Components/UrlVideo';
import DisplayVideo from '../Components/DisplayVideo';

const Home = () => {

    const [date, setDate] = useState(new Date());
    const [url, setUrl] = useState(null);
 
    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, [date]);

    const handleChange = (event) => {
        setUrl(event.target.value);
    }

    return(
        <div>
            <h1>Réveil en ligne</h1>
            <Clock date={date} />
            <DateToday date={date}/>
            <SelectHeure/>
            <UrlVideo handleChange={handleChange}/>
            <DisplayVideo url={url}/>
        </div>
    )
}

export default(Home);