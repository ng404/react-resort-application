import React from 'react'
import Room  from './Room'
export default function RoomsList(rooms) {
    if(rooms.rooms.length===0){
        console.log("hello")
        return (
            <div className="empty-search">
                <h3>unfortunately no rooms matched your search</h3>
            </div>
        )
    }
    return (<section className="roomslist">
        <div className="roomslist-center">
    {rooms.rooms.map(item=>
    {
        return <Room key={item.id} room={item}></Room>
    })}
        </div>
    </section>
    );
}
