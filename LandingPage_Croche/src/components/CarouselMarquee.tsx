type Product = {
  name: string;
  image: string;
  description: string;
};

export default function CarouselMarquee({ items }: { items: Product[] }) {
  return (
    <section className="carousel-section" id="produtos">
      <h2>Nossos Produtos</h2>
      <div className="carousel-marquee-wrapper">
        <div className="carousel-marquee">
          {[...items, ...items].map((product, idx) => (
            <div className="carousel-marquee-item" key={idx}>
              <img
                src={product.image}
                alt={product.name}
                className="carousel-img"
              />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
