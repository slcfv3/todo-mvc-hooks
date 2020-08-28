import React, { memo, useState } from "react"
import classnames from "classnames"
import { TodoTextInput} from "./TodoInputText"

const TodoItem = memo((props) => {
  
  const [isEditing, setEditing] = useState(false)

  return (
    <li
      className={classnames({
        completed: props.done,
        editing: isEditing,
      })}
    >
      {isEditing ? (
        <TodoTextInput
          initialText={props.text}
          editing
          onSave={(text) => {
            setEditing(false)
            props.dispatch({type: 'EDIT_TODO', payload: {id:props.id , txt:text }})
          }}
        />
      ) : (
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={props.done}
            onClick={()=>{
              
              props.dispatch({type: 'TOGGLE_TODO', payload: props.id})
              console.log('toggle touched')}}
              
          />
          <label onDoubleClick={() => setEditing(true)}>{props.text}</label>
          <button className="destroy" onClick={()=>props.dispatch({type: 'DELETE_TODO', payload : props.id })} />
        </div>
      )}
    </li>
  )
})

export const TodoList = (props) => (
  <ul className="todo-list">
    {props.list.map((item) => {
        
        return (
            <TodoItem 
                key={item.id} 
                id={item.id} 
                text={item.text} 
                done={item.done} 
                dispatch = {props.dispatch}
            />
          )
    })}
  </ul>
)
