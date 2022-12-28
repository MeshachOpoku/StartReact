import React from 'react';

const Spinner=(props)=>
{
    <div className="ui active dimmer">
     
    <div className="ui big text loader">{props.Message}</div>
    </div>
}
//Spinner.defaultProps={
//message:'loading'
//}

export default  Spinner;