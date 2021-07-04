import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "../Layout";

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
          <h1>{forest.name}</h1>
          <div className="space-between">
            <span>{forest.country}</span>
            <span>{forest.hectares} hectares</span>
            <span>
              {forest.type?.substring(0, 1).toUpperCase() +
                forest.type?.substring(1)}
            </span>
          </div>
          <p>{forest.description}</p>
          <img alt="forest" src={forest.imageUrl} />
        </section>
      }
    />
  );
}
