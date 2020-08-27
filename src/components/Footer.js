import React from "react"
import classnames from "classnames"
import { isAllActive, activeNum, isListEmpty } from "../utils"


const FILTER_TITLES = {
  All: "All",
  Active: "Active",
  Completed: "Completed",
}

export const Footer = (props) => {
  const activeCount = activeNum(props.list)
  const areAllActive = isAllActive(props.list)
  const isEmpty = isListEmpty(props.list)
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
              className={classnames({ selected: props.currentFilter === filter })}
              style={{ cursor: "pointer" }}
              onClick={() => props.filterChange(filter)}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
      {areAllActive ? null : (
        <button className="clear-completed" onClick={()=>props.clearCompleted()}>
          Clear completed
        </button>
      )}
    </footer>
  )
}
