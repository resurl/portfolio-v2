import React from 'react'
import Moment from 'react-moment'

export default function Article({ title, body, id, time }) {

    const slug = id.split('_')[1]
    const preview = body.substring(0, 500)
    const showMore = (body !== preview)

    return (
        <div className='max-w-xl'>
            <div className='flex flex-col -space-y-1'>
                <Moment className='text-gray-500' format='DD MMM YYYY'>{time}</Moment>
                <a className='text-3xl font-semibold' href={`/blog/article/${slug}`}>{title}</a>
            </div>
            <article>{preview}</article>
            {showMore ? <a className='text-gray-500 hover:text-gray-600' href={`/blog/article/${slug}`}>Read more</a> 
                : <div />}
            
        </div>
    )
}