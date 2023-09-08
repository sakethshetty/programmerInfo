import React, { useEffect, useState } from "react";
import Header from "./Header";

function Info(props) {

    const people = props.coders
    const id = window.location.pathname
    const [info, setInfo] = useState({
        avatar: "https://www.bing.com/images/search?q=small+profile+icon+image&id=61663D404B15ABD96E71E605D01C9DFE419EBE14&FORM=IACMIR&PC=DCTS",
        maxrating: 0,
        rank: "Finding...",
        rating: 0,
    });

    useEffect(() => {
        fetch(`https://codeforces.com/api/user.info?handles=${id.slice(1)}`)
            .then((res) => {
                return res.json()
            })
            .then(data => {
                console.log(data.result[0])
                setInfo({
                    avatar: data.result[0].avatar,
                    maxrating: data.result[0].maxRating,
                    rank: data.result[0].rank,
                    rating: data.result[0].rating
                })
            })
            .catch(error => console.log(error))
    }, [])

    function color(rating) {
        let color
        if (rating < 1200) color = "#808080"
        else if (rating < 1400) color = "#008000"
        else if (rating < 1600) color = "#00FFFF"
        else if (rating < 1900) color = "#0000FF"
        else if (rating < 2100) color = "#EE82EE"
        else if (rating < 2300) color = "#FFA500"
        else if (rating < 2400) color = "#FF0000"
        else if (rating < 2600) color = "#FF2400"
        else if (rating < 3000) color = "#000000"
        else if (rating >= 3000) color = "#FFD700"
        else color = "black"

        return color

    }

    return (
        <div>
            {
                <div className="infos-container">
                    <Header/>
                    <div className="info-container">
                        <img className="info-avatar" src={info.avatar} />
                        <div className="info-details">
                            <h1 className="info-detail" style={{ color: color(info.rating) }}>{people[props.index].name}</h1>
                            <h3>Max Rating : <span  className="info-detail" style={{ color: color(info.maxrating) }}>{info.maxrating}</span></h3>
                            <h3>Rank : <span  className="info-detail" style={{ color: color(info.rating) }}>{info.rank}</span></h3>
                            <h3>Rating : <span  className="info-detail" style={{ color: color(info.rating) }}>{info.rating}</span></h3>
                            {/* <h3 className="info-detail" style={{ color: color(info.rating) }}>Rank : {info.rank}</h3> */}
                            {/* <h3 className="info-detail" style={{ color: color(info.rating) }}>Rating : {info.rating}</h3> */}
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Info