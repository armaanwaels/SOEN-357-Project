import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Team } from "./components/Team";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

    const [rides, setRides] = useState([]);

    const addRide = (ride) => {
        setRides([...rides, ride]);
    };

  return (
      <div>
          {/*Where all components are displayed, order of components can be shown here as well. */}
          <Navigation/>
          <Header data={landingPageData.Header}/>
          <About data={landingPageData.About}/>
          <Features data={landingPageData.Features}/>
          <Services
              data={landingPageData.Services}
              addRide={addRide}
          />
          <div className="col-md-10 col-md-offset-1 section-title">
              <h2 style={{textAlign:"center", marginTop:"50px"}}>Available rides</h2>
          </div>
          <Gallery
              data={landingPageData.Gallery}
              rides={rides}
          />
          <Team data={landingPageData.Team}/>
      </div>
  );
};

export default App;
