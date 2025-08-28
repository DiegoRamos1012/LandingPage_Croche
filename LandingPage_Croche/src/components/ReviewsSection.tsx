type Review = {
  name: string;
  city: string;
  text: string;
};

export default function ReviewsSection({ items }: { items: Review[] }) {
  return (
    <section className="reviews-section" id="avaliacoes">
      <h2>O que dizem nossos clientes</h2>
      <div className="reviews-grid">
        {items.map((t, idx) => (
          <div className="review-card" key={idx}>
            <p className="review-text">“{t.text}”</p>
            <p className="review-author">
              - {t.name} ({t.city})
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
