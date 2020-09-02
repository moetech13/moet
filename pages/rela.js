import React, { Component } from 'react';
import { render } from 'react-dom';
import { gsap } from "gsap";
import { Button } from '@material-ui/core';


function Rela() {
  return (
      <div>
    <Button variant="contained" color="primary">
      Hello World
    </Button> 
    <Button color="primary">Hello World</Button>
    <p style={{ color: 'red' }}>hi there</p>
    
    <style jsx>{`
        h1 {
          color: blue;
        }
        div {
          background: black;
        }
        @media (max-width: 600px) {
          div {
            background: blue;
          }
        }
      `}</style>
    </div>
  );
}

ReactDOM.render(<Rela />, document.querySelector('#Rela'));