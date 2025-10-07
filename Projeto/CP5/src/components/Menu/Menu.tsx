import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav className="flex gap-4 text-sm">
      <Link to="/login">Login</Link>
      <Link to="/cadastro">Cadastro</Link>
    </nav>
  );
}
