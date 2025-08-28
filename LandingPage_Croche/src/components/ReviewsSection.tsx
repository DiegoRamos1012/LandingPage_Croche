type Review = {
  name: string;
  city: string;
  text: string;
};

export default function ReviewsSection({
  items,
}: {
  items: Review[];
}) {
  return (
    <section className="testimonials-section" id="avaliacoes">
      <h2>O que dizem nossos clientes</h2>
      <div className="testimonials-grid">
        {items.map((t, idx) => (
          <div className="testimonial-card" key={idx}>
            <p className="testimonial-text">“{t.text}”</p>
            <p className="testimonial-author">
              - {t.name} ({t.city})
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
