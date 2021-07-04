import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <nav className="nav">
      <Link to="/">Pachama</Link>
    </nav>
  );
}
