import React from 'react'

export default function Title({title}) {

    return (
        <div className="section-title">
            <h4 style={{color:title==='Stay Home. save lives'?'red ':''}}>{title}</h4>
            <div></div>
            
        </div>
    )
}
