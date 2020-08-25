import React from 'react'

export default function Article({title, body}) {
    return (
        <div className='border-solid border-2 p-8 border-gray-500 rounded-md'>
            <h1 className='text-3xl font-semibold'>{title}</h1>
            <article>{body}</article> 
        </div>
    )
}