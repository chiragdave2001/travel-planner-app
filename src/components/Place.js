import React from 'react'
import '../App.css'
export default function Place(props) {
  return (

    <div className="card mb-3">
        <img src={props.src} className="card-img-top" alt=''/>
        <div className={props.rating>4.0 ? "best" : "d-none"}>Best vecation spot</div>
        <div className="card-body">
            <h2 className="card-title">{props.name}</h2><hr/>
            <p className="card-text">{props.desc}</p>
        </div>
    </div>
    
  )
}
