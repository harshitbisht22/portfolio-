import { useEffect, useState } from "react"

export default function Intro(params) {

    const[classes,setClasses]=useState('');
 
    useEffect( () =>{

        setClasses('visible');

    },[] );



    return(
        <section id= "intro" className={classes}>
    <div>
      <p>
        I am <span>Harshit Bisht</span> <br/> 
        developer
      </p>
      <a href="">Contact me </a>
    </div>
    <div>
      <img src="/img/harshit.png" alt="" />
    </div>
    </section> 
    )
    
}