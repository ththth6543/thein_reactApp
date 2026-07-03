import React from "react";
import HeadLineSubArticle from "./HeadLineSubArticle";

export default function HeadlineBody({ main, subs }) {
  return (
    <div className="headline-body">
      <a href="">
        <div className="headline-left">
          <img src={main.image} alt="" />

          <div className="publisher-info">
            <div className="publisher">
              <span className="material-symbols-outlined">newsmode</span>
              {main.publisher}
            </div>
          </div>
          <div className="article">{main.title}</div>
          <div className="date">{main.date}</div>
        </div>
      </a>
      <div className="headline-right">
        {subs.map((sub) => (
          <HeadLineSubArticle
            key={sub.id}
            publisher={sub.publisher}
            headlineSubArticle={sub.title}
            date={sub.date}
          />
        ))}
      </div>
    </div>
  );
}
