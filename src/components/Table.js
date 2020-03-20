import React from 'react';


const Table = props => {
    
    return <main className="box">
    <table className="table">
        <caption className="table__title">Browse Questions</caption>

        <thead className="table__header">
            <tr className="table__row">
                <th className="table__cel">ID</th>
                <th className="table__cel">Category</th>
                <th className="table__cel">Type</th>
                <th className="table__cel">Difficulty</th>
                <th className="table__cel">Question/Satement</th>
                <th className="table__cel">Created By</th>
            </tr>
        </thead>

        <tbody className="table__body">
            
            {props.questions
            .filter(item => props.search === '' || item.category.toLowerCase().includes(props.search))
            .map((item, index) => {
              return (
                <tr className="table__row--questions" key={index}>
                  <td className="table__cel">Number</td>
                  <td className="table__cel">{item.category}</td>
                  <td className="table__cel">{item.type === 'boolean' ? 'True / False' : item.type}</td>
                  <td className="table__cel">{item.difficulty}</td>
                  <td className="table__cel">{item.question}</td>
                  <td className="table__cel6">Name</td>
                </tr>
              );
            })}
        </tbody>
    </table>
   
</main>
}



export default Table;