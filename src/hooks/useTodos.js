import {useState, useEffect, useReducer } from 'react'
import {findIndexbyId, isAllDone} from '../utils'

const initialState ={
        
    mainList:[],
    filter: 'All'
}

const todoReducer = (state, action)=>{
    console.log('action found'+action.type)
    switch(action.type){
        case 'NEW_TODO':
            console.log('add in reducer')
            
            const newItem = {
                id: state.mainList.length>0?state.mainList[state.mainList.length-1].id+1:1,
                text: action.payload,
                done: false
            }
            return{
                ...state,
                mainList: [ ...state.mainList,newItem]
            }
        case 'DELETE_TODO':
            console.log('delete in reducer')
            
            return {
                ...state,
                mainList: [...state.mainList].filter(todo => todo.id!== action.payload)
            }
        case 'EDIT_TODO':
            console.log('edit todo in reducer')
            const index = findIndexbyId(action.payload.id, state.mainList)
            let newList1 = [...state.mainList]
            newList1[index].text = action.payload.txt
            return {
                ...state,
                mainList: newList1
            }
        case 'TOGGLE_TODO': 
            console.log('toggle todo in reducer')
            
            return {
                ...state,
                mainList: [...state.mainList].map(todo=>({...todo, done : todo.id===action.payload? !todo.done: todo.done}))
            }
        case 'FILTER_CHANGE':
            return {
                ...state,
                filter: action.payload
            }
        case 'TOGGLE_ALL':
            console.log('toggle all in reducer')
            return {
                ...state,
                mainList: [...state.mainList].map(todo => {return {...todo, done: isAllDone(state.mainList)?false:true}})
            }
        case 'CLEAR_ALL':
            console.log('clear all in reducer')
            
            return {
                ...state,
                mainList: [...state.mainList].filter(todo=>todo.done===false)
            }
        default:
            return state
    }

}

const useTodos = ()=>{

    
    const [display, setDisplay] = useState([])

    
    
    const [state, dispatch] = useReducer(todoReducer, initialState)

    useEffect(()=>{
        
        if(state.filter=== 'All')
            setDisplay([...state.mainList])
       
        if(state.filter === 'Active'){
            const filtered = state.mainList.filter(todo => todo.done===false)
            setDisplay(filtered)
        }
        if(state.filter ==='Completed'){
            const filtered = state.mainList.filter(todo => todo.done ===true)
            setDisplay(filtered)
        }
    },[state.mainList, state.filter])

    return [state, display, dispatch]
    
}

export default useTodos