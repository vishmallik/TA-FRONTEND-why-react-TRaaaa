import data from "../data";
function Articles() {
  return (
    <div className="flex articles container">
      {data.map((article) => (
        <Article {...article} />
      ))}
    </div>
  );
}

function Article(props) {
  return (
    <div className="article">
      <div className="img-parent">
        <img src={props.urlToImage} alt={props.title} />
      </div>
      <div className="text-parent">
        <h3>{props.title}</h3>
        <hr />
        <div className="author">
          <p>
            <i className="fas fa-user"></i>
            {props.author}
          </p>
          <p>
            <i className="fa-solid fa-clock"></i>
            {props.publishedAt.slice(0, 10)}
          </p>
        </div>
        <h4>{props.description}</h4>
        <p>{props.content}</p>
        <a href={props.url}>Read more...</a>
      </div>
    </div>
  );
}

export default Articles;
