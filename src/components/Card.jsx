import React from "react";

export default function Card({cardInfo: cardData}) {
    console.log(cardData)
    return (
        <div className="card">
            <img src={cardData.imageUrl} className='card-img' />
            <div className="card-info">
                <div className="card-loc">
                    <i className='fa fa-map-marker'></i>
                    <p className='card-loc-name'>{cardData.location}</p>
                    <a href={cardData.googleMapsUrl} className='card-gmap'>View on Google Maps</a>
                </div>
                <h1 className='card-title'>
                    {cardData.title}
                </h1>
                <p className="card-duration">
                    <span className='card-date'>{cardData.startDate}</span> 
                    - 
                    <span className='card-date'>{cardData.endDate}</span>
                </p>
                <p className='card-desc'>
                    {cardData.description}
                </p>
            </div>
        </div>
    )
    
}