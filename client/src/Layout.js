import { Link } from "react-router-dom";
import "./Layout.css";

export default function Layout({ body }) {
  return (
    <div className="layout">
      <header>
        <nav>
          <Link to="/">Pachama</Link>
        </nav>
      </header>
      <main>{body}</main>
    </div>
  );
}
