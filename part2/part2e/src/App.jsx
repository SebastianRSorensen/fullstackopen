import { useState } from 'react'

import { useEffect } from 'react'
import countryService from './services/countries'
import Countries from './components/Countries'
import Filter from './components/Filter'
import Country from './components/Country'


function App() {
  const [countries, setCountries] = useState([
  ])

  useEffect(() => {
    countryService
      .getAll()
      .then(initialCountries => {
        setCountries(initialCountries)
      })
  }, [])
  const [filterName, setFilter] = useState('')

  const handleNewFilter = (event) => {
    console.log(event.target.value);
    setFilter(event.target.value)
  }
  const countriesToShow = filterName.length <= 0
    ? []
    : countries.filter((country) => country.name.common.toLowerCase()
    .includes(filterName.toLowerCase()))



  return (
    <div>
      <Filter handleNewFilter={handleNewFilter} />
      {countriesToShow.length === 1 
      ? <Country country={countriesToShow}/> 
      : <Countries countriesToShow={countriesToShow} />}
    </div>
  )
}

export default App
