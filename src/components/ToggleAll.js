import React from "react"
import {isAllDone, isListEmpty} from '../utils'

export const ToggleAll = ({state, toggleAll}) => {
  
  return isListEmpty(state.mainList) ? null : (
    <span>
      <input
        className="toggle-all"
        type="checkbox"
        checked={isAllDone(state.mainList)}
        
      />
      <label onClick={()=>{
            toggleAll({type: 'TOGGLE_ALL'})}} />
    </span>
  )
}
