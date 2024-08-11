import React from 'react'
import Psychologybook from './PsychologyItem';
import { useSelector } from 'react-redux';

const Psychology = () => {
  const psychologys = useSelector((store)=> store.psychology);
  return (
    <main>
    <div className="books-container">
      {psychologys.map((psychology)=>(
        <Psychologybook key ={psychology.id} psychology={psychology}/>
      ))}
    </div>
  </main>
  )
}

export default Psychology;