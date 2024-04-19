import "react";
import { Link } from "react-router-dom";

interface PageHeaderProps {
  pageTitle: string,
  pageDesc: string,
  pageCrumb: string,
}

function PageHeader({ pageTitle, pageDesc, pageCrumb }: PageHeaderProps) {
  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center">
            <div className="section-title page-title">
              <h3 className="small-title">{pageTitle}</h3>
              <p>{pageDesc}</p>
              <ul className="breadcrumb">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li className="active">{pageCrumb}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageHeader;
