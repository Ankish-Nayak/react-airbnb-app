import React from 'react';  
import starLogo from '../images/Star.png'; 
function Card(props) { 
    console.log(props)
    return (
        <div className='card'>
            <div className='card--badge'>{props.openSpots ? "ONLINE" : "SOLD OUT"}</div>
            <img className='card--img' src={`../images/${props.coverImg}`} />
            <div className='card--stats'>
                <img src={starLogo} className='card--star' />
                <span>{props.stats.rating}</span>
                <span className='gray'>({props.stats.reviewCount}) - </span>
                <span className='gray'>{props.Online}</span>
            </div>
            <p>{props.title}</p>
            <p><span className='bold'>From ${props.price}</span> / person</p>
        </div>
    );
}

export default Card;