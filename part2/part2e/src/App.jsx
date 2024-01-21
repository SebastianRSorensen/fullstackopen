import { useState, useEffect } from 'react';
import countryService from './services/countries';
import Countries from './components/Countries';
import Filter from './components/Filter';

function App() {
  const [countries, setCountries] = useState([]);
  const [countriesToShow, setCountriesToShow] = useState([]);
  const [filterName, setFilter] = useState('');

  useEffect(() => {
    countryService
      .getAll()
      .then(initialCountries => {
        setCountries(initialCountries);
      });
  }, []);

  useEffect(() => {
    const filteredCountries = filterName.length <= 0
      ? countries
      : countries.filter((country) => country.name.common.toLowerCase().includes(filterName.toLowerCase()));

    setCountriesToShow(filteredCountries);
  }, [filterName, countries]);

  const handleNewFilter = (event) => {
    setFilter(event.target.value);
  };

  const handleShowCountry = (countryName) => {
    const selectedCountry = countries.filter((country) => country.name.common === countryName);
    setCountriesToShow(selectedCountry);
  };

  return (
    <div>
      <Filter handleNewFilter={handleNewFilter} />
      <Countries countriesToShow={countriesToShow} onShowCountry={handleShowCountry} />
    </div>
  );
}

export default App;
