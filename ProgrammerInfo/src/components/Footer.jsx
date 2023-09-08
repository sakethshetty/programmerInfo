import React, { useState } from "react";

function Footer(props) {

    const [person, setPerson] = useState({
        name: "",
        gfg: ""
    })

    function handleChange(event) {
        const { name, value } = event.target
        setPerson(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    function handleSubmit(event) {
        event.preventDefault()
        //console.log(person)
        props.addPeople(person)
    }

    //console.log(person)

    return (
        <footer className="footer-container">
            <form onSubmit={handleSubmit}>
                <div className="name">
                    <label htmlFor="name" className="name-label">Username :</label>
                    <textarea type="text" name="name" id="name" onChange={handleChange} value={person.name} className="name-input" />
                </div>
                <button type="submit" className="submit">Submit</button>
            </form>
        </footer>
    )
}

export default Footer