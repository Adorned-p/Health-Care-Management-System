import React from 'react'
import "./cards.css"

const Cards = (props) => {

    // console.log(props.company)


  return (
    <div className="cards">

        <div className="part1">
            <div className="logo">
                <img src={props.logo} alt="" />
            </div>
            <div className="save">
                <button>Save</button>
            </div>
        </div>
        <div className="part2">
            <h2>{props.company} <span>{props.daysApplied} days ago</span></h2>
            <h1>{props.post}</h1>
            <div className="parttime">
                <p>{props.level}</p>
                <p>{props.jobType}</p>
            </div>
        </div>
        <div className="part3">
            <div className="pay">
                <h2>${props.Cost}/hour</h2>
                <p>{props.location}</p>
            </div>
            <div className="apply">
                <button>Apply Now </button>
            </div>
        </div>

    </div>
  )
}

export default Cards
