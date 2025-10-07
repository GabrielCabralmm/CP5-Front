
import { createContext, useContext, useEffect, useState } from "react";

export type Usuario = { id:number; nome:string; nomeUsuario:string; email:string };

const AuthCtx = createContext<{ usuario: Usuario|null; setUsuario: (u:Usuario|null)=>void }>({
  usuario: null, setUsuario: ()=>{}
});

export function AuthProvider({ children }:{children: React.ReactNode}){
  const [usuario, setUsuario] = useState<Usuario|null>(null);

  useEffect(()=>{
    const raw = localStorage.getItem("usuarioLogado");
    if (raw) setUsuario(JSON.parse(raw));
  },[]);

  return <AuthCtx.Provider value={{usuario, setUsuario}}>{children}</AuthCtx.Provider>;
}
export const useAuth = ()=> useContext(AuthCtx);
