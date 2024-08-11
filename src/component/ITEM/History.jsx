import React from 'react'
import Historybook from './HistoryItem';
import { useSelector } from 'react-redux';

const History = () => {
 const historys = useSelector((store)=> store.history)
 
  return (
    <main>
      <div className="books-container">
        {historys.map((history)=>(
          <Historybook key ={history.id} history={history}/>
        ))}
      </div>
    </main>
  )
}

export default History;