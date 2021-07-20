import React from "react";
import { Card, CardContent, CardHeader } from "@material-ui/core";
import "./InfoBoxes.css";

function InfoBoxes({lastUpdatedTime,total,dTotal,active,recovered,dRecovered,deaths,dDeaths}) {
    return (
        <div className='myBox'>
        <div className='row'>
        <div className='column'> <Card>
            <CardHeader 
                title="Total" />
            <CardContent className='total'>
                <p>{total} (+{dTotal})</p>
            </CardContent>
        </Card> </div>
        
        <div className='column'><Card>
        <CardHeader 
                title="Active" />
            <CardContent className='active'>
                <p>{active}</p>
            </CardContent>
        </Card></div>
        </div>

        <div className='row'>
        <div className='column'><Card>
        <CardHeader 
                title="Recovered" />
            <CardContent className='recovered'>
                <p>{recovered} (+{dRecovered})</p>
            </CardContent>
        </Card></div>

        <div className='column'><Card>
        <CardHeader 
                title="Death" />
            <CardContent className='death'>
                <p>{deaths} (+{dDeaths})</p>
            </CardContent>
        </Card></div>

        </div>
        </div>
    )
}

export default InfoBoxes;
