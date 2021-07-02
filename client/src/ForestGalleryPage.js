import { Link } from "react-router-dom";

const forests = ["One", "Two", "Three"];

export default function ForestGalleryPage() {
  return (
    <section>
      <h1>Pachama Forests</h1>
      <ul>
        {forests.map((f, i) => {
          return (
            <li key={i}>
              <Link to={`/${f}`}>{f}</Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
