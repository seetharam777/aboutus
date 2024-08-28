


import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./AboutUs.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.css";


  


const Services = () => {
  return (
    <section
      class="services-area"
      id="services"
      style={{ width: "100%", padding: "5%" }}
    >
      <h3 class="section-title">
        Our <span>Services</span>
      </h3>

      <div style={{ width: "120%", padding: "5%" }}>
        <div class="d-flex flex-row justify-content-center">
          <div class="card">
            <img
              src="https://img.freepik.com/free-photo/close-up-priest-reading-form-bible_23-2149284633.jpg?w=900&t=st=1708081249~exp=1708081849~hmac=45d897858fac342242be5c3cbc1f2dcaa863aec553802aef167323ae8c8277d4"
              alt="Image"
              class="card__image"
            />

            <div class="card__content">
              <p class="card__title">Sevices</p>
              <p class="card__description">
                Experience uplifting worship, inspiring sermons, and a welcoming
                community at our church services. Join us in faith and
                fellowship.
              </p>
              <button>
                <a className="Servicesbtn" href="/Loginpage">
                  Click Here
                </a>
              </button>
            </div>
          </div>
          <div class="card" style={{ marginLeft: "1%" }}>
            <img
              src="https://img.freepik.com/premium-photo/silhouettes-concert-crowd-front-bright-stage-lights-concert-abstract-rock-band_489646-10331.jpg?"
              alt="Image"
              class="card__image"
            />

            <div class="card__content">
              <p class="card__title">Events</p>
              <p class="card__description">
                "Discover enriching spiritual growth through engaging events,
                workshops, and fellowships at our vibrant church community."
              </p>
              <button>
                <a className="Servicesbtn" href="/Loginpage">
                  Click Here
                </a>
              </button>
            </div>
          </div>

          <div class="card" style={{ marginLeft: "1%" }}>
            <img
              src="https://img.freepik.com/free-photo/world-habitat-day-close-up-picture-pile-coins-sag-coin_1150-26739.jpg?t=st=1709024432~exp=1709028032~hmac=a114ef022acb4d81650f60249023726a01cf7e19a6f4701840be35820a3423d0&w=900"
              alt="Image"
              class="card__image"
            />

            <div class="card__content">
              <p class="card__title">Donatation</p>
              <p class="card__description">
                "Support our mission and help us make a positive impact on the
                world through your generous donations to our church community."
              </p>
              <button>
                <a className="Servicesbtn" href="/Loginpage">
                  Click Here
                </a>
              </button>
            </div>
          </div>

          <div class="card" style={{ marginLeft: "1%" }}>
            <img
              src="https://img.freepik.com/free-photo/medium-shot-young-pastor-preaching-church_23-2149366616.jpg?size=626&ext=jpg&ga=GA1.1.1490289597.1697878235&semt=ais"
              alt="Image"
              class="card__image"
            />

            <div class="card__content">
              <p class="card__title">Teaching</p>
              <p class="card__description">
                "Enhance faith with insightful teachings from our experienced
                church leaders. Deepen scriptural understanding."
              </p>
              <button>
                <a className="Servicesbtn" href="/Loginpage">
                  Click Here
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        class="d-flex flex-row justify-content-center"
        style={{ width: "120%" }}
      >
        <div class="card" style={{ marginLeft: "1%" }}>
          <img
            src="https://img.freepik.com/premium-photo/church-worship-concept-christian-worship-front-cross_191555-2283.jpg?w=900"
            alt="Image"
            class="card__image"
          />

          <div class="card__content">
            <p class="card__title">SundayServices</p>
            <p class="card__description">
              "Support our mission and help us make a positive impact on the
              world through your generous donations to our church community."
            </p>
            <button>
              <a className="Servicesbtn" href="/Loginpage">
                Click Here
              </a>
            </button>
          </div>
        </div>
        <div class="card" style={{ marginLeft: "1%" }}>
          <img
            src="https://img.freepik.com/free-photo/friendly-partners-handshaking-group-meeting-thanking-successful-teamwork_1163-4691.jpg?"
            alt="Image"
            class="card__image"
          />

          <div class="card__content">
            <p class="card__title">Appointment</p>
            <p class="card__description">
              "Schedule appointments for counseling, pastoral care, or spiritual
              guidance with our dedicated church leaders to support your
              personal journey"
            </p>
            <button>
              <a className="Servicesbtn" href="/Loginpage">
                Click Here
              </a>
            </button>
          </div>
        </div>

        <div class="card" style={{ marginLeft: "1%" }}>
          <img
            src="https://img.freepik.com/free-photo/christian-life-crisis-prayer-god_1150-12941.jpg?t=st=1709026074~exp=1709029674~hmac=a1195a1d89270c866dbb96fc81e9f168f5473212096cff07f464c001e9a86264&w=900"
            alt="Image"
            class="card__image"
          />

          <div class="card__content">
            <p class="card__title">Special Prayer</p>
            <p class="card__description">
              Join us for special prayer services to seek divine intervention,
              offer gratitude, and connect with our community in times of need
            </p>
            <button>
              <a className="Servicesbtn" href="/Loginpage">
                Click Here
              </a>
            </button>
          </div>
        </div>

        <div class="card" style={{ marginLeft: "1%" }}>
          <img
            src="https://img.freepik.com/premium-photo/what-where-how-when-wooden-signpost-with-four-arrows-sunset-sky-background_764664-21617.jpg?"
            alt="Image"
            class="card__image"
          />

          <div class="card__content">
            <p class="card__title">For Other Reason</p>
            <p class="card__description">
              Engage in a wide array of additional activities and resources
              tailored to meet the needs and interests of our diverse church
              family
            </p>
            <button>
              <a className="Servicesbtn" href="/Loginpage">
                Click Here
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Events = () => {
  return (
    <section className="marquee-section">
      <h3 class="section-title">
        Our <span>Events</span>
      </h3>
      <marquee direction="left" scrollamount="3">
        <img
          style={{ height: "450px", width: "800px" }}
          src="https://img.freepik.com/free-photo/musical-instruments-party_1303-19148.jpg?t=st=1709115520~exp=1709119120~hmac=81175175e81286911150dcb274e6c2d988df3166bc9ec7c131c6b726edb1d67b&w=900"
          alt="Image 1"
        />
        <img
          style={{ height: "450px", width: "800px" }}
          src="https://img.freepik.com/free-photo/people-having-fun-wedding-hall_1303-19593.jpg?w=900"
          alt="Image 2"
        />
        <img
          style={{ height: "450px", width: "800px" }}
          src="https://img.freepik.com/premium-photo/silhouettes-concert-crowd-front-bright-stage-lights-concert-abstract-rock-band_489646-10331.jpg?w=900"
          alt="Image 3"
        />
        <img
          style={{ height: "450px", width: "800px" }}
          src="https://img.freepik.com/free-photo/glowing-stage-light-illuminates-cheering-rock-fans-generated-by-ai_188544-37983.jpg?w=900"
          alt="Image 3"
        />
        <img
          style={{ height: "450px", width: "800px" }}
          src="https://img.freepik.com/free-photo/modern-player-live-streaming-video-games-play-computer-having-fun-with-rpg-tournament-young-adult-playing-online-action-shooting-game-with-multiple-players-pc-shooter-challenge_482257-47448.jpg?t=st=1709115979~exp=1709119579~hmac=baa293b8a1c3068fe61c22a2b2e5522f6a5e0671e37e529efbb239f9c13450f6&w=900
"
          alt="Image 3"
        />
        <img
          style={{ height: "450px", width: "800px" }}
          src="https://img.freepik.com/free-photo/rear-view-excited-people-with-arms-raised-having-fun-while-watching-confetti-fireworks-front-stage-music-festival-copy-space_637285-568.jpg?w=900"
          alt="Image 3"
        />
      </marquee>
    </section>
  );
};

const Message = () => {
  return (
    <section className="msg-area">
      <div className="msg-content">
        <h2>OUR MISSION</h2>
        <p>
          LIVE intentionally to share His LOVE and connect new people to Christ
          with LASTING memories.
        </p>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section class="about-area" id="about">
      <h3 class="section-title">
        About <span>Us</span>
      </h3>
      <ul class="about-content">
        <li class="about-left"></li>
        <li class="about-right">
          <h2>We love Christ, His people, and life.</h2>
          <p>
            churches serve as spiritual, social, and cultural centers that bring
            together individuals and families to worship, learn, serve, and grow
            in their faith. They play a vital role in shaping the religious
            identity of communities and fostering a sense of belonging and
            interconnectedness among believers.
          </p>
          <p>
            <i class="bi bi-arrow-right-short"></i>
            Our church community is a vibrant assembly of believers united by a
            shared faith in Jesus
          </p>
          <p>
            <i class="bi bi-arrow-right-short"></i>
            Our spiritual community is a vibrant assembly of seekers, connected
            by a shared commitment to Jesus Christ.
          </p>
          <p>
            <i class="bi bi-arrow-right-short"></i>
            Our church congregation is a lively gathering of faithful
            individuals, bound together by a common devotion to Jesus.
          </p>
          <p>
            <i class="bi bi-arrow-right-short"></i>
            Our dynamic church family gathers believers in faith, joining in
            worship and spiritual growth as one in the grace of Jesus
          </p>
        </li>
      </ul>
    </section>
  );
};

const Contact = () => {
  return (
    <section class="contact-area" id="contact">
      <h3 class="section-title">
        Our <span>Contact</span>
      </h3>
      <ul class="contact-content">
        <li>
          <i class="bi bi-geo-fill"></i>
          <p>Bangalore South Bangalore, Karnataka - 560066, India.</p>
        </li>
        <li>
          <i class="bi bi-telephone-fill"></i>
          <p>+91-8046872401</p>
        </li>
        <li>
          <i class="bi bi-envelope-at-fill"></i>
          <p>info@anarghyacomm.in</p>
        </li>
      </ul>
      <ul class="contact-content">
        <li>
          <i class="bi bi-geo-fill"></i>
          <p>Madhapur, Hyderabad, Telangana – 500081, India.</p>
        </li>
        <li>
          <i class="bi bi-telephone-fill"></i>
          <p>+91-9121179395</p>
        </li>
        <li>
          <i class="bi bi-envelope-at-fill"></i>
          <p>Connect@anarghyacomm.in</p>
        </li>
      </ul>
      <ul class="contact-content">
        <li>
          <i class="bi bi-geo-fill"></i>
          <p>JubileeHills, Hyderabad, Telangana - 500033, India.</p>
        </li>
        <li>
          <i class="bi bi-telephone-fill"></i>
          <p>+91-04067932204</p>
        </li>
        <li>
          <i class="bi bi-envelope-at-fill"></i>
          <p>Team@anarghyacomm.in</p>
        </li>
      </ul>
    </section>
  );
};
const Footer = () => {
  return (

    <footer>
      <a href="/">
        <img
          className="footerlogoimage"
          alt=""
          src="https://static.vecteezy.com/system/resources/thumbnails/007/968/319/small/golden-sun-sunset-sunrise-with-jesus-christian-cross-for-church-chapel-logo-design-vector.jpg"
        />
      </a>
      <p className="churchheading">Church Name</p>

      <div className="FooterHeading">
        <p
          style={{
            fontSize: "larger",
            fontFamily: "initial",
            fontWeight: "600",
          }}
        >
          Home Links
        </p>
        <ul className="Unorderlist">
          <li>Home</li>
          <li>Services</li>
          <li>Events</li>
          <li>Donations</li>
          <li>Media</li>
        </ul>
      </div>

      <div className="Footerserviceheading">
        <p
          style={{
            fontSize: "larger",
            fontFamily: "initial",
            fontWeight: "600",
          }}
        >
          Services
        </p>
        <ul className="Unorder">
          <li>SpecialPrayer</li>
          <li>Baptism</li>
          <li>HomeVisit</li>
          <li>Burial</li>
          <li>OtherReasons</li>
        </ul>
      </div>

      <div className="Footeraddressheading">
        <p
          style={{
            fontSize: "larger",
            fontFamily: "initial",
            fontWeight: "600",
          }}
        >
          {" "}
          Address
        </p>
        <ul className="list">
          <li>Email: Connect@anarghyacomm.in</li>
          <li>Mobile: +91-9121179395</li>
          <li>
            Landmark: Jubilee Hills, Hyderabad,
            <br />
            Telangana - 500033, India.
          </li>
        </ul>
      </div>

      <div style={{ float: "right", width: "50%", height: "300px" }}>
        <iframe
          width="50%"
          height="150%"
          frameborder="0"
          style={{
            border: 0,
            marginLeft: "145%",
            marginTop: "-16%",
            height: "200%",
          }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.067416065969!2d78.41313361487563!3d17.425321405588106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9974e9db267b%3A0xe2a6403a94ecad68!2sJubilee%20Hills%2C%20Hyderabad%2C%20Telangana%20500033%2C%20India!5e0!3m2!1sen!2suk!4v1648970658379!5m2!1sen!2suk"
          allowfullscreen
        ></iframe>
      </div>
    </footer>
  );
};

const ChurchWebsite = () => {
  return (
    <div>
     
      <Services />

      <Events />
      <Message />

      <About />
      <Contact />
      <Footer />
      
    </div>
  );
};

export default ChurchWebsite;


