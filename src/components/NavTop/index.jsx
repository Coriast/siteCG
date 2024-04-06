import "../../styles/App.css";
import {Link} from "react-router-dom";

export default function NavTop() {
  return (
    <header>
      <nav>
        <ul className="nav_links">
          <li><Link to="/">Início</Link></li>
          <li><Link to="/Docs">Documentação</Link></li>
        </ul>
      </nav>
    </header>
  )
}