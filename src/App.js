
import { useState, useEffect } from 'react';
import './App.css';
import Icon from './assets/icon1.png';
import Axios from "axios"

function App() {

  const [data, SetData] = useState({});
  const [inputCity, Setinputcity] = useState('');
  const apiKey = "216c002b4ab9e60dcc32c4bb03dac06a"
  const getWeatherDetails = (cityName) =>{
    console.log("one==========")
  const apiUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey
    Axios.get(apiUrl).then((res)=>{
      console.log("Two==========")
      SetData(res.data)
      console.log("Three==========")
      // console.log("=============>", res)
      console.log("=============>", data)
    }).catch((error)=>{
      console.log("error======>", error)
    })
  }
  useEffect(()=>{
    getWeatherDetails("Delhi")
  },[])
 
  const handelSearchInput = (e) =>{
    Setinputcity(e.target.value)
  }
  const handelSearch = () =>{
    getWeatherDetails(inputCity)
  }
  return (
    <section className='cus-weather-bg'>
      <div className="container-fluid">
        <div className='row'>
          <div className='col-sm-12 text-center'>
              <h1 className='mt-4 mb-4'>Weather App</h1>
          </div>
          <div className='col-sm-4 text-center visible-phone'>
            <div className='form-inline'>
              <input type="text" className='form-control' placeholder='Enter city' value={inputCity} onChange={handelSearchInput}/>
              <button className='btn btn-success m-0' onClick={handelSearch}>Search</button>
            </div>
          </div>
          <div className='col-sm-8  cus-display-data'>
            <div className='row'>
              <div className='d-flex align-item-sm-center justify-content-xs-center justify-content-sm-center col-md-5'>
                <img src={Icon}  className="img-fluid cus-top-icon"/>
                <h1>{((data?.main?.temp_max) - 273.15).toFixed(2)} <span>°C|°F</span></h1>
              </div>
              <div className='col-md-7'>
                <h3>Precipitation: 18%</h3>
                <h3>Humidity: {data?.main?.humidity}%</h3>
                <h3>Wind: {data?.wind?.speed} km/h</h3>
              </div>
            </div>
          </div>
          <div className='col-sm-4 text-center hidden-phone'>
            <div className='form-inline'>
              <input type="text" className='form-control' placeholder='Enter city' value={inputCity} onChange={handelSearchInput}/>
              <button className='btn btn-success m-0' onClick={handelSearch}>Search</button>
            </div>
          </div>
          <div className='col-sm-12 mt-5 text-center'>
            <div className='cus-cloud-box'>
              <img src={Icon}  className="img-fluid cus-list-icon"/>
                <h1 className='mt-3 mb-3'>{data?.name  ? data?.name : "Delhi" }</h1>
                <h4>
                  <span className='cus-temp_max'>
                    {((data?.main?.temp_max) - 273.15).toFixed(2)}<span>°</span>
                  </span>  

                  {((data?.main?.temp_max) - 273.15).toFixed(2)} <span>°</span>
                </h4>
                
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default App;
