
import { Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext";

export default function App(){
  const { usuario, setUsuario } = useAuth();

  function sair(){
    localStorage.removeItem("usuarioLogado");
    setUsuario(null);
  }

  return (
    <div className="container">
      <header className="p-4 text-sm flex gap-4 items-center">
        {usuario ? (
          <>
            <p>Logado como: <strong>{usuario.nome}</strong> &lt;{usuario.email}&gt;</p>
            <button onClick={sair} className="text-blue-700 underline">Sair</button>
          </>
        ) : <p>Não autenticado</p>}
      </header>
      <Outlet/>
    </div>
  );
}
