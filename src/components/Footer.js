import React from "react"
import classnames from "classnames"
import { isAllActive, activeNum, isListEmpty } from "../utils"


const FILTER_TITLES = {
  All: "All",
  Active: "Active",
  Completed: "Completed",
}

export const Footer = (props) => {
  const activeCount = activeNum(props.state.mainList)
  const areAllActive = isAllActive(props.state.mainList)
  const isEmpty = isListEmpty(props.state.mainList)
  return isEmpty ? null : (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount || "No"}</strong>{" "}
        {activeCount === 1 ? "item" : "items"} left
      </span>
      <ul className="filters">
        {Object.entries(FILTER_TITLES).map(([filter, value]) => (
          <li key={filter}>
            <button
              className={classnames({ selected: props.state.filter === filter })}
              style={{ cursor: "pointer" }}
              onClick={() => props.dispatch({type: 'FILTER_CHANGE', payload: filter})}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
      {areAllActive ? null : (
        <button className="clear-completed" onClick={()=>props.dispatch({type:'CLEAR_ALL'})}>
          Clear completed
        </button>
      )}
    </footer>
  )
}
