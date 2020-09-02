import React, { useEffect } from 'react';
import { gsap } from "gsap";
import './GSAPComponent.css';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function GSAPComponent(props) {
    const header = React.createRef();
    useEffect(() => {

    }, [header]);

    return (
   <>
   <h1 ref={header}>
       Moe Techtainment-- Memory Palace
   </h1>

   </>);
}

export default GSAPComponent;