import { graphql } from 'gatsby'
import React from 'react'
import Moment from 'react-moment'
import ReactMarkdown from 'react-markdown'
import Layout from '../components/layout'

export const query = graphql`
    query ArticleQuery($id: String!) {
        strapiArticle(strapiId: {eq: $id}) {
            strapiId
            article_id
            title
            content
            published_at
        }
    }
    `

export default function ArticleView(props) {
    const article = props.data.strapiArticle;
    return (
        <Layout location={props.location}>
            <article className='font-rubik w-3/5'>
                <Moment className='text-base text-gray-600' format='DD MMM YYYY'>
                    {article.published_at}
                </Moment>
                <h1 className='font-semibold text-4xl mb-4 mt-0'>{article.title}</h1>
                <ReactMarkdown className='text-lg mb-4' source={article.content} /> 

                <a className='lnk text-lg' href='/blog' >Go back {`>`}</a>
            </article>
        </Layout>
    )
}