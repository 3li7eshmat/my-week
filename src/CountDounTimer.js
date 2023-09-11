import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      const daysRemaining = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hoursRemaining = Math.floor((difference - (daysRemaining * 1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutesRemaining = Math.floor((difference - (daysRemaining * 1000 * 60 * 60 * 24) - (hoursRemaining * 1000 * 60 * 60)) / (1000 * 60));
      const secondsRemaining = Math.floor((difference - (daysRemaining * 1000 * 60 * 60 * 24) - (hoursRemaining * 1000 * 60 * 60) - (minutesRemaining * 1000 * 60)) / 1000);

      setDays(daysRemaining);
      setHours(hoursRemaining);
      setMinutes(minutesRemaining);
      setSeconds(secondsRemaining);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [targetDate]);

  

  return (
    <div className='timer'>
      <h1>{days} : {hours} : {minutes} : {seconds}</h1>
    </div>
  );
};

export default CountdownTimer