import "./App.css";
import "./assets/Logo Croche.jpg"

const products = [
  {
    name: "Amigurumi Coelhinho",
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    description: "Feito à mão com fio 100% algodão. Ideal para presentear.",
  },
  {
    name: "Sousplat Floral",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    description: "Decore sua mesa com charme e delicadeza.",
  },
  {
    name: "Kit Porta-copos",
    image:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    description: "Conjunto com 6 peças, várias cores disponíveis.",
  },
];

const testimonials = [
  {
    name: "Ana Souza",
    city: "Belo Horizonte/MG",
    text: "Amei o amigurumi! Trabalho impecável, entrega rápida e muito capricho. Recomendo demais!",
  },
  {
    name: "Carlos Lima",
    city: "São Paulo/SP",
    text: "Os sousplats deixaram minha mesa linda. Atendimento excelente!",
  },
  {
    name: "Juliana Alves",
    city: "Curitiba/PR",
    text: "Porta-copos super delicados, ótima qualidade. Vou comprar mais!",
  },
];

function App() {
  return (
    <div className="landing-container">
      <nav className="navbar">
        <ul>
          <li>
            <a href="#produtos">Produtos</a>
          </li>
          <li>
            <a href="#todos-produtos">Todos os Produtos</a>
          </li>
          <li>
            <a href="#avaliacoes">Avaliações</a>
          </li>
          <li>
            <a href="#contato">Contato</a>
          </li>
        </ul>
      </nav>
      <header className="header">
        <img
          src="Logo Croche.jpg"
          alt="Logo Crochê da Nanni"
          className="site-logo"
        />
        <h1>Crochetando Sonhos</h1>
        <p>Peças artesanais feitas com amor e criatividade</p>
      </header>
      <section className="carousel-section" id="produtos">
        <h2>Nossos Produtos</h2>
        <div className="carousel-marquee-wrapper">
          <div className="carousel-marquee">
            {[...products, ...products].map((product, idx) => (
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

      <section className="products-section" id="todos-produtos">
        <h2>Todos os Produtos</h2>
        <div className="products-grid">
          {products.map((product, idx) => (
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

      <section className="testimonials-section" id="avaliacoes">
        <h2>O que dizem nossos clientes</h2>
        <div className="testimonials-grid">
          {testimonials.map((t, idx) => (
            <div className="testimonial-card" key={idx}>
              <p className="testimonial-text">“{t.text}”</p>
              <p className="testimonial-author">
                - {t.name} ({t.city})
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contato">
        <h2>Contato</h2>
        <p>Faça seu pedido ou tire dúvidas pelo WhatsApp:</p>
        <a
          className="whatsapp-btn"
          href="https://wa.me/5599999999999"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fale conosco
        </a>
      </section>
      <footer className="footer">
        <div className="footer-contacts">
          <span>
            WhatsApp:{" "}
            <a
              href="https://wa.me/5599999999999"
              target="_blank"
              rel="noopener noreferrer"
            >
              (99) 99999-9999
            </a>
          </span>
          <span>
            Email:{" "}
            <a href="mailto:contato@crochetandosonhos.com">
              contato@crochetandosonhos.com
            </a>
          </span>
        </div>
        <p>
          &copy; {new Date().getFullYear()} Crochetando Sonhos. Todos os
          direitos reservados.
        </p>
      </footer>
    </div>
  );
}

export default App;
