import { useState, useEffect } from 'react'
import './App.css'
import About from './components/About';





function App() {
  // const [country, setCountry] = useState([]);
  const [city, setCity] = useState([])
  const [country, setCountry] = useState([])
  const [places, setPlaces] = useState([])
  const [currency, setCurrency] = useState([])

  // let cityData;
  const fetchCity = async () => {
    try {
      // const response = await fetch('https://zenquotes.io/api/quotes');
      const response = await fetch('https://wft-geo-db.p.rapidapi.com/v1/geo/cities', {
        headers: {
          'X-RapidAPI-Key': '4e949eea90msh80e586746cb2efbp171819jsn3e2c109391fd',
          'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
        },
      });
      const data = await response.json();
      // cityData = data.data
      setCity(data.data)

      // console.log(data.data)

    } catch (error) {
      console.log(error)
    }

  }
  // let countryData;
  const fetchCountry = async () => {
    try {
      // const response = await fetch('https://zenquotes.io/api/quotes');
      const response = await fetch(`https://wft-geo-db.p.rapidapi.com/v1/geo/countries`, {
        headers: {
          'X-RapidAPI-Key': '4e949eea90msh80e586746cb2efbp171819jsn3e2c109391fd',
          'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
        },
      });
      const dataCountry = await response.json();
      // countryData = dataCountry.data
      setCountry(dataCountry.data)



      // console.log(dataCountry.data)

    } catch (error) {
      console.log(error)
    }

  }
  const fetchPlaces = async () => {
    try {
      // const response = await fetch('https://zenquotes.io/api/quotes');
      const response = await fetch('https://wft-geo-db.p.rapidapi.com/v1/geo/places', {
        headers: {
          'X-RapidAPI-Key': '4e949eea90msh80e586746cb2efbp171819jsn3e2c109391fd',
          'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
        },
      });
      const dataPlaces = await response.json();
      // countryData = dataCountry.data
      setPlaces(dataPlaces.data)

      // console.log(dataPlaces.data)

    } catch (error) {
      console.log(error)
    }

  }
  const fetchCurrencies = async () => {
    try {
      // const response = await fetch('https://zenquotes.io/api/quotes');
      const response = await fetch('https://wft-geo-db.p.rapidapi.com/v1/locale/currencies', {
        headers: {
          'X-RapidAPI-Key': '4e949eea90msh80e586746cb2efbp171819jsn3e2c109391fd',
          'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
        },
      });
      const dataCurrency = await response.json();
      // countryData = dataCountry.data
      setCurrency(dataCurrency.data)

      // console.log(dataCurrency.data)

    } catch (error) {
      console.log(error)
    }

  }




  useEffect(() => {
    fetchCountry()
    fetchCity()
    fetchPlaces()
    fetchCurrencies()
  }, [])


  return (
    <>
    <span><h4> Geo city</h4></span>
    <About/>
      
      <div className='elements'>
        <div className='city'>
          <button className='btn' onClick={() => { fetchCity() }}>City</button>
          {
            city && city.map((city, index) => {
              return (
                <div className='cityElement' key={index}>
                  <p>City:{city.city}</p>
                  <p>Country:{city.country}</p>
                </div>
              )

            })
          }
        </div>
        <div>
          <button className='btn' onClick={() => { fetchCountry() }}>Country</button>
          {country && country.map((country, index) => {
            return (
              <div className='cityElement' key={index}>
                <p>Country:{country.name}</p>
                <p>Currency:{country.currencyCodes}</p>
              </div>
            )

          })}
        </div>
        <div>
          <button className='btn' onClick={() => { fetchPlaces() }}>Places</button>
          {places && places.map((places, index) => {
            return (
              <div className='cityElement' key={index}>
                <p>Name:{places.name}</p>
                <p>Region:{places.region}</p>
                <p>Code:{places.countryCode}</p>
              </div>
            )

          })}
        </div>

        <div>
          <button className='btn' onClick={() => { fetchCurrencies() }}>Currency</button>
          {currency && currency.map((currency, index) => {
            return (
              <div className='cityElement' key={index}>
                <p>Symbol:{currency.symbol}</p>
                <p>Code:{currency.countryCodes}</p>
              </div>
            )

          })}
          
        </div>
      
      </div>


     
    </>
  )
}

export default App
