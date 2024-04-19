import "react";
import homeImg from "../../../assets/images/uploads/home.jpg";
import homeProfile from "../../../assets/images/uploads/people_01.jpg";

function HeroSection() {

  return (
    <section className="section lb lpad">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <div className="award-image entry">
              <a href="single-site.html" title="">
                <img src={homeImg} alt="" className="img-responsive" />
                <div className="magnifier">
                  <div className="magni-desc">
                    <h4>Site of the Day</h4>
                    <p>November 21, 2016</p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-md-5">
            <div className="award-details awards-wrapper">
              <div className="site-publisher clearfix">
                <div className="corner-ribbon top-right">
                  <a href="#">
                    <i className="flaticon-heart"></i>
                  </a>
                </div>
                <img
                  src={homeProfile}
                  alt=""
                  className="img-responsive img-circle"
                />
                <a href="single-agency.html" title="">
                  <h4>
                    SMFB <small>from</small> <span>U.S.A</span>
                  </h4>
                </a>
                <small>Web Agency INC.</small>
              </div>

              <div className="site-progress clearfix">
                <div className="site-desc clearfix">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="site-vote">
                        <p>
                          Design <small>60%</small>
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="site-vote">
                        <p>
                          Creativity <small>78%</small>
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="site-vote">
                        <p>
                          Usability <small>80%</small>
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="site-vote">
                        <p>
                          Content <small>65%</small>
                        </p>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="site-vote skore">
                        <p>
                          Total Score <small>70%</small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="site-publisher clearfix">
                <a href="#" title="">
                  <h4>
                    Diadora &nbsp;&nbsp;<small>Visit site</small>
                  </h4>
                </a>
                <p>
                  Diadora is a launch pad for tech startups. Focused on helping
                  with office space, funding and networking.
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr className="invis" />
        
      </div>
    </section>
  );
}

export default HeroSection;
