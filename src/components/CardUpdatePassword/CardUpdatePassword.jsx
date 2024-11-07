import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { updatePasswordSchema } from "../../schema/ResetPassword/updatePasswordSchema";
import { updatePassService } from "../../services/UpdateService/updatePasswordService";

export function CardUpdatePassword() {
  const [ hasSend, setHasSend ] = useState(false);
  const [ updatePassError, setUpdatePassError ] = useState(null);
  const nami = useNavigate();
  const {
    register: updatePassRegister,
    handleSubmit: updatePassSubmit,
    formState: { errors: updatePassErrors },
  } = useForm({ resolver: zodResolver(updatePasswordSchema) })

  async function submitHandle(data) {
    const response = await updatePassService(data);
    if(response.status === 201) {
      setHasSend(true);
    } else {
      setUpdatePassError(response.data.error);
    };
  };

  return(
    <>
    <section className="container text-center">
      <h1 onClick={() => nami('/')}>Weslley-Dev</h1>

      {
        !hasSend 
        ?
          <form onSubmit={updatePassSubmit(submitHandle)}>
            <div className="row">
              <input type="password" placeholder="nova senha" {...updatePassRegister('User_NewPassword')} />
              { updatePassErrors.User_NewPassword && <span> { updatePassErrors.User_NewPassword.message } </span> }

              <input type="password" placeholder="confirme sua nova senha" {...updatePassRegister('User_PasswordConfirm')} />
              { updatePassErrors.User_PasswordConfirm && <span> { updatePassErrors.User_PasswordConfirm.message } </span> }
              { updatePassError && <p> { updatePassError } </p> }
              <button type="submit">enviar</button>
            </div>
          </form> 
        :
        <div>
          <p> senha alterada com sucesso!! </p>
          <button onClick={() => nami('/acesso')}>voltar para acesso</button>
        </div>
      }
    </section>
    </>
  );
};