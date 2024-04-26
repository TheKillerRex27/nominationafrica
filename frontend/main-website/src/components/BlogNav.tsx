import "react";
import nomineeImage1 from '../assets/images/uploads/award_12.jpg';
import bannerImage from '../assets/images/uploads/banner.png';

// const optionStyle = {
//   borderLeft: "8px solid #fff",
//   borderRight: "8px solid #fff",
// };

// const colors = [
//   { value: "Maroon", background: "#800000", color: "#fff" },
//   { value: "Red", background: "#FF0000", color: "#fff" },
//   { value: "Orange", background: "#FFA500", color: "#fff" },
//   { value: "Yellow", background: "#FFFF00", color: "#212121" },
//   { value: "Olive", background: "#808000", color: "#fff" },
//   { value: "Green", background: "#008000", color: "#fff" },
//   { value: "Purple", background: "#800080", color: "#fff" },
//   { value: "Fuchsia", background: "#FF00FF", color: "#fff" },
//   { value: "Lime", background: "#00FF00", color: "#fff" },
//   { value: "Teal", background: "#008080", color: "#fff" },
//   { value: "Aqua", background: "#00FFFF", color: "#fff" },
//   { value: "Blue", background: "#0000FF", color: "#fff" },
//   { value: "Navy", background: "#000080", color: "#fff" },
//   { value: "Black", background: "#000000", color: "#fff" },
//   { value: "Gray", background: "#808080", color: "#212121" },
//   { value: "Silver", background: "#C0C0C0", color: "#212121" },
//   { value: "White", background: "#FFFFFF", color: "#212121" },
// ];

function BlogNav() {
  return (
    <div className="sidebar col-md-3">
      <div className="widget clearfix">
        <form className="newsletterform" method="post">
          <input
            type="text"
            name="email"
            placeholder="Site Search"
            required
            className="form-control"
          />
        </form>
      </div>

      <div className="widget clearfix">
        <div className="widget-title">
          <h4>Site of the Day</h4>
        </div>

        <div className="site-wrapper">
          <div className="award-image entry">
            <a href="single-site.html" title="">
              <img
                src={nomineeImage1}
                alt=""
                className="img-responsive"
              />
            </a>
          </div>

          <div className="site-small-desc clearfix">
            <div className="pull-left">
              <a href="single-site.html" title="">
                <h4>Lookbook</h4>
              </a>
              <p>
                By:{" "}
                <a href="single-agency.html" title="">
                  Lookbook
                </a>
              </p>
            </div>
            <div className="likebutton pull-right text-center">
              <a href="#">
                125
                <br />
                <i className="flaticon-heart"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="widget clearfix">
        <div className="widget-title">
          <h4>Search for Sites</h4>
        </div>

        <div className="search-top clearfix">
          <div className="row">
            <div className="col-sm-12">
              <div className="form-group">
                <select
                  className="selectpicker form-control"
                  data-size="8"
                  data-live-search="true"
                  multiple
                  title="Category"
                >
                  <option data-tokens="web">Web & Interactive</option>
                  <option data-tokens="mobile">Mobile Apps</option>
                  <option data-tokens="health">Health & Medical</option>
                  <option data-tokens="religion">Religion</option>
                  <option data-tokens="sports">Sports</option>
                  <option data-tokens="events">Events</option>
                  <option data-tokens="technology">Technology</option>
                  <option data-tokens="personal">Personal Blog</option>
                  <option data-tokens="education">Education</option>
                  <option data-tokens="garden">Garden</option>
                  <option data-tokens="barber">Barber</option>
                  <option data-tokens="food">Food Drink</option>
                  <option data-tokens="automotive">Automotive</option>
                </select>
              </div>

              <div className="form-group">
                <select
                  className="selectpicker form-control"
                  data-size="8"
                  data-live-search="true"
                  multiple
                  title="Tags"
                >
                  <option data-tokens="responsive">Responsive</option>
                  <option data-tokens="retina">Retina</option>
                  <option data-tokens="minimalist">Minimalist</option>
                  <option data-tokens="flat">Flat Design</option>
                  <option data-tokens="colorful">Colorful</option>
                  <option data-tokens="html5">HTML5</option>
                  <option data-tokens="smooth">Smooth Scroll</option>
                  <option data-tokens="commerce">e-Commerce</option>
                  <option data-tokens="social">Social Media</option>
                  <option data-tokens="icons">Icons</option>
                  <option data-tokens="texture">Texture</option>
                  <option data-tokens="font">Web Font</option>
                  <option data-tokens="retro">Retro</option>
                </select>
              </div>

              <div className="form-group">
                <select
                  className="selectpicker form-control"
                  data-size="8"
                  data-live-search="true"
                  multiple
                  title="Software"
                >
                  <option data-tokens="wordpress">WordPress</option>
                  <option data-tokens="joomla">Joomla</option>
                  <option data-tokens="drupal">Drupal</option>
                  <option data-tokens="magento">Magento</option>
                  <option data-tokens="opencart">OpenCart</option>
                  <option data-tokens="html5">HTML5</option>
                  <option data-tokens="asp">ASP.NET</option>
                  <option data-tokens="custom">Custom (PHP)</option>
                </select>
              </div>

              <div className="form-group">
                <select
                  className="selectpicker form-control"
                  data-size="8"
                  data-live-search="true"
                  multiple
                  title="Colors"
                >
                  {colors.map((color, index) => (
                    <option
                      key={index}
                      style={{
                        ...optionStyle,
                        background: color.background,
                        color: color.color,
                      }}
                    >
                      {color.value}
                    </option>
                  ))}
                </select>
              </div>

              <a href="#" className="btn btn-primary btn-block">
                SEACH
              </a>
            </div>
          </div>
        </div>
      </div> */}

      <div className="widget clearfix">
        <div className="widget-title">
          <h4>Browse by Tags</h4>
        </div>

        <ul className="list-inline cat_list">
          <li>
            <a href="#">Personal</a>
          </li>
          <li>
            <a href="#">SEO</a>
          </li>
          <li>
            <a href="#">Garden</a>
          </li>
          <li>
            <a href="#">Barber</a>
          </li>
          <li>
            <a href="#">Food Drink</a>
          </li>
          <li>
            <a href="#">Cars</a>
          </li>
          <li>
            <a href="#">Client</a>
          </li>
          <li>
            <a href="#">Award</a>
          </li>
          <li>
            <a href="#">Design</a>
          </li>
        </ul>
      </div>

      <div className="widget clearfix">
        <div className="site-wrapper">
          <div className="award-image entry">
            <a href="single-site.html" title="">
              <img
                src={bannerImage}
                alt=""
                className="img-responsive"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogNav;
