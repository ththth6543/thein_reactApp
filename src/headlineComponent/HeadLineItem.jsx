import React from "react";
import HeadlineBody from "./HeadlineBody";

export default function HeadLineItem({ main, subs }) {
  return (
    <div className="headline-item">
      <HeadlineBody main={main} subs={subs} />
      <div className="headline-bottom">
        <button className="headline-bottom-button">
          <span className="material-symbols-outlined">full_coverage</span>
          헤드라인 및 의견 더보기
        </button>
      </div>
    </div>
  );
}
