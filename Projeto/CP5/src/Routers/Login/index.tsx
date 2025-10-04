import { Link } from "react-router-dom"

export default function Login(){

    return(
        <main>
            <h1>Bem-Vindo!</h1>
            <form>
                <h2>LOGIN</h2>
                <div className="formulario">
                    <div className="campos">
                        <div>
                            <input type="text" id="usuario" placeholder="Usuário"/>
                        </div>
                        <div>
                            <input type="email" id="email" placeholder="Email"/>
                        </div>
                    </div>
                    <p><Link to="/cadastro">Cadastrar-se</Link></p>
                    <div className="botao">
                        <button type="submit">Logar</button>
                    </div>
                </div>
            </form>
        </main>
    )
}