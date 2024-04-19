import "react";
import nomineeImage1 from "../../../assets/images/uploads/award_08.jpg";
import nomineeImage2 from "../../../assets/images/uploads/award_09.jpg";
import nomineeImage3 from "../../../assets/images/uploads/award_10.jpg";
import nomineeImage4 from "../../../assets/images/uploads/award_11.jpg";
import nomineeImage5 from "../../../assets/images/uploads/award_12.jpg";
import nomineeImage6 from "../../../assets/images/uploads/award_13.jpg";
import nomineeImage7 from "../../../assets/images/uploads/award_01.jpg";
import nomineeImage8 from "../../../assets/images/uploads/award_02.jpg";
import nomineeImage9 from "../../../assets/images/uploads/award_03.jpg";
import nomineeImage10 from "../../../assets/images/uploads/award_04.jpg";
import nomineeImage11 from "../../../assets/images/uploads/award_06.jpg";
import nomineeImage12 from "../../../assets/images/uploads/award_07.jpg";
import Pagination from "../../../components/Pagination";
import SearchResults from "../../../components/SearchResults";

const nomineesData = [
  {
    image: nomineeImage1,
    title: "Pharrell Williams",
    author: "Five Hundred",
    authorLink: "single-agency.html",
    likes: 86,
    delay: "0.1s",
  },
  {
    image: nomineeImage2,
    title: "Papazian Jewelry",
    author: "Kommigraphics Design",
    authorLink: "single-agency.html",
    likes: 41,
    delay: "0.2s",
  },
  {
    image: nomineeImage3,
    title: "Sourdoreille",
    author: "FCINQ",
    authorLink: "single-agency.html",
    likes: 772,
    delay: "0.3s",
  },
  {
    image: nomineeImage4,
    title: "Bundy Bundy",
    author: "WILD",
    authorLink: "single-agency.html",
    likes: 245,
    delay: "0.4s",
  },
  {
    image: nomineeImage5,
    title: "Quechua Lookbook",
    author: "Akaru",
    authorLink: "single-agency.html",
    likes: 111,
    delay: "0.5s",
  },
  {
    image: nomineeImage6,
    title: "Diadora",
    author: "SMFB",
    authorLink: "single-agency.html",
    likes: 46,
    delay: "0.6s",
  },
  {
    image: nomineeImage7,
    title: "StartupLab",
    author: "StartupLab",
    authorLink: "single-agency.html",
    likes: 331,
    delay: "0.1s",
  },
  {
    image: nomineeImage8,
    title: "Susa Ventures",
    author: "Dave Soderberg",
    authorLink: "single-agency.html",
    likes: 167,
    delay: "0.2s",
  },
  {
    image: nomineeImage9,
    title: "Measponte",
    author: "Awd Agency",
    authorLink: "single-agency.html",
    likes: 667,
    delay: "0.3s",
  },
  {
    image: nomineeImage10,
    title: "AIGA Design",
    author: "W&CO",
    authorLink: "single-agency.html",
    likes: 761,
    delay: "0.4s",
  },
  {
    image: nomineeImage11,
    title: "Locomotive",
    author: "Locomotive",
    authorLink: "single-agency.html",
    likes: 125,
    delay: "0.5s",
  },
  {
    image: nomineeImage12,
    title: "Serio Verify",
    author: "Umwelt A/S",
    authorLink: "single-agency.html",
    likes: 331,
    delay: "0.6s",
  },
];

function NomineesList() {
  return (
    <div className="section lb">
      <div className="container">
        <SearchResults data={nomineesData} />
        <Pagination currentPage={1} totalPages={9} />
      </div>
    </div>
  );
}

export default NomineesList;
