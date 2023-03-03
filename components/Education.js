export default function Education() {
    return (
      <section id="education">
        <div className="center">
          <h2>Education</h2>
          <div className="timeline">
            <div className="item">
              <div className="date"><span className="year">2019</span><span className="arrow"></span></div>
              <div className="separator">
                <div className="dot"></div>
                <div className="line"></div>
              </div>
              <div className="texts">
                <h3>Master of Computer Applications (MCA)</h3>
                <h4>Galgotias College of Engineering & Technology</h4>
                <h4>73%</h4>
              </div>
            </div>
            <div className="item">
              <div className="date"><span className="year">2017</span><span className="arrow"></span></div>
              <div className="separator">
                <div className="dot"></div>
                <div className="line"></div>
              </div>
              <div className="texts"> 
                <h3>Bachelor's in Computer Application (BCA)</h3>
                <h4>SSJ Campus Almora, (Kumaun University) </h4>
                <h4>65%</h4>
              </div>
            </div>
            <div className="item">
              <div className="date"><span className="year">2022</span><span className="arrow"></span></div>
              <div className="separator">
                <div className="dot"></div>
                <div className="line"></div>
              </div>
              <div className="texts">
                <h3>Intermediate (CBSE)</h3>
                <h4>Beersheba School Almora</h4>
                <h4>59.6%</h4>
                
              </div>
            </div>
            <div className="item">
              <div className="date"><span className="year">2012</span><span className="arrow"></span></div>
              <div className="separator">
                <div className="dot"></div>
                <div className="line"></div>
              </div>
              <div className="texts">
                <h3>High school (CBSE)</h3>
                <h4>K.V Ranikhet</h4>
                <h4>6.5 CGPA</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }