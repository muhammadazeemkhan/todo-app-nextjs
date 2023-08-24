import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [todos , setTodos] = useState([])
  const [todo , setTodo] = useState('')
  const [isEdit , setIsEdit] = useState(false)
  const [index , setIndex] = useState(null)


  const onChangeTodo =  e =>{
    setTodo(e.target.value)
  }
  // console.log(todo)

  const addTodo = ()=>{
    if(!todo) return alert('Please add some todos')
     let newTodoRef = todos
     newTodoRef.push(todo)
     setTodos([...newTodoRef])
     setTodo('')
  }


  const deleteTodo = (ind)=>{
    console.log(ind)
    let deletTodRef = todos
    deletTodRef.splice(ind , 1)
    setTodos([...deletTodRef])
  }

  const editTodo = (ind)=>{
    setIsEdit(true)
    // let editTodoRef = todos
    setTodo(todos[ind])
    setIndex(ind)
  }


  const updateTodo = ()=>{
    let updateTodoRef = todos
    updateTodoRef[index] = todo
    setTodos(updateTodoRef)
    setIsEdit(false)
    setIndex(null)
    setTodo('')

  }

  return (
    <main
      className={`flex flex-col items-center justify-between p-24 ${inter.className}`}
    >
     
    <h1 className={`text-red-900 border-2 border-black	rounded-lg p-2 shadow-lg

`}>Todo App Using Next Js And Tailwind css</h1>
<div className={`my-2 flex space-x-4`}>
<input value={todo} onChange={onChangeTodo} placeholder={`type something`} className={`border-2 border-black	rounded-lg p-2`} ></input>
<button onClick={()=> {isEdit? updateTodo() : addTodo()} } className={`border-2 border-black	rounded-lg p-2 shadow-lg bg-teal-500`}>{isEdit ? 'Updtae' : 'Add todo'}</button>
</div>

{
  todos.map((data,index)=>{
    return(
      <div key={index} className={'flex justify-between items-center p-2 w-[300px] bg-sky-600 my-2 p-2 rounded-md'}>
        <h1 className={'text-white'}>{data}</h1>
        <span>
          <button onClick={()=> editTodo(index)} className={'p-2 m-2 rounded-md bg-white'}>Edit</button>
          <button onClick={()=> deleteTodo(index)} className={'p-2 m-2 rounded-md bg-white'}>Delete</button>
        </span>
      </div>
    )
  })
}
    </main>
  )
}
