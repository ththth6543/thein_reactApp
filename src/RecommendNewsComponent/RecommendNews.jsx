import { recommendNewsData } from "../data/newsData";

export default function RecommendNews() {
  return (
    <div className="recommend-news">
      <div className="recommend-news-top">추천</div>
      <hr />
      <div className="other-news-list">
        {recommendNewsData.map((news, index) => (
          <a href="" key={news.id} className="other-news-item-link">
            <div className="other-news-item">
              <div className="other-news-content-wrapper">
                <div className="other-news-text-section">
                  <div className="publisher">
                    <span className="material-symbols-outlined">newsmode</span>
                    {news.publisher}
                  </div>
                  <div className="other-news-title">{news.title}</div>
                </div>
                {news.image && (
                  <div className="other-news-image">
                    <img src={news.image} alt="" />
                  </div>
                )}
              </div>
              <div className="local-news-date">{news.date}</div>
            </div>
            {index < recommendNewsData.length - 1 && <hr />}
          </a>
        ))}
      </div>
    </div>
  );
}
