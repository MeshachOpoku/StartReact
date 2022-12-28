import React from 'react';
import ReactDom from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
//creating a component 

class App extends React.Component{


state={lat:null,loc:null}
//function to simplify code
componentDidMount(){
 
window.navigator.geolocation.getCurrentPosition(
position=>{this.setState({lat:position.coords.latitude,
  long:position.coords.longitude,alt:position.coords.altitude,
  acc:position.coords.accuracy,altacc:position.coords.altitudeAccuracy,
  head:position.coords.heading,llat:position.coords,llong:position.coords.longitude,
  sped:position.coords.speed})},e=>{this.setState({loc:e.message})}
  
)
}

//creating render method
render(){ 
if(this.state.loc&&!this.state.lat)
{return<div>Error:{this.state.loc}</div>}
if(!this.state.loc&&!this.state.lat)
{ return <div><SeasonDisplay lat={this.state.lat}></SeasonDisplay></div>}
//return <div><Spinner message='Please accept location '/> </div>
return <div>Loading</div>


}
}
ReactDom.render(
   <App/>,document.querySelector('#root')

)