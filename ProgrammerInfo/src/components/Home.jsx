import React , {useState, useEffect} from "react"
import Header from "./Header"
import Body from "./Body"
import Footer from "./Footer"

function Home(props){

    // const [people, setPeople] = useState(JSON.parse(localStorage.getItem("people")) || [])

    //console.log(localStorage.getItem("people") || [])
    const {delfunction, addfunction} = props

    return (
        <div className="home-container">
            <Header />
            <Body coders={props.coders} delete={delfunction}/>
            <Footer addPeople={addfunction}/>
        </div>
    )
}

export default Home