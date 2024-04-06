import '../../styles/App.css';
import { items } from './items';
import {Link} from "react-router-dom";

export default function List() {
  return (
    <section className="sect_container">
      {
        items.map((item) => {
          const {id, link, imgFile, title, text} = item;
          return (
            <div key={id}>
              <Link to={link}>
                <img src={imgFile} alt=""/>
                <div className="exercise_info">
                  <h4>{title}</h4>
                  <p>{text}</p>
                </div>
              </Link>
            </div>
          )
        })
      }

    </section>
  )
}