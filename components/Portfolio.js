export default function Portfolio() {
  return (
    <section id="portfolio">
      <div className="center">
        <h2>Portfolio</h2>
        <div className="portfolio-container">
        <div className="-box">
            <a href="https://restaurant-menu-app-ecru.vercel.app/">
              <img src="/img/project6.png" alt="" />
            </a>
            <span>Restaurant Menu</span>
          </div>
          <div className="-box">
            <a href="https://weather-app-8g5y.vercel.app/">
              <img src="/img/project5.png" alt="" />
            </a>
            <span>Weather App</span>
          </div>
          <div className="-box">
            {" "}
            <a href="">
              <img src="/img/h.png" alt="" />
            </a>
            <span>Logos</span>
          </div>
          
          <div className="-box">
            {" "}
            <a href="">
              <img src="/img/project3.png" alt="" />
            </a>
            <span>Logos</span>
          </div>
          <div className="-box">
            {" "}
            <a href="">
              <img src="/img/project4.png" alt="" />
            </a>
            <span>Logos</span>
          </div>
        </div>
      </div>
    </section>
  );
}
