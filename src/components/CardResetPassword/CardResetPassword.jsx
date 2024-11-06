import { useState } from "react";

export function CardResetPassword() {
  const [ emailValid, setEmailValid ] = useState(false);

  return(
    <>
      <section className="container text-center">
      <h1 className="pointer" onClick={() => nami('/')}>Weslley-Dev</h1>

      {
        emailValid 
        ?
          <form>
            <div className="row">
              <label>qual seu e-mail de acesso?</label>
              <input name="User_Email" type="email" placeholder="email"></input>
              <button>enviar</button>
            </div>
          </form> 
        :
        <div>
          <p>encaminhamos um e-mail de 
          recuperação para sua caixa.
          agora é só seguir o passo a 
          passo por lá!!
          </p>
          <button>voltar para acesso</button>
        </div>
      }


      </section>
    </>
  );
};