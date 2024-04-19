import "react";
import BlogNav from "../../components/BlogNav";
import blogImage1 from "../../assets/images/uploads/blog_01.jpg";
import blogImage2 from "../../assets/images/uploads/blog_02.jpg";
import blogImage3 from "../../assets/images/uploads/blog_03.jpg";
import blogImage4 from "../../assets/images/uploads/blog_04.jpg";

function Blog() {
  const blogPosts = [
    {
      category: "Tips & Tricks",
      title: "How to Hire Icon Designer for Your Next Project",
      date: "6 hours ago",
      author: "Awards Team",
      description:
        "You can get all the icon versions by checking out our standard license that come with every free icons.",
      image: blogImage1,
    },
    {
      category: "Tips & Tricks",
      title: "How to choose best color schemes for your web projects",
      date: "2 days ago",
      author: "Awards Team",
      description:
        "If you don't know how to choose best color combinations for your web or graphic designs projects, right place here.",
      image: blogImage2,
    },
    {
      category: "Tips & Tricks",
      title: "Learn more about beautiful furniture web design combinations",
      date: "4 days ago",
      author: "Awards Team",
      description:
        "Today we will teach you how to find professional materials for your furniture website design.",
      image: blogImage3,
    },
    {
      category: "Tips & Tricks",
      title:
        "Don't know where to start? Be relax, we are here to showcase you custom colors.",
      date: "4 days ago",
      author: "Awards Team",
      description:
        "Colors are very important for web design. Read this article to build your own combinations.",
      image: blogImage4,
    },
  ];

  return (
    <>
      <div className="section lb">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              {blogPosts.map((post, index) => (
                <div className="content blog-list" key={index}>
                  <div className="blog-wrapper clearfix">
                    <div className="blog-meta">
                      <small>
                        <a href="#">{post.category}</a>
                      </small>
                      <h3>
                        <a href="single-blog.html" title="">
                          {post.title}
                        </a>
                      </h3>
                      <ul className="list-inline">
                        <li>{post.date}</li>
                        <li>
                          <span>written by</span> <a href="#">{post.author}</a>
                        </li>
                      </ul>
                    </div>

                    <div className="blog-media">
                      <a href="single-blog.html" title="">
                        <img
                          src={post.image}
                          alt=""
                          className="img-responsive"
                        />
                      </a>
                    </div>

                    <div className="blog-desc">
                      <p className="lead">{post.description}</p>
                      <p>
                        Curabitur ut eros orci. Mauris non egestas sem. Fusce
                        mattis tortor sit amet blandit sodales. Nam finibus
                        faucibus ante ut pulvinar. Pellentesque vitae sagittis
                        dolor. Mauris auctor risus eu eros ornare, in
                        pellentesque purus elementum. Etiam efficitur tempor
                        justo. Nullam vel ante sapien.
                      </p>
                      <a href="single-blog.html" className="btn btn-primary">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              ))}
              <div className="row">
                <div className="col-md-12">
                  <ul className="pagination">
                    <li className="disabled">
                      <a href="javascript:void(0)">&laquo;</a>
                    </li>
                    <li className="active">
                      <a href="javascript:void(0)">1</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">2</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">3</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">...</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">&raquo;</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <BlogNav />
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
