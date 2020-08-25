import React from 'react'
import Layout from '../components/layout'
import ArticleView from '../components/blog/ArticleView'
import { StaticQuery, graphql} from 'gatsby'

function Blog(props) {

    const query = graphql`
        query {
            allStrapiArticle {
                edges {
                    node {
                        id
                        title
                        content
                    }
                }
            }
        }`
    return (
        <Layout location={props.location}>
            <StaticQuery query={query}
                render={data => (
                    <ArticleView articles={data.allStrapiArticle.edges} />
                    )} />
        </Layout>
    )
}

export default Blog;