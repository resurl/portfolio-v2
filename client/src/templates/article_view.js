import { graphql } from 'gatsby'
import React from 'react'
import Moment from 'react-moment'
import ReactMarkdown from 'react-markdown'
import Layout from '../components/layout'

export const query = graphql`
    query ArticleQuery($id: Int!) {
        strapiArticle(strapiId: {eq: $id}) {
            strapiId
            title
            content
            created_at
        }
    }
    `

export default function ArticleView(props) {
    const article = props.data.strapiArticle;
    return (
        <Layout location={props.location}>
            <article className='font-rubik w-2/5'>
                <Moment className='text-base font-light text-gray-600' format='DD MMM YYYY'>
                    {article.created_at}
                </Moment>
                <h1 className='font-semibold text-4xl'>{article.title}</h1>
                <ReactMarkdown className='text-lg' source={article.content} /> 
            </article>
        </Layout>
    )
}