import { Navbar } from "../../components/Navbar/Navbar";
import { CardQuestion } from "../../components/CardQuestionIndex/CardQuestion";
import { OptionsButton } from "../../components/OptionsButton/OptionsButton";
import { useState } from "react";

export function IndexPage() {
  
  const [ questions, setQuestions ] = useState(
    [
      { author: 'weslley-dev', assunto: 'javascript', text: 'dá pra usar javascript no backend?', aproved: 'APROVADO', used: 20 },
    ]
  );

  function handleResult(results) {
    setQuestions(results)
  };

  const questionNumber = questions.length;
  const token = localStorage.getItem('User_Token');

  return(
    <>
      <Navbar onSearch={handleResult} />
      <h1 style={{margin: '10px'}}> Questões Disponíveis: { questionNumber } ! </h1>

      { token &&  <p> user: { token } </p>  }

      <CardQuestion items={questions} />
      <OptionsButton />
    </>
  );
};