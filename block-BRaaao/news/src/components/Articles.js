import data from "../data";
import Article from "./Article";
function Articles() {
  return (
    <div className="flex articles container">
      {data.map((article) => (
        <Article key={article.publishedAt} {...article} />
      ))}
    </div>
  );
}

export default Articles;
