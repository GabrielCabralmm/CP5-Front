import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";

type Form = { nomeUsuario: string; email: string };

export default function Login(){
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<Form>();
  const navigate = useNavigate();

  async function onSubmit({ nomeUsuario, email }: Form){
    const q = new URLSearchParams({
      nomeUsuario: nomeUsuario.trim(),
      email: email.trim(),
    });

    const res = await fetch(`http://localhost:3001/usuarios?${q.toString()}`);
    if (!res.ok) {
      alert("Falha ao buscar usuário.");
      return;
    }

    const data = await res.json();
    const user = data[0];

    if (!user) {
      alert("Usuário não encontrado.");
      return;
    }

    localStorage.setItem("auth_usuario", JSON.stringify(user));
    navigate("/");
  }

  return (
    <main>
      <h1>Bem-Vindo!</h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <h2>LOGIN</h2>

        <div className="formulario">
          <div className="campos">
            <div>
              <input
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
                placeholder="Email"
                {...register("email", {
                  required: "Informe o email",
                  pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Email inválido" }
                })}
              />
              {errors.email && <p className="erro">{errors.email.message}</p>}
            </div>
          </div>

          <p><Link to="/cadastro">Cadastrar-se</Link></p>

          <div className="botao">
            <button disabled={isSubmitting} type="submit">Logar</button>
          </div>
        </div>
      </form>
    </main>
  );
}
