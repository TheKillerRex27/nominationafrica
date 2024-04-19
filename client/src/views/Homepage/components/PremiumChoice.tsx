import "react";
import award1 from "../../../assets/images/uploads/award_02.jpg";
import award2 from "../../../assets/images/uploads/award_03.jpg";
import award3 from "../../../assets/images/uploads/award_13.jpg";
import award4 from "../../../assets/images/uploads/award_05.jpg";


function PremiumChoice() {
  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="text-widget">
              <h3 className="small-title">
                Chosen by the best judges in the world
              </h3>
              <p>
                Each selected by one skilled in their profession, examples of
                the world's most beautiful websites.
              </p>
              <p>
                You can submit your website at "<mark>Awards</mark>" and get a
                chance to attract hundreds of hourly unique visitors around the
                world, which includes web designers, app developers and superb
                agencies.
              </p>
            </div>
          </div>

          <div className="col-md-7">
            <div className="editor-picks">
              <div className="row">
                <div
                  className="col-md-6 wow fadeIn"
                  data-wow-duration="1s"
                  data-wow-delay="0.2s"
                >
                  <div className="award-image entry">
                    <a href="single-site.html" title="">
                      <img
                        src={award1}
                        alt=""
                        className="img-responsive"
                      />
                      <div className="magnifier">
                        <div className="magni-desc">
                          <h4>Susa Ventures</h4>
                          <p>By: Dave Soderberg</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

                <div
                  className="col-md-6 wow fadeIn"
                  data-wow-duration="1s"
                  data-wow-delay="0.4s"
                >
                  <div className="award-image entry">
                    <a href="single-site.html" title="">
                      <img
                        src={award2}
                        alt=""
                        className="img-responsive"
                      />
                      <div className="magnifier">
                        <div className="magni-desc">
                          <h4>Measponte</h4>
                          <p>By: Awd Agency</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

                <div
                  className="col-md-6 wow fadeIn"
                  data-wow-duration="1s"
                  data-wow-delay="0.6s"
                >
                  <div className="award-image entry">
                    <a href="single-site.html" title="">
                      <img
                        src={award3}
                        alt=""
                        className="img-responsive"
                      />
                      <div className="magnifier">
                        <div className="magni-desc">
                          <h4>AIGA Design Conference</h4>
                          <p>By: W&CO</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

                <div
                  className="col-md-6 wow fadeIn"
                  data-wow-duration="1s"
                  data-wow-delay="0.8s"
                >
                  <div className="award-image entry">
                    <a href="single-site.html" title="">
                      <img
                        src={award4}
                        alt=""
                        className="img-responsive"
                      />
                      <div className="magnifier">
                        <div className="magni-desc">
                          <h4>Fay</h4>
                          <p>By: Bordel Studio</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PremiumChoice;
