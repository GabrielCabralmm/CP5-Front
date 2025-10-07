import { Link, useRouteError } from "react-router-dom";

export default function Error(){
  const err = useRouteError() as any;
  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-xl font-semibold mb-2">Algo deu errado </h1>

      <pre className="text-sm text-neutral-600">{err?.statusText || err?.message}</pre>
      
      <Link to="/login" className="underline mt-6 inline-block">Voltar ao login</Link>
    </main>
  );
}
