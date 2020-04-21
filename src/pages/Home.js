import React from 'react';
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import Services from '../components/Services'
import FeaturedRoom from '../components/FeaturedRoom'

export default function Home() {
    return(
        <div>
            <Hero>{/*main concept in App.css*/}
            <Banner title="Luxurious Rooms" subtitle="deluxe rooms starting at $399">
            <Link to='/rooms' className="btn-primary">
                our rooms
            </Link>
            </Banner>
            </Hero>
            <Services/>
            <FeaturedRoom/>
           
        </div>
    )
}
