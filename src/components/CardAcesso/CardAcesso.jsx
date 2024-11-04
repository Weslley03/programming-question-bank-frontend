import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AcessoSchema } from "../../schema/acessoSchema";
import { CadastroSchema } from "../../schema/cadastroSchema";
import { useNavigate } from "react-router-dom";
import { acessoUser } from "../../services/AcessoService/acessoService";

export function CardAcesso( { accesOption }) {
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
    try{
      await acessoUser(data, accesOption);
      console.log(data)
      if(accesOption === 'register') nami('/acesso');
      if(accesOption === 'login') nami('/');
    } catch(err) {
      console.error(err);
    };
  }

  return(
    <section className="container text-center">
      <h1>Weslley-Dev</h1>

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
            ? <button type="submit">cadastrar</button>
            : <>
              <button type="submit">entrar</button> 
              <button onClick={() => nami('/cadastro')} type="button">cadastro</button>
              </> 
          }
          
          {
            accesOption !== 'register' && <p style={{cursor: "pointer"}}>esqueci minha senha</p>
          }

        </div>
      </form>
    </section>
  );
};