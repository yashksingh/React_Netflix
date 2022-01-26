import React from "react";
import ReactDOM from "react-dom";
import Card from './Card';
import './index.css';
import Sdata from './Sdata';

const ncard = val => {
    return(
          <Card 
            key = {val.id}
            imgsrc = {val.imgsrc}
            title = {val.title}
            sname = {val.sname}
            link =  {val.link}
      />
    );
    };

const App = () => {
    return(
        <>
         <h1 className="heading_style">List of top 5 Netflix Series in 2022.</h1>
        {Sdata.map(ncard)}
         <br />
        </>
    );
};    
export default App;