import React from 'react'
import BlogHeader from './blog/BlogHeader'

export default function Layout(props) {
    const isHome = (props.location.pathname === '/')
    let styles = 'container antialiased font-rubik p-6 flex flex-col items-center text-copy '
    
    if (isHome) {
        styles += 'h-full'
    } else {
        styles += 'min-h-full'
    }

    return (
        <div className={styles}>
            {isHome ? <div /> : <BlogHeader />}
            {props.children}
        </div>
    )
}