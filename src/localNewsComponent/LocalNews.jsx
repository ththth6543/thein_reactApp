import { localNewsData } from "../data/newsData";

export default function LocalNews() {
  return (
    <div className="local-news">
      <div className="local-news-top">
        지역뉴스
        <span className="material-symbols-outlined">chevron_right</span>
      </div>
      <hr />
      <div className="other-news-list">
        {localNewsData.map((news, index) => (
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
            {index < localNewsData.length - 1 && <hr />}
          </a>
        ))}
      </div>
    </div>
  );
}
