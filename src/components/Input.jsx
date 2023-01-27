import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux'

export default function Input() {
    const dispatch = useDispatch();
    const [addTodo, setAddTodo] = useState()
    const handler = (event)=>{
        setAddTodo(event.target.value)
    }
    const handleClick = () =>{
        if(addTodo !== ''){
          dispatch({
            type: "ADD_TODO",
            payload: {
                content: addTodo,
                id: Date.now()
            }
        })
        setAddTodo("")
        }
    }
  return (

    <div className="save">
    <input className="save__input" value={addTodo} type="text" onChange={handler} />
    <div>
      <button className="save__button" type="button" onClick={handleClick}> Save Todo</button>
    </div>
  </div>
  )
}
