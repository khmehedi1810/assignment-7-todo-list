import React, { useState } from 'react'

const Addtodo = ({addTodo}) => {
  const [data, setData] = useState('')

  const takeData = (e) => {
    setData(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const todo = {name: data, status: false}
    addTodo(todo)
    setData('')
  }
  return (
    <div className="mb-4">
        <h1 className="text-grey-darkest text-2xl font-bold text-center">Todo List</h1>
        <div className="">
            <form onSubmit={handleSubmit} className='flex mt-4'>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Add Todo" value={data} onChange={takeData}/>
              <button type='submit' className="flex-no-shrink p-2 border-2 rounded text-teal bg-white border-teal hover:border-lime-500">Add</button>
            </form>
        </div>
    </div>
  )
}

export default Addtodo