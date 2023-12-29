import React from 'react'
import { useParams } from 'react-router-dom'
export const Search = () => {
    let {para} = useParams();
    console.log(para);

  return (
    <div>Search</div>
  )
}
