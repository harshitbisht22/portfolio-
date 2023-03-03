import { useEffect, useState } from "react"

export default function About () {

    const [classes,setClasses] = useState('');

    
    return(


        <section id="about" className={classes}>
      <div className="center">
        <h2>About</h2>
        <p>To pursue a job opportunity in a competitive environment that will challenge me to push my boundaries and expand my knowledge in the field of computer science while allowing me to add value to the dynamics of the company.</p>
      </div>
    </section>
    )
  
}
