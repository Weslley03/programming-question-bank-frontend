export function IndexPage() {

  const token = localStorage.getItem('User_Token');

  return(
    <>
      <h1>Welcome!!</h1>
      { token && <p> { token } </p> }
    </>
  );
};