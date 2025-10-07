import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { API } from "../../services/api";
import { useAuth } from "../../AuthContext";

type LoginForm = { nomeUsuario: string; email: string };

export default function Login() {
  const nav = useNavigate();
  const { setUsuario } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginForm>();

  async function onSubmit(data: LoginForm) {
    try {
      const q = new URLSearchParams({
        nomeUsuario: data.nomeUsuario,
        email: data.email,
      });
      const resp = await fetch(`${API}/usuarios?${q.toString()}`);
      const lista = await resp.json();

      if (lista.length === 1) {
        const usuario = lista[0];
        localStorage.setItem("usuarioLogado", JSON.stringify(usuario));
        setUsuario(usuario); 
        nav("/");
      } else {
        alert("Usuário não encontrado. Verifique os dados ou cadastre-se.");
      }
    } catch {
      alert("Erro ao conectar na API. Confira se o json-server está rodando.");
    }
  }

  return (
    <main>
      <h1>Bem-Vindo!</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>LOGIN</h2>

        <div className="formulario">
          <div className="campos">
            <div>
              <label htmlFor="nomeUsuario">Usuário</label>
              <input
                id="nomeUsuario"
                placeholder="Usuário"
                {...register("nomeUsuario", { required: "Informe o usuário" })}
                className={errors.nomeUsuario ? "border-b-red-500" : ""}
              />
              {errors.nomeUsuario && (
                <small className="text-red-600">
                  {errors.nomeUsuario.message}
                </small>
              )}
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                {...register("email", {
                  required: "Informe o e-mail",
                  pattern: { value: /\S+@\S+\.\S+/, message: "E-mail inválido" },
                })}
                className={errors.email ? "border-b-red-500" : ""}
              />
              {errors.email && (
                <small className="text-red-600">{errors.email.message}</small>
              )}
            </div>
          </div>

          <p>
            <Link to="/cadastro">Não tem conta? Cadastre-se</Link>
          </p>

          <div className="botao">
            <button type="submit" disabled={isSubmitting}>
              Entrar
            </button>
          </div>
        </div>
      </form>
    </main>
  );
}
