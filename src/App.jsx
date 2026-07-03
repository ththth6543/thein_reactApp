import "./App.css";
import HeadLine from "./headlineComponent/HeadLine";
import LocalNews from "./localNewsComponent/LocalNews";
import RecommendNews from "./RecommendNewsComponent/RecommendNews";

function App() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const week = today.getDay();
  const weekString = ["일", "월", "화", "수", "목", "금", "토"];
  return (
    <>
      <div className="main">
        <h2 className="title">내 브리핑</h2>
        <div className="date">
          {month}월 {day}일 {weekString[week]}요일
        </div>

        <div className="news">
          <HeadLine />
          <div className="other-news">
            <LocalNews />
            <RecommendNews />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
