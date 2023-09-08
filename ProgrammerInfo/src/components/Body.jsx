import React, { useState } from "react";
import ListEle from './ListEle'
import Footer from "./Footer";

function Body(props) {

    const people =  props.coders

    //console.log(people)

    return (
        <div className="list-container">
            {
                // console.log(people)
                people.length > 0 && people.map((person, index) => {
                    //console.log(person.name)
                    return <ListEle key={index} person={person} delete={props.delete}/>
                })
            }
        </div>
    )
}

export default Body