import React, { useState, useEffect } from 'react';
import sites from "./TopSites.json";
import {Link} from "react-router-dom";

function HomeSidebar({ quotes }) {
    const [selectedQuote, setSelectedQuote] = useState(quotes[0]);

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const quote = quotes[randomIndex];
        setSelectedQuote(quote);
    }, [quotes]);

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function selectSites(length, min, max) {
        let arr = [];
        while (arr.length < length) {
            let randNum = getRandomInt(min, max);
            if (!arr.includes(randNum)) {
                arr.push(randNum);
            }
        }
        return arr;
    }

// Generate an array of 4 unique random integers between 0 and 11
    const selectedLoc = selectSites(4, 0, 11);

    // Each site in the array
    const site0 = sites[selectedLoc[0]];
    const site1 = sites[selectedLoc[1]];
    const site2 = sites[selectedLoc[2]];
    const site3 = sites[selectedLoc[3]];

    // Get the search parameters to use in the link
    const searchSite0 = "/search/" + site0.name;
    const searchSite1 = "/search/" + site1.name
    const searchSite2 = "/search/" + site2.name;
    const searchSite3 = "/search/" + site3.name;

    return(
        <div className="card text-white bg-info mb-3 wd-card-width">
            <div className="card-header">Travel, Explore, Visit Earth!</div>
            <div className="card-body">
                <h4 className="card-title">Welcome, NAME!</h4>
                <br/>
                <img src="/images/galaxy.jpg" className="wd-rounded-corners-white" width="100%" height="180px"/>
                <br/><br/>
                {selectedQuote && <p className="card-text">{selectedQuote}</p>}

            <br/>
                <h6>Top Sites:</h6>
                <br/>
                <div className="container">
                    <div className="row mb-4">
                        <div className="col-6">

                            <Link to={searchSite0}><img src={site0.image} className="white-border" width="100%" height = "90px"/></Link>
                            {site0.name}
                    </div>
                    <div className="col-6">
                        <Link to={searchSite1}><img src={site1.image} className="white-border" width="100%" height = "90px"/></Link>
                        {site1.name}

                    </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-6">

                            <Link to={searchSite2}><img src={site2.image} className="white-border" width="100%" height = "90px"/></Link>
                            {site2.name}
                        </div>
                        <div className="col-6">
                            <Link to={searchSite3}><img src={site3.image} className="white-border" width="100%" height = "90px"/></Link>
                            {site3.name}

                        </div>
                    </div>
                    </div>
            </div>
        </div>
    );
}


export default HomeSidebar;