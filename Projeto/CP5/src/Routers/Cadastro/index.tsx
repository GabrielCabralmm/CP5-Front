import { Link } from "react-router-dom";

export default function Cadastro(){

    return(
        <main>
            <h1>Bem-Vindo!</h1>
            <form>
                <h2>CADASTRO</h2>
                <div className="formulario">
                    <div className="campos">
                        <div>
                            <input type="text" id="nome" placeholder="Nome"/>
                        </div>
                        <div>
                            <input type="text" id="usuario" placeholder="Usuário"/>
                        </div>
                        <div>
                            <input type="email" id="email" placeholder="Email"/>
                        </div>
                    </div>
                    <p><Link to="/">Entrar</Link></p>
                    <div className="botao">
                        <button type="submit">Cadastrar</button>
                    </div>
                </div>
            </form>
        </main>
    )
}