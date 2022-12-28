  import React from 'react';
  import Weather from './Weather.css';

  const getSeason=(lat,month)=>{
if(month>2&&month>9)
{return lat>0?'DrySeason':'ColdSeason'}
else
{return lat<0? 'ColdSeason':'DrySeason'}
  }

 const seasonconfig={
    ColdSeason:{text:'It is chilling',iconName:'snowflake'},
    DrySeason:{text:'Let\'s hit the beach',iconName:'sun'}
  }

const SeasonDisplay=(props)=>{
  

 const season=getSeason(props.lat,new Date().getMonth());
console.log(props.lat);
const {text,iconName}=seasonconfig[season]
 return <div 
 className={`season-display ${season}`}>
 
  <h1 className='fon'>{text} </h1>

</div>
    
  }
  
  export default SeasonDisplay;