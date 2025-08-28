import "./App.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header"
import CarouselMarquee from "./components/CarouselMarquee";
import ProductsSection from "./components/ProductsSection";
import TestimonialsSection from "./components/ReviewsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

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
      <NavBar />
      <Header />
      <CarouselMarquee items={products} />
      <ProductsSection items={products} />
      <TestimonialsSection items={testimonials} />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
