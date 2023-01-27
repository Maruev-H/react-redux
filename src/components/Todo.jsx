import React from 'react'
import { useSelector } from 'react-redux'
import './Components.scss'
import del from '../pictures/del.png'
import { useDispatch } from 'react-redux'

export default function Todo() {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos)
    const removeTodo = (id) =>{
        dispatch({
          type: "DELETE_TODO",
          payload: id,
        })
    }
    return(
        <div className="keeper"> {todos.map((item) => (
            <div key={item.id} className="task">
              <div className="task__text"><span>{item.content}</span></div>
              <button className="delete" type="button" onClick={()=>removeTodo(item.id)}>
                <img className="delete__logo" src={del}  alt="a" />
              </button>
            </div>
          ))}
        </div>
    )

}
