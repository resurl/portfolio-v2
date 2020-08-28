import React from 'react'
import { Link } from 'gatsby'

const contacts = {
    email: 'mailto:leanna.resurreccion@gmail.com',
    linkedin: 'https://linkedin.com/in/leanna-resurreccion-b3b54a130',
    devpost: 'https://devpost.com/resurreccionl?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav',
    github: 'https://github.com/resurreccionl'
}

export default function About() {

    return (
        <div className='font-rubik text-xs space-y-3 leading-4 sm:text-lg sm:space-y-3 sm:leading-7 md:text-lg lg:text-xl'>
            <div>
                <h1 className='font-semibold text-3xl sm:text-5xl '>Hello!</h1>
                <p className='invisible hidden text-sm text-gray-600 sm:visible sm:inline-block'>
                    Click the entries to the right or "Expand all" to see project details!
                </p>
            </div>
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
                My most recent tech fixation is programming language theory, but aside
                from computer-related things, I also like film, discovering new music, my dog, and reading!
            </p>
            <p className='sm:invisible sm:hidden'>Admittedly, this site's a little less plain on screen sizes greater than 640px.</p>
            <p>
                This website was built with Gatsby, Strapi, and TailwindCSS.
            </p>
        </div>
    )
}
