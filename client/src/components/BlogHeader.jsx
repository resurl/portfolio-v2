import React from 'react'
import { Link } from 'gatsby'

function NavLink(props) {
    return (
        <li className='lnk'>
            <Link to={props.to}>{props.children}</Link>
        </li>
    )
}

export default function BlogHeader() {
    
    return (
        <header class='flex flex-col sm:flex-row w-full justify-center items-center sm:justify-between'>
            <Link className='text-lg font-semibold' to='/'>Leanna Resurreccion</Link>
            <ul className='list-none flex justify-around space-x-8'>
                <NavLink>Home</NavLink >
                <NavLink>Articles</NavLink>
                <NavLink>Tags</NavLink>
            </ul>
        </header>
    );
}