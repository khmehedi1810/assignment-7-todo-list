import React from 'react'

const Alltodo = ({todos, removetodo, changeStatus}) => {
    const {id, name, status} = todos;
    const handleChange = (id) => {
        changeStatus(id)
    }

    const handleRemove = (id) => {
        removetodo(id)
    }

    return (
        <div>
            <div className="flex mb-4 items-center">
                <p className={status ? "w-full text-grey-darkest line-through" : "w-full text-grey-darkest"}>{name}</p>
                <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 bg-white rounded hover:border-green-800 text-green border-green" disabled={status ? true : false} onClick={() => {handleChange(id)}}>{status ? "Done" : "Not Done"}</button>
                <button className="flex-no-shrink p-2 ml-2 border-2 rounded bg-white text-red border-red hover:border-orange-800" onClick={() => {handleRemove(id)}}>Remove</button>
            </div>
        </div>
    )
}

export default Alltodo