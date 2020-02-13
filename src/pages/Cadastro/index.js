import React from "react";

class Cadastro extends React.Component {
  render() {
    return(
      <div className="loginBackground">
      <div className="login">
        <div className="loginContent">
          <div className="logo">
            <img src="./logo.jpg" alt="logo gen" />
            <p>Preencha o formulário para criar sua conta. </p> 
          </div>
          <div className="loginForm">
            <form name="cadastro" action="" method="post">
              <div className="name">
               <fieldset>
                  <input type="text" name="name" id="name" placeholder="Primeiro Nome" className="inputLogin" />
                </fieldset>
                <fieldset>
                  <input type="text" name="surname" id="surname" placeholder="Sobrenome" className="inputLogin" />
                </fieldset>
              </div>
              <fieldset>
                <input type="text" name="username" id="username" placeholder="Username" className="inputLogin" />
              </fieldset>
              <fieldset>
                <input type="email" name="email" id="email" placeholder="Email" className="inputLogin" />
              </fieldset>
              <fieldset>
                <input type="password" name="password" id="password" placeholder="Senha" className="inputLogin" />
              </fieldset>
              <fieldset>
                <input type="password" name="confirmPassoword" id="confirmPassoword" placeholder="Confirmar Senha" className="inputLogin" />
              </fieldset>

              <div className="formOptions">
                <div className="terms">
                  <input type="checkbox" name="terms" id="terms" />Li e concordo com os termos de uso.
                </div>
              </div>
                <div className="formActions center">
                  <button type="submit" className="button buttonPurple">Cadastrar</button>
                </div>
                <a href="/" className="account">Já possui uma conta? Entrar!</a>
            </form>
          </div>
        </div>
      </div>
    </div> 
    );
  };
}

export default Cadastro;  