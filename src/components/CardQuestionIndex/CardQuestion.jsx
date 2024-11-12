import './CardQuestion.css';

export function CardQuestion() {
  return (
    <div>
      <div id='casca'>
        <div id='interior' className='d-flex justify-content-between align-items-center'>
          <span> Author </span>
          <span> Assunto </span>
          <span> Texto da pergunta reduzido caso passe do lim.... </span>
          <div className='d-flex flex-column text-end'>
            <span> aprovada? </span>
            <span> respondida 20 vezes </span>
          </div>
        </div>
      </div>
      <button className='prevButton'> before </button>
      <span> { `>` } </span>
      <button className='prevButton'> next </button>
    </div>
  );
};