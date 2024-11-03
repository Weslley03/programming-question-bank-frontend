export function CardAcesso( { accesOption }) {
  return(
    <section className="container text-center">
      <h1>Weslley-Dev</h1>

      <div className="row">
        {  
          accesOption == 'register'
          ? <input type="text" placeholder="username" />
          : null 
        }
          <input type="text" placeholder="email" />
          <input type="password" placeholder="password" />

        {  
          accesOption == 'register'
          ? <input type="text" placeholder="confirmpassword" />
          : null 
        }
      </div>

      <div className="row">
        {
          accesOption == 'register'
          ? null
          : <button>entrar</button>
        }
        <button>cadastrar</button>
        {
          accesOption == 'register'
          ? null
          : <p>esqueci minha senha</p>
        }
        
      </div>
    </section>
  );
};