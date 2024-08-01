import React from "react";
import "./Home.css";
import Navbar from "../../components/NavigationBar";
import Footer from "../../components/Footer";
import HealthcareOverview from '../../assets/Healthcare.png'
function Home() {
  return (
    <div className="home-container">
      <div className="home-header">
        <Navbar />
      </div>
      <div className="main-area">
        <h3>
          {" "}
          <b>What is RISE ?</b>
        </h3>
        <p>
          <b style={{ fontSize: "40px" }}>R</b>esponsive{" "}
          <b style={{ fontSize: "40px" }}>I</b>nformation{" "}
          <b style={{ fontSize: "40px" }}>S</b>haring for{" "}
          <b style={{ fontSize: "40px" }}>E</b>cosystem for Healthcare
        </p>
        <p>
          is Software Solution which orchestrate <b>Personalized Healthcare </b>
          or <b>Precision Medicine</b> across Healthcare Industry Ecosystem. It
          solve the biggest pain points of Healthcare Industry specially focused
          on Indian Healthcare Ecosystem.
          <b>The biggest 2 challenges Indian Healthcare Industry faces are</b>
          <ul>
            <li>
              <b>1. Out of Pocket Healthcare Expenditure.</b>
            </li>
            <li>
              <b>
                2. Quality Healthcare Aceess / Pretty Uncommon not having access
                at all.
              </b>
            </li>
          </ul>
        </p>
        <h3>
          {" "}
          <b>Why is this so ?</b>
        </h3>
        <p>
          Let's discuss first problem, first. why we have to pay-out-of-pocket.
          is because of lack of financial planning, education, income or
          something else much more bigger than these? My opinionated answer is
          these factor have significat contribution but these all are secondary
          to problem. One reason is that spending on Healthcare is always
          unpredicatbe. You can't even estimate the upper and lower limit of
          your Healthcare spending. This spending doesn't comes with choice
          whether we spend or not. This unpridictability ruines millions of
          families per day basis, takes them down generations behind, some time
          it makes situation so severe families strugle to feed themselves. This
          seems extreme but it's not common countries like India. <hr></hr> So
          what can we do to slove? now let's see When I talking about the
          predicatability one thing comes our mind is that Can AI
          pridict/estimate our monthy/yearly spending on Healthcare. My answer
          is conflicting somewhat AI may or may not able to pridict. Eventhough
          AI managed to pridict the monthy/Yearly expediture on Healthcare of
          whole family or specific Individual. who will pay the bills ?. In
          India 60% population lives in rural area and have lower income but
          same time the Healthcare is very expensive due to high Competition and
          deficit in Healthcare professionals, large population ....and so on.
          <h3>
            {" "}
            <b>Now, the Real Problem start here!</b>
          </h3>
          We need Solution which gives access to funds(financial Aid) within
          justifiable duration in the circumstances where you need to pay Out of
          Pocket. <b>Do we need to invent the Wheel for this? </b>. the answer
          is Big No. Acuatally Solution is already there in the system but
          because of some severe challenges people can't see and access it. some
          who able to see but can't use it whenever the need because of rigid,
          rough, long and unpridictable nature of system and loose thier trust
          on the system start bad mouthing the system.
          <br></br>
          <b>
            So what the exiting Solution How we make usable and mitigate the
            challenges?
          </b>
          <br></br>
          Answer is <h3><b>Health Insurnace(either Private/Goverment Sponsored)</b></h3>
          but what .. wh.. what Health Insurnace 🤔. I can understand your emotions 😊. Let me
          make my point. To do so allow me to give you quick 64000 fit picture of Healthcare Industry and it's 
          actors. Each actor have to maximize profit and fight for Competition. Each actor incentivize 
          other to fight for Competition and maximize profit. These market forces create tension between
          patient and other actors. Let's visualize-
          

        </p>
        <img src={HealthcareOverview} alt="Healthcare industry Overview"/>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
