import { useNavigate } from "react-router-dom";
import { Navbar } from "../../components/Navbar/Navbar";
import { CardQuestion } from "../../components/CardQuestionIndex/CardQuestion";

export function IndexPage() {

  const nami = useNavigate();
  const questionNumber = 0;
  const token = localStorage.getItem('User_Token');

  return(
    <>
      <Navbar />
      <h1 style={{margin: '10px'}}> Questões Disponíveis: { questionNumber } ! </h1>

      { token &&  <p> user: { token } </p>  }

      <CardQuestion />
    </>
  );
};