import "react";
import parallaxImg from "../../../assets/images/uploads/parallax_01.jpg"
import logo from "../../../assets/images/uploads/logo.png";

function SubscriptionCall() {
  return (
    <div
      className="parallax section"
      data-stellar-background-ratio="0.5"
      style={{
        backgroundImage: `url(${parallaxImg})`,
      }}
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-10 col-md-offset-1 text-center">
            <div className="section-title">
              <img src={logo} alt="" />
              <h3 className="small-title">Web Design Inspiration Gallery </h3>
              <p>
                Browse Web Design Inspiration and subscribe to receive
                inspiration to your inbox.
              </p>

              <form className="form-inline newsletterform" method="post">
                <div className="input-group form-group">
                  <input
                    type="text"
                    name="email"
                    placeholder="Enter your email address"
                    required
                    className="form-control"
                  />
                </div>
                <input
                  type="submit"
                  value="Subscribe"
                  className="btn btn-primary"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubscriptionCall;
