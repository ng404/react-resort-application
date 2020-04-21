import Title from './Title'
import {RoomContext} from '../Context'
import React, {useContext } from 'react'
import Room from './Room'
import Loading from './Loading'
export default function FeaturedRoom() {
    let {loading,featuredRooms : rooms}=useContext(RoomContext)
    rooms=rooms.map(room=>{ 
        return <Room key={room.id} room={room}/>
})
return (
    <section className="featured-rooms">
    <Title title="Featured Rooms"/>
    <div className="featured-rooms-center">
        {loading?<Loading/>:rooms}
    </div>
    
    </section>
);
}

