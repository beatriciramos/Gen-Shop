import React from "react";

 

class Login extends React.Component {
  render() {
    return( 
      <div className="loginBackground">
        <div className="login">
          <div className="loginContent">
            <div className="logo">
              <img src="./logo.jpg" alt="logo gen" />
              <p>Bem-vindo de volta! Faça o Login para entrar. </p> 
            </div>
            <div className="loginForm">
              <form name="login" action="" method="post">
                <fieldset>
                  <input type="email" name="email" id="email" placeholder="Email" className="inputLogin" />
                </fieldset>
                <fieldset>
                  <input type="password" name="password" id="password" placeholder="Senha" className="inputLogin" />
                </fieldset>
                <div className="formOptions">
                  <div className="rememberPassword">
                    <input type="checkbox" name="remember" id="remember" />Remember me
                  </div>
                  <div className="forgetPassword">
                    <a href="/esqueci-senha">Esqueceu sua senha?</a>
                  </div>
                </div>
                  <div className="formActions">
                    <button type="submit" className="button">Entrar</button>
                    <a href="/cadastro" className="button buttonWhite">Cadastro</a>
                  </div>
              </form>
            </div>
          </div>
        </div>
      </div> 
     )
  }
}

export default Login; 