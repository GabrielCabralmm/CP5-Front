import { Outlet } from "react-router-dom";
import Cabecalho from "./components/Cabecalho/Cabecalho";
import Rodape from "./components/Rodape/Rodape";

export default function App() {
  return (
    <div className="min-h-dvh flex flex-col">
      <Cabecalho />
      <main className="container grow">
        <Outlet />
      </main>
      <Rodape />
    </div>
  );
}
