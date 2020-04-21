import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'
export default class Services extends Component {

    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:"Free Cocktail",
                info:"Providing Free Cocktail that can beMartini,Manhattan,Bloody Mary,Margarita" 
            },
            {
                icon:<FaHiking/>,
                title:"Endless Hiking",
                info:"Providing Free Cocktail that can beMartini,Manhattan,Bloody Mary,Margarita" 
            },
            {
                icon:<FaShuttleVan/>,
                title:"Free Shuttle",
                info:"Providing Free Cocktail that can beMartini,Manhattan,Bloody Mary,Margarita" 
            },
            {
                icon:<FaBeer/>,
                title:"Strongest Beer",
                info:"Providing Free Cocktail that can beMartini,Manhattan,Bloody Mary,Margarita" 
            }
        ]
    };
    render() {
        return (
            <div>
                <section className="services">
                <Title title="Services"/>
                <div className="services-center">
                    {this.state.services.map((item,index)=>{
                        return (<article key={index} className="services">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>);
                    })
                    }
                </div>
                </section>
            </div>
        )
    }
}
