import React from 'react'
import Layout from '../components/layout'

export default function NotFound(props) {
    return (
        <Layout location={props.location}>
            <p>Oh no! Something went wrong :(</p>
            <Link className='lnk'  to='/'>Go back {`>`}</Link>
        </Layout>
    )
}