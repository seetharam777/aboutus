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
            <li>Email: mailto:connect@anarghyacomm.in</li>
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
  