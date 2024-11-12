import { useNavigate } from "react-router-dom";
import { Navbar } from "../../components/Navbar/Navbar";

export function IndexPage() {

  const nami = useNavigate();
  const questionNumber = 0;
  const token = localStorage.getItem('User_Token');

  return(
    <>
      <Navbar />
      <h1>Questões Disponíveis: { questionNumber } ! </h1>

      { token &&  <p> user: { token } </p>  }
    </>
  );
};