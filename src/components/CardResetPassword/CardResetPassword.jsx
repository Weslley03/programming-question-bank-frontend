import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { resetPasswordSchema } from "../../schema/ResetPassword/resetPasswordSchema";

export function CardResetPassword() {
  const [ emailValid, setEmailValid ] = useState(false);
  const {
    register: resetPassRegister,
    handleSubmit: resetPassSubmit,
    formState: { errors: resetPassErrors },
  } = useForm({ resolver: zodResolver(resetPasswordSchema) })

  async function submitHandle() {
    setEmailValid(true)
  };

  return(
    <>
      <section className="container text-center">
      <h1 className="pointer" onClick={() => nami('/')}>Weslley-Dev</h1>

      {
        !emailValid 
        ?
          <form onSubmit={resetPassSubmit(submitHandle)}>
            <div className="row">
              <label>qual seu e-mail de acesso?</label>
              <input type="email" placeholder="email" {...resetPassRegister('User_Email')} />
              { resetPassErrors.User_Email && <span> { resetPassErrors.User_Email.message } </span> }
              <button type="submit">enviar</button>
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