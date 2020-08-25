import React from 'react'
import { contacts } from './data'
import { Link } from 'gatsby'

export default function About() {

    return (
        <div className='font-rubik space-y-2'>
            <h1 className='font-semibold text-3xl sm:text-4xl '>Hello!</h1>
            <p>My name's Leanna Resurreccion.</p>
            <p>
                I'm currently a 2nd year computer science undergrad at the University
                of British Columbia in Vancouver, Canada. You can find all my projects 
                on <a className='lnk' href={contacts.github} target='_blank' rel='noreferrer'>Github</a>, <a className='lnk' href={contacts.devpost} target='_blank' rel='noreferrer'>Devpost</a> or 
                you can check out my <a className='lnk' href='/resume.pdf' target='_blank'>resume</a> for a summary of all that.
            </p>
            <p>
                Besides <a className='lnk' href={contacts.email}>e-mail</a>, you can also contact me on <a className='lnk' href={contacts.linkedin} target="_blank" rel='noreferrer'>Linkedin</a>, and
                I keep a <Link className='lnk' to='/blog'>blog</Link>!
            </p>
            <p>
                My most recent tech fixation is on programming language theory, but aside
                from computer-related things, I also like film, discovering new music, my dog, and reading!
            </p>
            <p className='invisible hidden sm:visible sm:inline-block'>
                Click on the entries to the right or the "Expand all" to reveal details about the project!
            </p>
            <p className='sm:invisible sm:hidden'>Admittedly, this site's a little less plain on desktop.</p>
            <p>
                This website was built with Gatsby, Strapi, and TailwindCSS.
            </p>
        </div>
    )
}
