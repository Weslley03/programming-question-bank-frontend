import { Navbar } from "../../components/Navbar/Navbar";
import { CardQuestion } from "../../components/CardQuestionIndex/CardQuestion";
import { OptionsButton } from "../../components/OptionsButton/OptionsButton";

export function IndexPage() {
  
  let value;
  function handleResult (results) {
    value = results;
    console.log(value);
  };

  const questionNumber = 0;
  const token = localStorage.getItem('User_Token');

  return(
    <>
      <Navbar onSearch={handleResult} />
      <h1 style={{margin: '10px'}}> Questões Disponíveis: { questionNumber } ! </h1>

      { token &&  <p> user: { token } </p>  }

      <CardQuestion items={value} />
      <OptionsButton />
    </>
  );
};