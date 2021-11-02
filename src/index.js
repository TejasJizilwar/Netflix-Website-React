import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card.jsx'
import "./index.css"
import Sdata from './sdata.jsx'
ReactDOM.render(
    <> 

    <h1 className="heading_style"> List of top 6 Netflix series</h1>
   
    {Sdata.map((val) => {
       return( 
         <Card
      imgsrc={val.imgsrc}
      title={val.title}
      sname={val.sname}
      link={val.link} 
       />
            );
    })
    };
    </>,
    document.getElementById('root')
)

