export default function Footer() {
  return (
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
        &copy; {new Date().getFullYear()} Crochetando Sonhos. Todos os direitos
        reservados.
      </p>
    </footer>
  );
}
