import './CardQuestion.css';

export function CardQuestion({ items }) {
  return (
    <>
      {
        items.map((item, index) => (
        <div key={index}>
          <div id='casca'>
            <div id='interior' className='d-flex justify-content-between align-items-center'>
              <span> Author:  { item.author } </span>
              <span> Assunto: { item.assunto } </span>
              <span> { item.text } </span>
              <div className='d-flex flex-column text-end'>
                <span> { item.aproved } </span>
                <span> utilizada { item.used }x </span>
              </div>
            </div>
          </div>
        </div>
        ))}

      <div>
        <button className='prevButton'> before </button>
          <span> { `>` } </span>
        <button className='prevButton'> next </button>
      </div>
    </>
  );
};