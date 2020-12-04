import React from 'react';
import {displayDaysLetters, displayMonthLetters} from "../Utils/Date"


const DateToday = ({date}) => {
    return(
        <div class="date">
            {displayDaysLetters(date)} {date.getDate()} {displayMonthLetters(date)} {date.getFullYear()}
        </div>
    )
}

export default(DateToday);