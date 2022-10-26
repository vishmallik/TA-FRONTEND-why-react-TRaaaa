function Article1() {
  return (
    <article className="flex article flex-48">
      <div className="flex-40 font-0">
        <img
          className="flexible-img"
          src="/media/blog-image3.jpg"
          alt="Blog 1"
        />
      </div>

      <div className="flex-60 article-content">
        <time dateTime="">
          <i className="far fa-clock"></i>
          December 14, 2017
        </time>
        <h3>New creative fashion</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        <a className="btn btn-tertiary" href="/#">
          Read Article
        </a>
      </div>
    </article>
  );
}
export default Article1;
