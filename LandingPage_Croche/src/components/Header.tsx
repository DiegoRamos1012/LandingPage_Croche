import logo from "../assets/Logo Croche.jpg";

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo Crochê da Nanni" className="site-logo" />
      <h1>Crochetando Sonhos</h1>
      <p>Peças artesanais feitas com amor e criatividade</p>
    </header>
  );
}
