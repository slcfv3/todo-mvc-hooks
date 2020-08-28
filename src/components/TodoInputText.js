import React, { useState } from "react"
import classnames from "classnames"

export const TodoTextInput = ({ onSave, initialText, editing, isNew, placeholder }) => {
  const [text, setText] = useState(initialText ?? "")

  return (
    <input
      className={classnames({
        edit: editing,
        "new-todo": isNew,
      })}
      type="text"
      placeholder={placeholder}
      autoFocus={true}
      value={text}
      onBlur={(e) => {
        console.log("blur")
        if(!isNew)
            onSave(e.target.value)
        
      }}
      onChange={(e) => setText(e.target.value)}
      onKeyDown={(e) => {
        if (e.which === 13) {
          
          if(isNew){
            setText("")
            onSave(text.trim())
          }else{
            onSave(text.trim())
          }
            
          
        }
      }}
    />
  )
}
