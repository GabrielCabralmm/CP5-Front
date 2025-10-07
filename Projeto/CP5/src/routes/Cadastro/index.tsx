import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

type Form = {
  nome: string;
  nomeUsuario: string;
  email: string;
};

export default function Cadastro(){
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<Form>();
  const navigate = useNavigate();

  async function existeDuplicidade(usuario: string, email: string){
    
    const r = await fetch(`http://localhost:3001/usuarios?nomeUsuario=${encodeURIComponent(usuario)}&email=${encodeURIComponent(email)}`);
    if(!r.ok) return true;
    const d = await r.json();
    if (d.length > 0) return true;

    const [r1, r2] = await Promise.all([
      fetch(`http://localhost:3001/usuarios?nomeUsuario=${encodeURIComponent(usuario)}`),
      fetch(`http://localhost:3001/usuarios?email=${encodeURIComponent(email)}`)
    ]);
    const [d1, d2] = await Promise.all([r1.json(), r2.json()]);
    return d1.length > 0 || d2.length > 0;
  }

  async function onSubmit({ nome, nomeUsuario, email }: Form){
    const n = nome.trim();
    const u = nomeUsuario.trim();
    const m = email.trim();

    if (await existeDuplicidade(u, m)) {
      alert("Nome de usuário ou email já cadastrados.");
      return;
    }

    const res = await fetch("http://localhost:3001/usuarios", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome: n, nomeUsuario: u, email: m })
    });

    if (!res.ok) {
      alert("Erro ao cadastrar.");
      return;
    }

    alert("Cadastro feito. Faça login.");
    reset();
    navigate("/login");
  }

  return(
    <main>
      <h1>Bem-Vindo!</h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <h2>CADASTRO</h2>
        <div className="formulario">
          <div className="campos">
            <div>
              <input
                type="text"
                id="nome"
                placeholder="Nome"
                {...register("nome", {
                  required: "Informe o nome",
                  minLength: { value: 3, message: "Mínimo de 3 caracteres" }
                })}
              />
              {errors.nome && <p className="erro">{errors.nome.message}</p>}
            </div>

            <div>
              <input
                type="text"
                id="usuario"
                placeholder="Usuário"
                {...register("nomeUsuario", {
                  required: "Informe o usuário",
                  minLength: { value: 3, message: "Mínimo de 3 caracteres" }
                })}
              />
              {errors.nomeUsuario && <p className="erro">{errors.nomeUsuario.message}</p>}
            </div>

            <div>
              <input
                type="email"
                id="email"
                placeholder="Email"
                {...register("email", {
                  required: "Informe o email",
                  pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Email inválido" }
                })}
              />
              {errors.email && <p className="erro">{errors.email.message}</p>}
            </div>
          </div>

          <p><Link to="/login">Entrar</Link></p>

          <div className="botao">
            <button type="submit" disabled={isSubmitting}>Cadastrar</button>
          </div>
        </div>
      </form>
    </main>
  );
}
