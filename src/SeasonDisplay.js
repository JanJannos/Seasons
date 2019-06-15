import React from 'react';
import './SeasonDisplay.css';

const getSeason = (lat,month) => {
    if (month > 2 && month < 9){
        return lat > 0 ? 'Summer' : 'Winter';
    }
    return lat > 0 ? 'Winter' : 'Summer';
}

const seasonConfig = {
    Summer: {
        text: 'Lets hit the beach' ,
        iconName: 'sun'
    } ,
    Winter: {
        text: 'Burr it is cold' ,
        iconName: 'snowflake'
    } 
}

const SeasonDisplay = (props) => {    
    const season = getSeason(props.lat , new Date().getMonth());
    // console.log(season);
    // return <div>Season Display</div>;
    
    // Now we use new Syntax ES 2019
    // const text = season === 'Winter' ? 'Burr ,it is chilly' : 'Lets hit the beach';
    // const icon  = season === 'Winter' ? 'snowflake' : 'sun';

    const {text ,iconName} = seasonConfig[season];


    return (
        // <div>
        //     <i className={`${icon} icon`} />
        //     <h1>{text}</h1>
        //     <i className={`${icon} icon`} />
        // </div>

        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`} />
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    );
};


export default SeasonDisplay;