import "./App.css";
import styled from "styled-components";
import { Header } from "./layout/header/Header";
import { HeroSection } from "./layout/sections/heroSection/HeroSection";
import { ContentSection } from "./layout/sections/contentSection/ContentSection";
import { Footer } from "./layout/footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { ArticlesPage } from "./pages/ArticlesPage";
import { ArticlePage } from "./pages/ArticlePage";
import { AboutPage } from "./pages/AboutPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/article" element={<ArticlePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #e91e63;
`;
