import React from "react"
import {isAllDone, isListEmpty} from '../utils'

export const ToggleAll = (props) => {
  
  return isListEmpty(props.list) ? null : (
    <span>
      <input
        className="toggle-all"
        type="checkbox"
        checked={isAllDone(props.list)}
        
      />
      <label onClick={()=>props.toggleAll()} />
    </span>
  )
}
