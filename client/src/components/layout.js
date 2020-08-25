import React from 'react'
import BlogHeader from './blog/BlogHeader'

export default function Layout(props) {
    const isHome = (props.location.pathname === '/')

    return (
        <div className='container antialiased font-rubik p-6 flex flex-col items-center h-full text-copy'>
            {isHome ? <div /> : <BlogHeader />}
            {props.children}
        </div>
    )
}