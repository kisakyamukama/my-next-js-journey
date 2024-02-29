
import React from 'react'
import {redirect} from "next/navigation";

const ID = ({params}) => {
  console.log(params)
  if(params.id == 4) {
    redirect('/login');
  }
  return (
    <div>
    <h1>ID {params.id}</h1>
    </div>
  )
}

export default ID