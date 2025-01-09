import React, { useState, useEffect } from 'react';
import './index.css'

import flagBrazil from './assets/img/flag-brazil.png';
import flagUSA from './assets/img/flag-united-states.png';
import flagItaly from './assets/img/flag-italy.png';
import flagJapan from './assets/img/flag-japan.png';

const api = {
  key: "**********",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    changeCity("New York")  
  }, []);

  function changeCity(city){
    console.log(city);
      fetch(`${api.base}weather?q=${city}&units=metric&id=524901&appid=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);  
          console.log(result);
        })
  }

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    let weekday = week[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${weekday} ${date} ${month} ${year}`
  }

  return (
    <div className={(typeof weather.main != "undefined") ? (`${weather.name.replace(" ", "-").replace("ã", "a").toLowerCase()}-${weather.weather[0].main.toLowerCase()} ${weather.weather[0].icon.slice(weather.weather[0].icon.length - 1)} app`) : 'app'}>
      <div className="gradient-background">
        <div className="weather-wrapper">
        <button className="btn-city" onClick={() => changeCity("New York")}>
          <img src={flagUSA}/>
          New York
        </button>
        <button className="btn-city" onClick={() => changeCity("São Paulo")}>
          <img src={flagBrazil}/>
          São Paulo
        </button>
        <button className="btn-city" onClick={() => changeCity("Rome")}>
          <img src={flagItaly}/>
          Rome
        </button>
        <button className="btn-city" onClick={() => changeCity("Tokyo")}>
          <img src={flagJapan}/>
          Tokyo
        </button>

        {(typeof weather.main != "undefined") ? (
          <div className="weather-container">
            <p className="date">{dateBuilder(new Date())}</p>
            <p className="city-name">{weather.name}</p>
            <p className="degrees">{Math.round(weather.main.temp)}ºC</p>
            <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
            <p className="weather-name">{weather.weather[0].main}</p>
          </div>
        ) : ('')}
        </div>
      </div>

    </div>
  );
}


export default App;
