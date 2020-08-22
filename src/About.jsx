import React from 'react'
import { contacts } from './data'

export default function About() {

    return (
        <div className='font-body font-light space-y-4'>
            <h1 className='font-semibold text-4xl'>Hello!</h1>
            <p className=''>My name's Leanna Resurreccion.</p>
            <p>
                I'm currently a 2nd year undergrad student studying computer science at the University
                of British Columbia in Vancouver, Canada. You can find all my projects 
                on <a class='lnk' href={contacts.github} target='_blank' rel='noreferrer'>Github</a> or <a class='lnk' href={contacts.devpost} target='_blank' rel='noreferrer'>Devpost</a>.
            </p>
            <p>
                Besides <a class='lnk' href={contacts.email}>e-mail</a>, you can also contact me on <a class='lnk' href={contacts.linkedin} target="_blank" rel='noreferrer'>Linkedin</a>.
            </p>
            <p>
                My most recent tech fixations are on programming language theory and scalability, but aside
                from computer-related things, I also like finding new music to listen to, reading, watching sci-fi 
                movies, my dog, and playing guitar.
            </p>
            <p>
                Click on the entries to the right to expand them!
            </p>
            <p>
                This website was built with Gatsby and TailwindCSS.
            </p>
        </div>
    )
}
