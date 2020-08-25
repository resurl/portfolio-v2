import React from 'react'

export default function Article({ title, body, id }) {

    const slug = id.split('_')[1]
    const preview = body.substring(0, 500)

    return (
        <div className='max-w-xl'>
            <a className='text-3xl font-semibold' href={`/blog/article/${slug}`}>{title}</a>
            <article>{preview}</article>
            <a className='text-gray-600' href={`/blog/article/${slug}`}>Read more</a>
        </div>
    )
}