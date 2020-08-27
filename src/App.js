import React, { useState } from "react"
import { TodoList } from "./components/TodoList"
import { Footer } from "./components/Footer"
import { ToggleAll } from "./components/ToggleAll"
import { TodoTextInput } from "./components/TodoInputText"
import useTodos from "./hooks/useTodos"
import './App.css'

function App() {
  const [todos, todoList, filter, onNewTodo, onDeleteTodo, onEditTodo, onToggleTodo, onToggleAll, onFilterChange, onClearCompleted] = useTodos()

  return (
    <div className='todoapp'>
      <header className="header">
        <h1>todos</h1>
        <TodoTextInput
          isNew = {true}
          onSave={onNewTodo}
          placeholder="What needs to be done"
        />
      </header>
      <section className="main">
        <ToggleAll 
          list={todoList} 
          toggleAll ={onToggleAll}
        />
        <TodoList 
          list={todos} 
          newTodo={onNewTodo} 
          deleteTodo={onDeleteTodo} 
          editTodo={onEditTodo} 
          toggleTodo={onToggleTodo} 
        />
        <Footer
          list={todoList}
          currentFilter = {filter}
          filterChange = {onFilterChange}
          clearCompleted = {onClearCompleted}
        />
      </section>
    </div>
  )
}

function RootApp() {
  const [active, setActive] = useState(true)
  return (
    <>
      <button onClick={() => setActive((x) => !x)}>main toggle</button>
      {active ? <App /> : null}
    </>
  )
}

export default RootApp