import React, { useState } from "react"
import { TodoList } from "./components/TodoList"
import { Footer } from "./components/Footer"
import { ToggleAll } from "./components/ToggleAll"
import { TodoTextInput } from "./components/TodoInputText"
import useTodos from "./hooks/useTodos"
import './App.css'

function App() {
  const [state, display, dispatch] = useTodos()

  return (
    <div className='todoapp'>
      <header className="header">
        <h1>todos</h1>
        <TodoTextInput
          isNew = {true}
          onSave={(text)=>dispatch({type: 'NEW_TODO', payload : text})}
          placeholder="What needs to be done"
        />
      </header>
      <section className="main">
        <ToggleAll 
          state = {state}
          toggleAll ={dispatch}
        />
        <TodoList 
          list={display} 
          dispatch = {dispatch} 
        />
        <Footer
          state={state}
          dispatch = {dispatch}
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