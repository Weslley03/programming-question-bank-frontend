import { useState } from 'react';
import './BarraPesquisa.css';

export function BarraPesquisa({ onSearch }) {

  const [ inputAssunto, setInputAssunto ] = useState([]);

  async function searchByAssunto() {
    const result = [
      { author: `weslleydev`, assunto: `${inputAssunto}`, text: 'dá pra usar javascript no backend?', aproved: 'APROVADO', used: 20 },
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
