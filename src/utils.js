export const findIndexbyId = (id, arr)=>{
    for(let i=0; i<arr.length ; i++){
        if(arr[i].id===id){
            return i
        }
    }
    return -1
}

export const findItembyId = (id, arr)=>{
    for(let i=0; i<arr.length ; i++){
        if(arr[i].id===id){
            return arr[i]
        }
    }
    return null
}

export const isAllDone = (arr) =>{
    return arr.every(item => item.done === true)
}

export const isListEmpty =(arr) =>{
    return arr.length===0
}

export const isAllActive = (arr) =>{
    return arr.every(item => !item.done)
}

export const activeNum = (arr) =>{
    let sum = 0
    for(let i=0; i<arr.length; i++){
        if(!arr[i].done) sum++
    }
    return sum
}