import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ForestCard from "./ForestCard";
import Layout from "./Layout";
import "./ForestGalleryPage.css";

function SearchRow() {
  return (
    <section className="search-row">
      <section>
        <label>Search</label>
        <input type="text" name="search" />
      </section>
      <section>
        <label htmlFor="type">Forest type</label>
        <select id="type">
          <option value=""></option>
          <option value="conservation">Conservation</option>
          <option value="reforestation">Reforestation</option>
        </select>
      </section>
    </section>
  );
}

export default function ForestGalleryPage() {
  const [forests, setForests] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9000/api/forests")
      .then((r) => r.json())
      .then(setForests);
  }, [setForests]);

  return (
    <Layout
      body={
        <>
          <h1>Forests</h1>
          <SearchRow />
          <ul className="gallery">
            {forests.map((f) => {
              return (
                <li key={f.id}>
                  <Link to={`/${f.id}`}>
                    <ForestCard forest={f} />
                  </Link>
                </li>
              );
            })}
          </ul>
        </>
      }
    />
  );
}
