import "./App.css";
import googleLogo from "./assets/Google_logo.webp";

export default function Header() {
  return (
    <div className="header">
      <a className="logo" href="">
        <img
          className="google-logo"
          src={googleLogo}
          alt="Google_logo"
          width={70}
          height={23}
        />
        <span className="logo-text">뉴스</span>
      </a>

      <div className="search-container">
        <span className="material-symbols-outlined search-icon">search</span>
        <input
          className="searchBar"
          type="text"
          placeholder="주제, 장소, 매체 검색"
        />
      </div>
    </div>
  );
}
