import React, { useState } from 'react'
import Addtodo from './Addtodo'
import Alltodo from './Alltodo'
import { v4 as uuidv4 } from 'uuid';

const pretodos = [
    {
        id: uuidv4(),
        name: "This is todo One",
        status: false
    },
    {
        id: uuidv4(),
        name: "Have to go to Bazar",
        status: true
    },
    {
        id: uuidv4(),
        name: "Extra class next day",
        status: false
    },
    {
        id: uuidv4(),
        name: "Attend Class test",
        status: false
    }
]

const Index = () => {
    const [todos, setTodos] = useState(pretodos);

    const removetodo = (id) => {
        const updateTodos = todos.filter((item) => item.id !== id)
        setTodos(updateTodos)
    }

    const changeStatus = (id) => {
        const updateTodos = todos.filter((item) => {
            if(item.id == id){
                item.status = true
            }
            return item
        })
        setTodos(updateTodos)
    }

    const addTodo = (todo) => {
        const newTodo = {id: uuidv4(), ...todo}
        setTodos((preVious) => {
            return [
                ...preVious, newTodo
            ]
        })        
    }

    return (
        <div>
            <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
                <div className="bg-slate-300 rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
                    <Addtodo addTodo={addTodo} />
                    {todos && todos.map((item) => (
                        <Alltodo todos={item} key={item.id} removetodo={removetodo} changeStatus={changeStatus}/> 
                    ))}
                                    
                    {/* <div className="flex mb-4 items-center">
                        <p className="w-full line-through text-green">Submit Todo App Component to Tailwind Components</p>
                        <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-grey border-grey hover:bg-grey">Not Done</button>
                        <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red">Remove</button>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Index