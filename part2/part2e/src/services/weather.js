import axios from 'axios'

const baseUrl = 'https://api.openweathermap.org/data/3.0/onecall?'

console.log("key", import.meta.env.VITE_WEATHER_API)
const getAll = (lat, lon, exclude) => {
    const excluded = exclude ? (`exclude=${exclude}&`) : ''
    const request = axios.get(`${baseUrl}lat=${lat}&lon=${lon}&units=metric&${excluded}appid=${import.meta.env.VITE_WEATHER_API}`)
    return request.then(response => response.data)
}


export default {
    getAll
}