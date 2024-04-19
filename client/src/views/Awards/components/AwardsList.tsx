import 'react'
import awardImage1 from '../../../assets/images/uploads/award_01.jpg';
import awardImage2 from '../../../assets/images/uploads/award_02.jpg';
import awardImage3 from '../../../assets/images/uploads/award_03.jpg';
import awardImage4 from '../../../assets/images/uploads/award_04.jpg';
import awardImage5 from '../../../assets/images/uploads/award_06.jpg';
import awardImage6 from '../../../assets/images/uploads/award_07.jpg';
import awardImage7 from '../../../assets/images/uploads/award_08.jpg';
import awardImage8 from '../../../assets/images/uploads/award_09.jpg';
import awardImage9 from '../../../assets/images/uploads/award_10.jpg';
import awardImage10 from '../../../assets/images/uploads/award_11.jpg';
import awardImage11 from '../../../assets/images/uploads/award_12.jpg';
import awardImage12 from '../../../assets/images/uploads/award_13.jpg';
import Pagination from '../../../components/Pagination'
import SearchResults from '../../../components/SearchResults'

const awardsData = [
  {
    image: awardImage1,
    title: "StartupLab",
    author: "StartupLab",
    authorLink: "single-agency.html",
    likes: 331,
    delay: "0.1s"
  },
  {
    image: awardImage2,
    title: "Susa Ventures",
    author: "Dave Soderberg",
    authorLink: "single-agency.html",
    likes: 167,
    delay: "0.2s"
  },
  {
    image: awardImage3,
    title: "Measponte",
    author: "Awd Agency",
    authorLink: "single-agency.html",
    likes: 667,
    delay: "0.3s"
  },
  {
    image: awardImage4,
    title: "AIGA Design",
    author: "W&CO",
    authorLink: "single-agency.html",
    likes: 761,
    delay: "0.4s"
  },
  {
    image: awardImage5,
    title: "Locomotive",
    author: "Locomotive",
    authorLink: "single-agency.html",
    likes: 125,
    delay: "0.5s"
  },
  {
    image: awardImage6,
    title: "Serio Verify",
    author: "Umwelt A/S",
    authorLink: "single-agency.html",
    likes: 331,
    delay: "0.6s"
  },
  {
    image: awardImage7,
    title: "Pharrell Williams",
    author: "Five Hundred",
    authorLink: "single-agency.html",
    likes: 86,
    delay: "0.1s"
  },
  {
    image: awardImage8,
    title: "Papazian Jewelry",
    author: "Kommigraphics Design",
    authorLink: "single-agency.html",
    likes: 41,
    delay: "0.2s"
  },
  {
    image: awardImage9,
    title: "Sourdoreille",
    author: "FCINQ",
    authorLink: "single-agency.html",
    likes: 772,
    delay: "0.3s"
  },
  {
    image: awardImage10,
    title: "Bundy Bundy",
    author: "WILD",
    authorLink: "single-agency.html",
    likes: 245,
    delay: "0.4s"
  },
  {
    image: awardImage11,
    title: "Quechua Lookbook",
    author: "Akaru",
    authorLink: "single-agency.html",
    likes: 111,
    delay: "0.5s"
  },
  {
    image: awardImage12,
    title: "Diadora",
    author: "SMFB",
    authorLink: "single-agency.html",
    likes: 46,
    delay: "0.6s"
  },
];

function AwardsList() {
  return (
    <div className="section lb">
        <div className="container">
          <SearchResults data={awardsData} />
          <Pagination currentPage={1} totalPages={9} />
        </div>
      </div>
  )
}

export default AwardsList