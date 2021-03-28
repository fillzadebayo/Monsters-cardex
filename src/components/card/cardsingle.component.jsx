import React from 'react';
import './cardsingle.style.css'


export const Card = (props) =>{
    return (
        <div className="card-container">
        <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}></img>
        <h1> {props.monster.name}</h1>
        <p>{props.monster.name}</p>
        </div>
    )

}