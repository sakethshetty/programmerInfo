import React from "react";
import {Link} from 'react-router-dom'

function ListEle(props){
    return (
        <div className="card-container">
            <Link to={`/${props.person.name}`} className="card-profile">
            <img className="card-img" src={props.person.avatar} />
            <h2 className="card-name"> {props.person.name}</h2>
            </Link>
            {/* <button onClick={() => props.delete(props.person.name)}>Delete</button> */}
            <img className="delete-button" width="30px"  height="40px" onClick={() => props.delete(props.person.name)} src="https://th.bing.com/th/id/OIG.sfO5RFrQD0qfGpVru4SQ?pid=ImgGn"/>
        </div>
    )
}

export default ListEle