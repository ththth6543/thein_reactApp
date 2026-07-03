export default function HeadLineSubArticle({
  publisher,
  headlineSubArticle,
  date,
}) {
  return (
    <a className="headline-sub-article-link" href="">
      <div className="headline-sub-article">
        <div className="publisher-info">
          <div className="publisher">
            <span className="material-symbols-outlined">newsmode</span>
            {publisher}
          </div>
        </div>
        <div className="headline-sub-article">{headlineSubArticle}</div>
        <div className="date">{date}</div>
      </div>
    </a>
  );
}
