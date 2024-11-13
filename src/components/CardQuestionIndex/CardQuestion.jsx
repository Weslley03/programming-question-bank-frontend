import './CardQuestion.css';

export function CardQuestion({ items }) {

  function aprovedAnalize(item) {
    let aproved; 
    if(item.Question_Is_Approved === true) {
      aproved = 'APROVADA';
    } else {
      aproved = 'NÃO APROVADA';
    }
    return aproved;
  };

  return (
    <>
      {
        items.map((item, index) => (
        <div key={index}>
          <div id='casca'>
            <div id='interior' className='d-flex justify-content-between align-items-center'>
              <span> Author:  { item.Question_Name_User_Internal } </span>
              <span> Assunto: { item.Question_Statement } </span>
              <span> { item.Question_Text_Body } </span>
              <div className='d-flex flex-column text-end'>
                <span> { aprovedAnalize(item) } </span> 
                <span> utilizada { item.Question_Total_Use }x </span>
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