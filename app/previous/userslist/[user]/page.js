'use client'

import React from 'react'

const User = ({params}) => {
    console.log(params)
  return (

    <div> 
        <h1>Info about {params.user}</h1>
        <p>Hello am {params.user}</p>
    </div>

  )
}

export default User