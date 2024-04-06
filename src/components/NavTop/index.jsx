import "../../styles/App.css";
import {Link} from "react-router-dom";

export default function NavTop() {
  return (
    <header>
      <nav>
        <ul className="nav_links">
          <li><Link to="/siteCG">Início</Link></li>
          <li><Link to="/siteCG/Docs">Documentação</Link></li>
        </ul>
      </nav>
    </header>
  )
}