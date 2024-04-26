import 'react'

interface Award {
  image: string;
  title: string;
  author: string;
  authorLink: string;
  likes: number;
  delay?: string;
}

interface SearchResultsProps {
  data: Award[];
}


function SearchItem({ award }: { award: Award }) {
  return (
    <div className="col-md-4 col-sm-6 wow fadeIn" data-wow-duration="1s" data-wow-delay={award.delay}>
      <div className="site-wrapper">
        <div className="award-image entry">
          <a href="single-site.html" title="">
            <img src={award.image} alt="" className="img-responsive" />
          </a>
        </div>
        <div className="site-small-desc clearfix">
          <div className="pull-left">
            <a href="single-site.html" title="">
              <h4>{award.title}</h4>
            </a>
            <p>
              By:{" "}
              <a href={award.authorLink} title="">
                {award.author}
              </a>
            </p>
          </div>
          <div className="likebutton pull-right text-center">
            <a href="#">
              {award.likes}
              <br />
              <i className="flaticon-heart"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function SearchResults({ data }: SearchResultsProps) {
  return (
    <div className="row list-items">
      {data.map((award, index) => (
        <SearchItem key={index} award={award} />
      ))}
    </div>
  );
}

export default SearchResults