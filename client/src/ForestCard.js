import "./ForestCard.css";

export default function ForestCard({ forest }) {
  return (
    <section className="forest-card">
      <img src={forest.imageUrl} alt={forest.name} />
      <h2>{forest.name}</h2>
      <p>{forest.blurb}</p>
    </section>
  );
}
