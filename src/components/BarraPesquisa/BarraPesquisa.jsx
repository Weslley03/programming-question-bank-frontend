import './BarraPesquisa.css';

export function BarraPesquisa() {
  return(
    <div>
      <input
        id='digitar' 
        placeholder='gostaria de pesquisar por algum assunto?'
      />
      <button id='pesquisar'> pesquisar </button>
    </div>
  )
};
