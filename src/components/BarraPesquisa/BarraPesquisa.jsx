import { useState } from 'react';
import './BarraPesquisa.css';

export function BarraPesquisa({ onSearch }) {

  const [ inputAssunto, setInputAssunto ] = useState([]);

  async function searchByAssunto() {
    const result = [
      { Question_Name_User_Internal: `weslleydev`, 
        Question_Statement: `${inputAssunto}`, 
        Question_Text_Body: 'dá pra usar javascript no backend?', 
        Question_Is_Approved: true, Question_Total_Use: 20 },
    ]
    onSearch(result);
  };

  return(
    <div>
      <input
        id='digitar' 
        placeholder='gostaria de pesquisar por algum assunto?'
        value={inputAssunto}
        onChange={(e) => setInputAssunto(e.target.value)}
      />
      <button id='pesquisar' onClick={searchByAssunto}> pesquisar </button>
    </div>
  )
};
