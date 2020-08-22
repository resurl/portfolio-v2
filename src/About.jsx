import React from 'react'
import { contacts } from './data'

export default function About() {
    return (
        <div className='font-body space-y-4'>
            <h1 className='font-semibold text-4xl'>Hello!</h1>
            <p className='text-2xl'>My name's Leanna Resurreccion.</p>
            <p className=''>
                I'm currently a 2nd year undergrad student studying computer science at the University
                of British Columbia in Vancouver, Canada. You can find all my projects 
                on <a href={contacts.github} target='_blank' rel='noreferrer'>Github</a> or <a href={contacts.devpost} target='_blank' rel='noreferrer'>Devpost</a>.
            </p>
            <p>
                Besides <a href={contacts.email}>e-mail</a>, you can also contact me on <a href={contacts.linkedin} target="_blank" rel='noreferrer'>Linkedin</a>.
            </p>
            <p>
                My most recent tech fixations are on programming language theory and scalability, but aside
                from computer-related things, I also like finding new music to listen to, reading, watching sci-fi 
                movies, my dog, and playing guitar.
            </p>
            <p>
                Click on the text to the right to expand project details!
            </p>
        </div>
    )
}
