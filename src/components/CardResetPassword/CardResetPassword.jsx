import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { resetPasswordSchema } from "../../schema/ResetPassword/resetPasswordSchema";
import { resetPassService } from "../../services/ResetPassword/resetPasswordService";
import { useNavigate } from "react-router-dom";

export function CardResetPassword() {
  const [ emailValid, setEmailValid ] = useState(false);
  const [ resetPassError, setResetPassError ] = useState(null);
  const nami = useNavigate();
  const {
    register: resetPassRegister,
    handleSubmit: resetPassSubmit,
    formState: { errors: resetPassErrors },
  } = useForm({ resolver: zodResolver(resetPasswordSchema) })

  async function submitHandle(data) {
    const response = await resetPassService(data);
    if(response.status === 200) {
      setEmailValid(true);
    } else {
      setResetPassError(response.data.error);
    };
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
              { resetPassError && <p> { resetPassError } </p> }
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
          <button onClick={() => nami('/acesso')}>voltar para acesso</button>
        </div>
      }
      
      </section>
    </>
  );
};