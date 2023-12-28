import { Link } from "react-router-dom";
import "../../style/nav.css";
import { useState } from "react";
import ModalCarrinho from "./ModalCarrinho";
export default function Nav() {
  const [modal, setModal] = useState(false);

  return (
    <>
      <nav>
        <Link className="logo" to="/">
          Mercado da esquina
        </Link>
        <button onClick={() => (setModal(!modal))}>Carrinho</button>
      </nav>
      {modal ? <ModalCarrinho /> : null}
    </>
  );
}
