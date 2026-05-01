import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "./App.css";

import imageSrc from './bublik.jpg'

function App() {
    return (
        <BrowserRouter>
            <div className="page-grid">
                <Head />
                <Main />
                <Footer />
            </div>
        </BrowserRouter>
    );
}

function Head() {
    return (
        <header id="page-head">
            <nav className="navbar">
                <NavLink to="/">Новости</NavLink>
                <NavLink to="/about">О проекте</NavLink>
                <NavLink to="/contacts">Контакты</NavLink>
            </nav>
        </header>
    );
}

function Main() {
    return (
        <main className="main" id="main-content">
            <Section />
            <Article />
            <Aside />
        </main>
    );
}

function Section() {
    return (
        <section className="section-col" id="section-side">
            <img src={imageSrc} alt="Декоративное изображение" />
        </section>
    );
}

function Article() {
    return (
        <article className="article-col" id="article-content">
            <Routes>
                <Route path="/" element={<News />} />
                <Route path="/about" element={<About />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </article>
    );
}

function News() {
    return (
        <div>
            <h1>Новости</h1>
            <p>Здесь находятся новости</p>
        </div>
    );
}

function About() {
    return (
        <div>
            <h1>Южный федеральный университет</h1>
        </div>
    );
}

function Contacts() {
    return (
        <div>
            <h1>Контакты</h1>
            <p>+7 (999) 123-45-67</p>
        </div>
    );
}

function NotFound() {
    return (
        <div>
            <h1>404</h1>
            <p>Страница не найдена</p>
        </div>
    );
}

function Aside() {
    return (
        <aside className="aside-col" id="aside-info">
            <p>Егорова Екатерина Михайловна</p>
        </aside>
    );
}

function Footer() {
    return (
        <footer className="footer" id="page-footer">
            <p>30.04.2026, Егорова Е.М.</p>
        </footer>
    );
}

export default App;
