import {useEffect, useState} from "react";

export default function Skills() {
  const [extraClasses,setExtraClasses] = useState('');



  return (
    <section id="skills">
      <div className="center">
        <h2>Skills</h2>
        <div className={extraClasses +  "skills-container"}>
        <div className="skill-box"><img src="/img/html-5.png" alt=""/><span>HTML</span></div>
          <div className="skill-box"><img src="/img/css-3.png" alt=""/><span>CSS</span></div>
          <div className="skill-box"><img src="/img/js.png" alt=""/><span>Javascript</span></div>
          <div className="skill-box"><img src="/img/react.png" alt=""/><span>ReactJs</span></div>
          <div className="skill-box"><img src="/img/photoshop.png" alt=""/><span>Photoshop</span></div>
          <div className="skill-box"><img src="/img/canva.png" alt=""/><span>Canva</span></div>
          <div className="skill-box"><img src="/img/nextjs.png" alt=""/><span>NextJS</span></div>
          
          
          
        </div>
      </div>
    </section>
  );
}
