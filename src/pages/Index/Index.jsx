import { useNavigate } from "react-router-dom";

export function IndexPage() {

  const nami = useNavigate();
  const token = localStorage.getItem('User_Token');

  return(
    <>
      <h1>Welcome!!</h1>

      {
        token 
          ? <p> user: { token } </p> 
          : <p 
              onClick={() => nami('/acesso')}
              style={{cursor: 'pointer'}}
            > 
              acesse aqui ! 
            </p> 
      }

    </>
  );
};