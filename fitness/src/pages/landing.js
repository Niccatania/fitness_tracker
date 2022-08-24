import React from 'react'
import './apple.css';
import Calendar from 'react-calendar';
import { useState } from 'react';
const Landing = () => {
 const [date, setDate] = useState(new Date());

    return (
     <div>
<div>
    <h1 className='heada'>My Fitness Tracker </h1>
    <h4 className='heada'>Log your progess below</h4>
    </div>
    <div>
        <div className='calendar-container'>
          <Calendar onChange={setDate} value={date} />
        </div>
        <p className='text-center'>
          <span className='bold'>Selected Date:</span>{' '}
          {date.toDateString()}
        </p>
        </div>
        </div> 
)
}
export default Landing;