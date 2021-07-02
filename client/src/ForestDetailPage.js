import { useParams, Link } from "react-router-dom";

export default function ForestDetailPage() {
  const { forest } = useParams();
  return (
    <section>
      <Link to={"/"}>Back</Link>
      <h1>Forest</h1>
      <p>{forest}</p>
    </section>
  );
}
