import { useEffect, useState } from "react"

export default function Intro(params) {

    const[classes,setClasses]=useState('');
 return(
        <section id= "intro" className={classes}>
    <div>
      <p>
        I am <span>Harshit Bisht</span> <br/> 
        Web developer & Part Time Designer
      </p>
      <a href="#">Contact me </a>
    </div>
    <div>
      <img src="/img/har.png" alt="" />
    </div>
    </section> 
    )
    
}