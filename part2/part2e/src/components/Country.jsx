import { useEffect, useState } from 'react'
import weatherService from '../services/weather'

const Country = (country) => {
    const currentCountry = country.country[0]
    const [weatherData, setWeatherData] = useState([])
    useEffect(() => {
        weatherService
            .getAll(currentCountry.latlng[0], currentCountry.latlng[1], null)
            .then(initWeatherData => {
                setWeatherData(initWeatherData);
            });
    }, []);

    console.log(weatherData)

    return (
        <div>
            <h1>{currentCountry.name.common}</h1>
            <p>capital {currentCountry.capital[0]}</p>
            <p>area {currentCountry.area}</p>
            <b>languages:</b>
            <ul>
                {Object.values(currentCountry.languages).map((language, index) =>
                    <li key={language + index}>{language}</li>)}
            </ul>
            <img src={currentCountry.flags.png} alt="flag" width="200" height="200"></img>
            <h3>Weather in {currentCountry.capital[0]}</h3>
            {weatherData.current &&(<>
            <p><b>temperature:</b> {weatherData.current.temp} Celsius</p>
            <img src={weatherData.current.weather_icons} alt="weather icon" width="100" height="100"></img> 
            <p><b>wind:</b> {weatherData.current.wind_speed} m/s</p>
            </>)

            }
        </div>
    )
}

export default Country