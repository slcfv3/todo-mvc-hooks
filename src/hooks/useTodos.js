import {useState, useEffect, useRef } from 'react'
import {findIndexbyId, isAllDone} from '../utils'

const useTodos = ()=>{
    const todoList = useRef([])
    const [todos, setTodos]= useState([])
    const [mainList, setMainList] =useState([])
    const currentId = useRef(0)
    const [filter, setFilter] = useState('All')

    useEffect(()=>{
        console.log('filter called')
        if(filter=== 'All')
            setTodos([...todoList.current])
       
        if(filter === 'Active'){
            const filtered = todoList.current.filter(todo => todo.done===false)
            setTodos(filtered)
        }
        if(filter ==='Completed'){
            const filtered = todoList.current.filter(todo => todo.done ===true)
            setTodos(filtered)
        }
    },[mainList, filter])

    const onNewTodo = (inputText)=>{
        console.log('new is called')
        currentId.current++
        const newItem = {
            id: currentId.current,
            text: inputText,
            done: false
        }
        todoList.current = [ ...todoList.current,newItem]
        setMainList([...todoList.current])
        
    }

    const onDeleteTodo = (id)=>{
        console.log('delete is called')
        todoList.current = todoList.current.filter(item=>item.id!==id)
        setMainList([...todoList.current])
        
    }

    const onToggleTodo = (id) =>{
        console.log('toggle is called')
        const index = findIndexbyId(id, todoList.current)
        todoList.current[index].done= !todoList.current[index].done
        setMainList([...todoList.current])
    }

    const onEditTodo = (id, txt) =>{
        console.log('edit is called')
        const index = findIndexbyId(id, todoList.current)
        todoList.current[index].text = txt
        setMainList([...todoList.current])
    }

    const onToggleAll = ()=>{
        console.log('toggle all')
        todoList.current = todoList.current.map(todo=> {return {...todo, done:isAllDone(todos) ? false : true} })
        setMainList([...todoList.current])
    }
   
    const onFilterChange =(inputfilter)=>{
        console.log('filter change')
        setFilter(inputfilter)
    }

    const onClearCompleted = ()=>{
        console.log('clear completed')
        todoList.current = todoList.current.filter(todo => todo.done===false)
        setMainList([...todoList.current])
    }

    return [todos, todoList.current, filter, onNewTodo, onDeleteTodo, onEditTodo, onToggleTodo, onToggleAll, onFilterChange, onClearCompleted]
    
}

export default useTodos