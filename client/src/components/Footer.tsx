import "react";

function Footer() {
  return (
    <>
      <div className="footer section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="text-widget">
                <h4>Submit Your Site</h4>
                <p>
                  You can submit your website at "Awards" and get a chance to
                  attract hundreds of hourly unique visitors around the world,
                  which includes web designers, app developers and superb
                  agencies.
                </p>
              </div>
            </div>

            <div className="col-md-2 col-sm-2 col-xs-12">
              <ul className="list-unstyled">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="awards.html">Awards</a>
                </li>
                <li>
                  <a href="nominees.html">Nominees</a>
                </li>
                <li>
                  <a href="agencies.html">Agencies</a>
                </li>
                <li>
                  <a href="https://similaricons.com/demos/awards/themes.html">
                    Themes
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-2 col-sm-2 col-xs-12">
              <ul className="list-unstyled">
                <li>
                  <a href="page.html">Page Template</a>
                </li>
                <li>
                  <a href="404.html">Not Found (404)</a>
                </li>
                <li>
                  <a href="archives.html">Archives</a>
                </li>
                <li>
                  <a href="contact.html">Contact Us</a>
                </li>
                <li>
                  <a href="terms.html">Terms of Usage</a>
                </li>
              </ul>
            </div>

            <div className="col-md-2 col-sm-2 col-xs-12">
              <ul className="list-unstyled">
                <li>
                  <a href="#">2016 - 2017 Judgets</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms of Usage</a>
                </li>
                <li>
                  <a href="#">About & Contact</a>
                </li>
                <li>
                  <a href="#">Pricing & Plans</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="copyrights">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <img
                src="assets/images/flogo.png"
                alt=""
                className="img-responsive"
              />
              <p>
                2010 - 2017 &copy;Awards Graphic Design Solutions INC. All
                rights reserved.
              </p>
              <ul className="list-inline">
                <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a href="#">Google+</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
