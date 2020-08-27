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
            props.editTodo(props.id, text)
          }}
        />
      ) : (
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={props.done}
            onChange={()=>props.toggleTodo(props.id)}
          />
          <label onDoubleClick={() => setEditing(true)}>{props.text}</label>
          <button className="destroy" onClick={()=>props.deleteTodo(props.id)} />
        </div>
      )}
    </li>
  )
})

export const TodoList = (props) => (
  <ul className="todo-list">
    {props.list.map((item) => {
        console.log('done in list component'+ item.done)
        return (
            <TodoItem 
                key={item.id} 
                id={item.id} 
                text={item.text} 
                done={item.done} 
                newTodo={props.newTodo} 
                deleteTodo={props.deleteTodo} 
                toggleTodo={props.toggleTodo} 
                editTodo={props.editTodo}
            />
          )
    })}
  </ul>
)
