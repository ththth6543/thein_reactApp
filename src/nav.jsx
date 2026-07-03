import { NavLink } from "react-router-dom";

export default function nav() {
  return (
    <div className="nav">
      <NavLink to="/" end>홈</NavLink>
      <NavLink to="/recommend">추천</NavLink>
      <NavLink to="/follow">팔로우중</NavLink>
      <span className="nav-separator">|</span>
      <NavLink to="/korea">대한민국</NavLink>
      <NavLink to="/world">세계</NavLink>
      <NavLink to="/local">지역</NavLink>
      <NavLink to="/business">비즈니스</NavLink>
      <NavLink to="/tech">과학/기술</NavLink>
      <NavLink to="/entertainment">엔터테인먼트</NavLink>
      <NavLink to="/sports">스포츠</NavLink>
      <NavLink to="/health">건강</NavLink>
    </div>
  );
}
