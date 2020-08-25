import React from 'react'
import BlogHeader from './BlogHeader'

export default function Layout(props) {
    const isHome = (props.location.pathname === '/')

    return (
        <div className='container py-6 px-6 flex flex-col items-center w-full h-full text-copy'>
            {isHome ? <div /> : <BlogHeader />}
            {props.children}
        </div>
    )
}