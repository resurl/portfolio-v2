import React from 'react'

export default function Article({ title, body, id }) {

    const slug = id.split('_')[1]

    return (
        <div className='border-solid border-2 p-8 border-gray-500 rounded-md'>
            <a className='text-3xl font-semibold' href={`/blog/article/${slug}`}>{title}</a>
            <article>{body}</article> 
        </div>
    )
}