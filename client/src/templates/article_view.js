import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'

export const query = graphql`
    query ArticleQuery($id: Int!) {
        strapiArticle(strapiId: {eq: $id}) {
            strapiId
            title
            content
        }
    }
    `


export default function ArticleView(props) {
    const article = props.data.strapiArticle;
    return (
        <Layout location={props.location}>
            <h1>{article.title}</h1>
            <p>{article.published_at}</p>
            <section>
                {article.content}
            </section>
        </Layout>
    )
}