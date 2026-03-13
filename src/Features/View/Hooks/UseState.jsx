import { useState } from 'react';

export const  FavoriteColor=() =>{
  const [color, ] = useState("red");

  return <h1>My favorite color is {color}!</h1>
}

export const UseState = () => {
  return (
    <div>UseState</div>
  )
}