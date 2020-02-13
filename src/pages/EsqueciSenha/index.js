import React from "react";


class EsqueciSenha extends React.Component {
  render() {
    return(
      <div className="loginBackground">
      <div className="login">
        <div className="loginContent">
          <div className="logo">
            <img src="./logo.jpg" alt="logo gen" />
            <p>Insira seu email para receber o link de alteração de senha. </p> 
          </div>
          <div className="loginForm">
            <form name="esquci" action="" method="post">
              <fieldset>
                <input type="email" name="email" id="email" placeholder="Email" className="inputLogin" />
              </fieldset>
                <div className="formActions center">
                  <button type="submit" className="button buttonPurple">Enviar link</button>
                </div>
                <a href="/" className="account">Voltar</a>
            </form>
          </div>
        </div>
      </div>
    </div> 
    )
  }
}

export default EsqueciSenha;