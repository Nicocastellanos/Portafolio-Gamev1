import "../css/Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <ul className="list">
          <li>
            <Link to="/projectos" className="menu-link menu-link1">PROJECTOS</Link>
          </li>
          <li>
            <Link to="/sobre-mi" className="menu-link menu-link2">SOBRE MÍ</Link>
          </li>
          <li>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="menu-link menu-link3">LINKEDIN</a>
          </li>
          <li>
            <a href="https://github.com/NicoCastellanos" target="_blank" rel="noreferrer" className="menu-link menu-link4">GITHUB</a>
          </li>
          <li>
            <a href="mailto:nicolas.castellanos012@gmail.com" className="menu-link menu-link5">EMAIL</a>
          </li>
        </ul>
      </div>
    </section>
  );
}