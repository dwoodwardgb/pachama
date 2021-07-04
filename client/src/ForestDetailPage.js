import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "./Layout";

export default function ForestDetailPage() {
  const { forestId } = useParams();
  const [forest, setForest] = useState({});
  useEffect(() => {
    fetch(`http://localhost:9000/api/forests/${forestId}`)
      .then((r) => r.json())
      .then(setForest);
  }, [setForest, forestId]);
  return (
    <Layout
      body={
        <section>
          <Link to={"/"}>Back</Link>
          <h1>Forest</h1>
          <code>{JSON.stringify(forest, null, 2)}</code>
        </section>
      }
    />
  );
}
