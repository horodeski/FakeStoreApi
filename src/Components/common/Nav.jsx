import { Link } from "react-router-dom";
import "../../style/nav.css";

export default function Home() {
  return (
    <nav>
      <Link className="logo" to="/">
        Mercado da esquina
      </Link>
      <Link to="/carrinho">
        <button>Carrinho</button>
      </Link>
    </nav>
  );
}
