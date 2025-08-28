type Product = {
  name: string;
  image: string;
  description: string;
};

export default function ProductsSection({ items }: { items: Product[] }) {
  return (
    <section className="products-section" id="todos-produtos">
      <h2>Todos os Produtos</h2>
      <div className="products-grid">
        {items.map((product, idx) => (
          <div className="product-card" key={idx}>
            <img
              src={product.image}
              alt={product.name}
              className="product-img"
            />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
