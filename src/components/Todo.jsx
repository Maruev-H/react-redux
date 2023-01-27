import React from 'react'
import { useSelector } from 'react-redux'
import './Components.scss'
import del from '../pictures/del.png'
import { useDispatch } from 'react-redux'

export default function Todo() {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos)
    const removeTodo = (id) =>{
        return{
            type: "DELETE_TODO",
            payload: id,
        }
    }
    return(
        <div className="keeper"> {todos.map((item) => (
            <div className="task">
              <p className="task__text"><span>{item.content}</span></p>
              <button className="delete" type="button" onClick={()=>dispatch(removeTodo(item.id))}>
                <img className="delete__logo" src={del}  alt="a" />
              </button>
            </div>
          ))}
        </div>
    )

}
