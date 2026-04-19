import IAlemLogo from "./IAlemLogo";

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <div style={{ color: "var(--gold)", marginBottom: 4 }}>
            <IAlemLogo height={22} />
          </div>
          <p className="footer-tag">
            Leve seu atendimento além.
          </p>
        </div>
        <div>
          <h4>Solução</h4>
          <ul>
            <li><a href="#">Agentes</a></li>
            <li><a href="#">Integrações</a></li>
            <li><a href="#">Fluxos</a></li>
          </ul>
        </div>
        <div>
          <h4>Empresa</h4>
          <ul>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Carreiras</a></li>
          </ul>
        </div>
        <div>
          <h4>Contato</h4>
          <ul>
            <li><a href="mailto:contato@ialem.com.br">contato@ialem.com.br</a></li>
            <li><a href="#">WhatsApp</a></li>
            <li><a href="#">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 IAlem Automação Inteligente LTDA</span>
        <span>CNPJ 66.012.830/0001-4 · Brasil</span>
      </div>
    </footer>
  );
}
