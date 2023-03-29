import React, { useState, useEffect } from 'react';

function HomeSidebar({ quotes }) {
    const [selectedQuote, setSelectedQuote] = useState(quotes[0]);

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const quote = quotes[randomIndex];
        setSelectedQuote(quote);
    }, [quotes]);

    return(
        <div className="card text-white bg-info mb-3">
            <div className="card-header">Travel, Explore, Visit Earth!</div>
            <div className="card-body">
                <h4 className="card-title">Welcome, NAME!</h4>
                <br/>
                <img src="/images/galaxy.jpg" className="wd-rounded-corners-white" width="100%" height="180px"></img>
                <br/><br/>
                {selectedQuote && <p className="card-text">{selectedQuote}</p>}

            <br/>
                <h6>Top Sites:</h6>
                <br/>
                <div className="container">
                    <div className="row mb-4">
                        <div className="col-6">
                        <img src="/images/houston.jpg" width="100%" height = "90px"></img>
                    </div>
                    <div className="col-6">
                        <img src="/images/nairobi.jpg" width="100%" height = "90px"></img>
                    </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-6">
                            <img src="/images/tokyo.jpg" width="100%" height = "90px"></img>
                        </div>
                        <div className="col-6">
                            <img src="/images/sweden.jpg" width="100%" height = "90px"></img>
                        </div>
                    </div>
                    </div>
            </div>
        </div>
    );
}


export default HomeSidebar;