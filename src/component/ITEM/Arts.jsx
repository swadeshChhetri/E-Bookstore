import React from 'react'
import { useSelector } from 'react-redux';
import Artsbook from './ArtsItem';

const Arts= () => {
  const artss = useSelector((store)=> store.arts)
  return (
    <main>
  <div className="books-container">
    {artss.map((arts)=>(
      <Artsbook key ={arts.id} arts={arts}/>
    ))}
  </div>
</main>
  )
}

export default Arts;