import React from 'react'

const Filter = ({filter, setFilter, setSort}) => {
  return (
    <div className="filter">
        <h2>Filtrar</h2>
        <div className ="filter-options">
            <div>
                <p>Status:</p>
                <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                    {/* Os values são keysensitives */}
                    <option value="All">Todas</option>
                    <option value="Completed">Completas</option>
                    <option value="incompleted">Incompletas</option>
                </select>
            </div>
            <div>
                <p>Ordem alfabética:</p>
                <button onClick={() => setSort("Asc")}>Asc</button>
                <button onClick={() => setSort("Desc")}>Desc</button>
            </div>
        </div>
      
    </div>
  )
}

export default Filter
