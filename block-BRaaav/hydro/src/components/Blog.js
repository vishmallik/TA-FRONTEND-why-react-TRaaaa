import Article1 from "./Article1";
import Article2 from "./Article2";
import Article3 from "./Article3";
import Article4 from "./Article4";

function Blog() {
  return (
    <section className="blog padding">
      <div className="container">
        <header className="sec-header text-center">
          <h2 className="heading">Our Blog</h2>
          <div className="dot-wrapper">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </header>
        <div className="flex wrap">
          <Article1 />
          <Article2 />
          <Article3 />
          <Article4 />
        </div>
      </div>
    </section>
  );
}

export default Blog;
