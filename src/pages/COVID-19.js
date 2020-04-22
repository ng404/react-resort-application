import React,{useEffect, useState} from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import Precaution from '../components/Precaution'
import FeaturedRoom from '../components/FeaturedRoom'
import Cards from '../components/Cards/Cards'
import Charts from '../components/Charts/Charts'
import CountryPicker from '../components/CountryPicker/CountryPicker'
import {fetchData} from '../api/index'
export default function COVID_19() {

    const [data,setData]=useState({});
    const [country,setCountry]=useState('');
    useEffect(() => {
        const fetchApi =async()=>{
           setData(await fetchData());
            }
            
            fetchApi();
        },[]
    );
   const handleCountryChange = async (country)=>
    { 
    
       setData(await fetchData(country));
       setCountry(country);
    };
    return (
        <div>
            <Hero hero="covid19">{/*main concept in App.css*/}
            <Banner title="COVID-19">
            <a href='#CovidTracker' className="btn-primary">
               Check Corona Tracker
            </a>
            </Banner>
            </Hero>
            <Precaution/>
            <div className="container" id="CovidTracker">
                <Cards data={data}/>
                <CountryPicker handleCountryChange={handleCountryChange}/>
               <Charts data={data} country={country}/>
            </div>
           
        </div>
    )
}
