import React from 'react'
import { contacts } from './data'

export default function About() {

    return (
        <div className='font-rubik space-y-4'>
            <h1 className='font-semibold text-5xl'>Hello!</h1>
            <p>My name's Leanna Resurreccion.</p>
            <p>
                I'm currently a 2nd year computer science undergrad at the University
                of British Columbia in Vancouver, Canada. You can find all my projects 
                on <a className='lnk' href={contacts.github} target='_blank' rel='noreferrer'>Github</a>, <a className='lnk' href={contacts.devpost} target='_blank' rel='noreferrer'>Devpost</a> or 
                you can check out my <a className='lnk' href='/resume.pdf' target='_blank'>resume</a> for a summary of all that.
            </p>
            <p>
                Besides <a className='lnk' href={contacts.email}>e-mail</a>, you can also contact me on <a className='lnk' href={contacts.linkedin} target="_blank" rel='noreferrer'>Linkedin</a>.
            </p>
            <p>
                My most recent tech fixation is on programming language theory, but aside
                from computer-related things, I also like finding new music to listen to, reading, watching sci-fi 
                movies, my dog, and playing guitar.
            </p>
            <p className='invisible hidden sm:hidden md:visible md:contents lg:visible lg:contents xl:visible xl:contents'>
                Click on the entries to the right to expand them!
            </p>
            <p>
                This website was built with Gatsby and TailwindCSS.
            </p>
        </div>
    )
}
