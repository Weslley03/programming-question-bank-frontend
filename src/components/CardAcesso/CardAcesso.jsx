import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AcessoSchema } from "../../schema/acessoSchema";
import { CadastroSchema } from "../../schema/cadastroSchema";
import { useNavigate } from "react-router-dom";
import { acessoUser } from "../../services/AcessoService/acessoService";
import { useState } from "react";
import './CardAcessoStyled.css';

export function CardAcesso( { accesOption }) {

  const [ accesError, setAccesError ] = useState(null);

  let schema;
  if(accesOption === 'register') {
    schema = CadastroSchema;
  } else {
    schema = AcessoSchema;
  };

  const {
    register: acessoRegister,
    handleSubmit: acessoHandleSubmit,
    formState: { errors: acessoErrors },
  } = useForm({ resolver: zodResolver(schema) }); 

  const nami = useNavigate();

  async function loginHandle(data){
    const response = await acessoUser(data, accesOption);
    if(response && response.status === 200 && response.status === 201) {
      if(accesOption === 'register') {
        nami('/acesso')
      } else if (accesOption === 'login') {
        localStorage.setItem('User_Token', response.data.User_Token);
        nami('/');
      };
    } else { 
        setAccesError(response?.data?.error);
    };
  };

  return(
    <section className="container text-center">
      <h1 className="pointer" onClick={() => nami('/')}>Weslley-Dev</h1>

      <form onSubmit={acessoHandleSubmit(loginHandle)}>
        <div className="row">
          {  
            accesOption == 'register' &&
            <>
              <input type="text" placeholder="name" {...acessoRegister('User_Name')} />
              {acessoErrors.User_Name && <span> { acessoErrors.User_Name.message } </span>}

              <input type="text" placeholder="username" {...acessoRegister('User_Username')} />
              {acessoErrors.User_Username && <span> { acessoErrors.User_Username.message } </span>}
            </>
          }
            <input type="email" placeholder="email" {...acessoRegister('User_Email')} />
            {acessoErrors.User_Email && <span> { acessoErrors.User_Email.message } </span>}

            <input type="password" placeholder="password"  {...acessoRegister('User_Password')} />
            {acessoErrors.User_Password && <span> { acessoErrors.User_Password.message } </span>}

            {accesError && <span> { accesError } </span>}

          {  
            accesOption == 'register' &&
              <>
                <input type="password" placeholder="confirmpassword"  {...acessoRegister('confirmpasswordData')}/>
                {acessoErrors.confirmpasswordData && <span> { acessoErrors.confirmpasswordData.message } </span>}
              </> 
          }
        </div>

        <div className="row">
          
          {
            accesOption == 'register'
            ? <button className="buttonAcess" type="submit">cadastrar</button>
            : <>
              <button className="buttonAcess" type="submit">entrar</button> 
              <button className="buttonAcess" onClick={() => nami('/cadastro')} type="button">cadastro</button>
              </> 
          }
          
          {
            accesOption !== 'register' && <p className="pointer">esqueci minha senha</p>
          }

        </div>
      </form>
    </section>
  );
};