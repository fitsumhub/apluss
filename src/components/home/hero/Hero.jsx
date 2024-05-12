import React from "react";
import Heading from "../../common/heading/Heading";
import "./Hero.css";

const Hero = () => {
  const redirectToYouTube = () => {
    console.log("Button clicked!");
    window.open("https://www.youtube.com/@AplusEthiopia", "_blank");
  };

  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <Heading
              subtitle="WELCOME TO A+ Ethiopia"
              title="Best Online Education website in Ethiopia"
            />
            <p>"Achieve Your A+: Unleash Your Potential with A+ Ethiopia".</p>
            <div className="button">
            
        
              <button className="primary-btn" onClick={redirectToYouTube}>
                SUBSCRIBE ON YOUTUBE NOW <i className="fa fa-long-arrow-alt-right"></i>
              </button>
              <button>
                REGISTER NOW <i className="fa fa-long-arrow-alt-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Hero;



