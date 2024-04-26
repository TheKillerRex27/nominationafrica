import "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";
import PieChart from "../../components/PieChart";
import LineChart from "../../components/LineChart";
import Timeline from "../../components/Timeline";
import List from "../../components/List";
import ImageCard from "../../components/ImageCard";
import img1 from "../../assets/images/products/s4.jpg";
import img2 from "../../assets/images/products/s5.jpg";
import img3 from "../../assets/images/products/s7.jpg";
import img4 from "../../assets/images/products/s11.jpg";

//* Timeline Data
const timelineData = [
  {
    time: "09:30 am | Wed",
    description: "This award is not properly formatted",
    link: "Award Link",
    linkText: "link",
  },
  {
    time: "10:00 am | Wed",
    description: "This nominee is not qualified",
    link: "Nominee",
    linkText: "link",
  },
  {
    time: "02:00 pm | Wed",
    description: "This nominee behaved improperly recently",
    link: "Nominee",
    linkText: "link",
  },
  {
    time: "05:30 pm | Wed",
    description: "This award is not appropriate",
    link: "Award Link",
    linkText: "link",
  },
  {
    time: "09:30 am | Thurs",
    description: "I don't appreciate this award",
    link: "Award Link",
    linkText: "link",
  },
  {
    time: "12:00 pm | Thurs",
    description: "This Nominee tried to solicit me",
    link: "Nominee Link",
    linkText: "link",
  },
];

//* Bar Chart Data
const nominationData = [
  {
    name: "Number of Nominations",
    data: [100, 150, 200, 250, 300, 350, 400],
  },
  {
    name: "Number of Approved Nominations",
    data: [80, 120, 150, 180, 220, 260, 300],
  },
];

const categories = [
  "October",
  "November",
  "December",
  "January",
  "February",
  "March",
  "April",
];

//* List Data
const listCategories = ["Id", "Nominee", "Award", "Status"];

const items = [
  {
    id: 1,
    assigned: "Sunil Joshi",
    name: "Elite Admin",
    career: "Web Developer",
    priority: "Accepted",
  },
  {
    id: 2,
    assigned: "Andrew McDownland",
    name: "Real Homes WP Theme",
    career: "Web Developer",
    priority: "Rejected",
  },
  {
    id: 3,
    assigned: "Christopher Jamil",
    name: "MedicalPro WP Theme",
    career: "Web Developer",
    priority: "Rejected",
  },
  {
    id: 4,
    assigned: "Nirav Joshi",
    name: "Hosting Press HTML",
    career: "Web Developer",
    priority: "Rejected",
  },
];

function SuperAdmin() {
  return (
    <div>
      <div
        className="page-wrapper"
        id="main-wrapper"
        data-layout="vertical"
        data-navbarbg="skin6"
        data-sidebartype="full"
        data-sidebar-position="fixed"
        data-header-position="fixed"
      >
        <Sidebar />
        <div className="body-wrapper">
          <Header />
          <div className="container-fluid">
            <div className="row">
              <BarChart
                data={nominationData}
                categories={categories}
                title="Nominations Overview"
              />
              <div className="col-lg-4">
                <div className="row">
                  <PieChart
                    cardTitle="Approved Nominations"
                    nominations={400}
                    data={[350, 400]}
                    label={["April", "March"]}
                  />
                  <LineChart
                    cardTitle="Weekly Visitors"
                    visitors={2500}
                    data={[339, 337, 301, 421, 224, 398, 480]}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 d-flex align-items-stretch">
                <Timeline cardTitle="Recent Reports" data={timelineData} />
              </div>
              <div className="col-lg-8 d-flex align-items-stretch">
                <List
                  title="Recent Nominee Applications"
                  items={items}
                  categories={listCategories}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 col-xl-3">
                <ImageCard img={img1} name="Boat Headphone" price="$50" />
              </div>
              <div className="col-sm-6 col-xl-3">
                <ImageCard img={img2} name="MacBook Air Pro" price="$650" />
              </div>
              <div className="col-sm-6 col-xl-3">
                <ImageCard img={img3} name="Red Valvet Dress" price="$150" />
              </div>
              <div className="col-sm-6 col-xl-3">
                <ImageCard img={img4} name="Cute Soft Teddybear" price="$285" />
              </div>
            </div>
            <div className="py-6 px-6 text-center">
              <p className="mb-0 fs-4">
                Design and Developed by{" "}
                <a
                  href="https://adminmart.com/"
                  target="_blank"
                  className="pe-1 text-primary text-decoration-underline"
                >
                  AdminMart.com
                </a>{" "}
                Distributed by <a href="https://themewagon.com">ThemeWagon</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuperAdmin;
