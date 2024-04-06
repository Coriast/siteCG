import './styles/App.css'
import NavTop from "./components/NavTop/index.jsx";
import List from "./components/List/index.jsx";
import Transformations from "./pages/Exercises/Transformations/page.jsx"
import {Routes, Route, Link} from "react-router-dom";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Exercises/Transformations" element={<Transformations />}/>
        <Route path="*" element={<NoMatch />}/>
      </Routes>
    </>
  )
}

function Home() {
return (
    <>
      <NavTop />
      <List />
    </>
  )
}

function NoMatch() {
  return (
    <div>
      <h2>Nada aqui!</h2>
      <p>
        <Link to="/">Volte para página inicial.</Link>
      </p>
    </div>
  );
}