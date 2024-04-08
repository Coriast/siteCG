import './styles/App.css'
import NavTop from "./components/NavTop/index.jsx";
import List from "./components/List/index.jsx";
import {Link, Outlet} from "react-router-dom";

export default function App() {
  return (
    <>
      <Outlet />
    </>
  )
}

export function Home() {
return (
    <>
      <NavTop />
      <List />
    </>
  )
}

export function NoMatch() {
  return (
    <div>
      <h2>Nada aqui!</h2>
      <p>
        <Link to="/siteCG">Volte para página inicial.</Link>
      </p>
    </div>
  );
}