import Menu from "../Menu/Menu";

type Usuario = { nome: string; nomeUsuario: string; email: string } | null;

export default function Cabecalho() {
  const salvo = localStorage.getItem("auth_usuario");
  const usuario: Usuario = salvo ? JSON.parse(salvo) : null;

  return (
    <header className="border-b mb-6">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Meu App</h1>

        <div className="flex items-center gap-4 sm:gap-6">
          <Menu />

          <div className="text-xs sm:text-sm leading-snug">
            {usuario ? (
              <>
                <div className="font-medium">
                  {usuario.nome} <span className="text-neutral-500">(@{usuario.nomeUsuario})</span>
                </div>
                <div className="text-neutral-600">{usuario.email}</div>
              </>
            ) : (
              <div className="text-neutral-600">Não autenticado</div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
