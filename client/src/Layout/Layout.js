import Header from "./Header";
import "./Layout.css";

export default function Layout({ body }) {
  return (
    <div className="layout">
      <header>
        <Header />
      </header>
      <main>{body}</main>
    </div>
  );
}
