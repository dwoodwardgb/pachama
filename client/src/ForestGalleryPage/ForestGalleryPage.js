import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import debounce from "lodash.debounce";
import ForestCard from "./ForestCard";
import Layout from "../Layout";
import "./ForestGalleryPage.css";

function noop() {}

function SearchRow({ onSearch = noop, onSelect }) {
  const onSearchDebounced = useCallback(debounce(onSearch, 900), [onSearch]);

  return (
    <section className="search-row">
      <section>
        <label>Search</label>
        <input type="text" name="search" onChange={onSearchDebounced} />
      </section>
      <section>
        <label htmlFor="type">Forest type</label>
        <select id="type" onChange={onSelect}>
          <option value=""></option>
          <option value="conservation">Conservation</option>
          <option value="reforestation">Reforestation</option>
        </select>
      </section>
    </section>
  );
}

export default function ForestGalleryPage() {
  const [query, setQuery] = useState({});
  const [forests, setForests] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9000/api/forests?" + new URLSearchParams(query))
      .then((r) => r.json())
      .then(setForests);
  }, [setForests, query]);

  const onSearchChange = useCallback(
    (search) => setQuery({ ...query, name: search.target.value }),
    [query, setQuery]
  );

  const onSelectChange = useCallback(
    (type) => setQuery({ ...query, type: type.target.value }),
    [query, setQuery]
  );

  return (
    <Layout
      body={
        <>
          <h1>Forests</h1>
          <SearchRow onSearch={onSearchChange} onSelect={onSelectChange} />
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
