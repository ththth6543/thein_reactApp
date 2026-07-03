import React from "react";
import { headlineNews } from "../data/newsData";
import HeadLineItem from "./HeadlineItem";

export default function HeadLine() {
  return (
    <div className="headline">
      <div className="headline-top">
        주요뉴스{" "}
        <span className="material-symbols-outlined">chevron_right</span>
      </div>
      <hr />
      {headlineNews.map((newsItem, index) => (
        <React.Fragment key={newsItem.id}>
          {index > 0 && <hr />}
          <HeadLineItem main={newsItem.main} subs={newsItem.subs} />
        </React.Fragment>
      ))}
    </div>
  );
}
