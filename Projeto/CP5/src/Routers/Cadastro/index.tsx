import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { API } from "../../services/api";

type CadForm = {
  nome: string;
  nomeUsuario: string;
  email: string;
};

export default function Cadastro() {
  const nav = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<CadForm>();

  async function onSubmit(data: CadForm) {
    try {

      const qUser = new URLSearchParams({ nomeUsuario: data.nomeUsuario });
      const rUser = await fetch(`${API}/usuarios?${qUser.toString()}`);
      const jaTemUser: CadForm[] = await rUser.json();
      if (jaTemUser.length > 0) {
        alert("nomeUsuario já utilizado. Escolha outro.");
        return;
      }

      
      const qEmail = new URLSearchParams({ email: data.email });
      const rEmail = await fetch(`${API}/usuarios?${qEmail.toString()}`);
      const jaTemEmail: CadForm[] = await rEmail.json();
      if (jaTemEmail.length > 0) {
        alert("E-mail já cadastrado. Use outro e-mail.");
        return;
      }


      const resp = await fetch(`${API}/usuarios`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!resp.ok) {
        alert("Falha ao cadastrar. Tente novamente.");
        return;
      }

      alert("Cadastro realizado com sucesso!");
      reset();
      nav("/");
    } catch (e) {
      alert("Erro de conexão com a API. Verifique se o json-server está rodando.");
    }
  }

  return (
    <main>
      <h1>Bem-Vindo!</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>CADASTRO</h2>

        <div className="formulario">
          <div className="campos">
            <div>
              <label htmlFor="nome">Nome</label>
              <input
                id="nome"
                placeholder="Nome completo"
                {...register("nome", { required: "Informe o nome" })}
                className={errors.nome ? "border-b-red-500" : ""}
              />
              {errors.nome && (
                <small className="text-red-600">{errors.nome.message}</small>
              )}
            </div>

            <div>
              <label htmlFor="nomeUsuario">Usuário</label>
              <input
                id="nomeUsuario"
                placeholder="Usuário"
                {...register("nomeUsuario", {
                  required: "Informe o usuário",
                  minLength: { value: 3, message: "Mínimo 3 caracteres" },
                })}
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
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "E-mail inválido",
                  },
                })}
                className={errors.email ? "border-b-red-500" : ""}
              />
              {errors.email && (
                <small className="text-red-600">{errors.email.message}</small>
              )}
            </div>
          </div>

          <p>
            <Link to="/">Entrar</Link>
          </p>

          <div className="botao">
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Enviando..." : "Cadastrar"}
            </button>
          </div>
        </div>
      </form>
    </main>
  );
}
