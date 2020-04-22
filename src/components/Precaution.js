import React, { Component } from 'react'
import Title from './Title'
import {FaHome,FaHandPaper,FaHireAHelper} from 'react-icons/fa'
import {GiPathDistance} from 'react-icons/gi'
export default class Precaution extends Component {

    state={
        services:[
            {
                icon:<FaHome/>,
                title:"Stay home",
                info:"Stay home if you feel unwell." 
            },
            {
                icon:<GiPathDistance/>,
                title:"KEEP a safe distance",
                info:"Maintain a safe distance from anyone who is coughing or sneezing." 
            },
            {
                icon:<FaHandPaper/>,
                title:"WASH hands",
                info:"Clean your hands often. Use soap and water, or an alcohol-based hand rub." 
            },
            {
                icon:<FaHireAHelper/>,
                title:"Call the helpline",
                info:"Central Helpline Number for corona-virus: - +91-11-23978046" 
            }
        ]
    };
    render() {
        return (
            <div>
                <section className="services">
                <Title title="Stay Home. save lives" />
                <div className="services-center">
                    {this.state.services.map((item,index)=>{
                        return (<article key={index} className="service">
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
