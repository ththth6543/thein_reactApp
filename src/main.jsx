import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Header from "./Header.jsx";
import Nav from "./nav.jsx";
import Footer from "./Footer.jsx";
import Recommend from "./Recommend.jsx";
import Follow from "./follow.jsx";
import Korea from "./Korea.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Header />
    <Nav />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/recommend" element={<Recommend />} />
      <Route path="/follow" element={<Follow />} />
      <Route path="/korea" element={<Korea />} />
    </Routes>
    <Footer />
  </BrowserRouter>,
);
