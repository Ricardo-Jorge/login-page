import { FaUser, FaLock } from "react-icons/fa";

import { useState } from "react";

import "./Login.css";

const Login = () => {
  const [userName, setUserName] = useState(""); // A variavel setUserName consulta um valor e a userName altera o valor. tudo através da função useState
  const [password, setPassword] = useState(""); // a string vazia "" define o valor da primeira variavel para vazio, para depois ser alterapa pelo o que o usuário digitou.

  const handleSubmit = (e) => {
    e.preventDefault(); // preventDefault previne a ação de envio na pagina.
    console.log("Envio", userName, password);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Acesse o sistema</h1>
        <div className="input-field">
          <input
            type="email"
            placeholder="E-mail"
            onChange={(e) => setUserName(e.target.value)} // O evento 'e' (ação do usuário) no target (o input em questão) value (o que o usuário digitou)
          />
          <FaUser className="icon" />
        </div>
        <div className="input-field">
          <input
            type="password"
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)} // setPassuord identifica o que ta sendo digitado através do e.target.value e altera o valor da const password para o que foi digitado pelo usuario
          />
          <FaLock className="icon" />
        </div>

        <div className="recal-forget">
          <lable>
            <input type="checkbox" />
            Lembre de mim
          </lable>
          <a href="#">Esqueceu a senha?</a>
        </div>

        <button>Entrar</button>
        <div className="signup-link">
          <p>
            Não tem uma conta? <a href="#">Registrar</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
