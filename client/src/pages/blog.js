import React from 'react'
import Layout from '../components/layout'
import BlogHome from '../components/blog/BlogHome'
import { StaticQuery, graphql} from 'gatsby'

function Blog(props) {

    const query = graphql`
        query {
            allStrapiArticle {
                edges {
                    node {
                        id
                        article_id
                        title
                        content
                        published_at
                    }
                }
            }
        }`
        
    return (
        <Layout className='' location={props.location}>
            <StaticQuery query={query}
                render={data => (
                    <BlogHome articles={data.allStrapiArticle.edges} />
                    )} />
        </Layout>
    )
}

export default Blog;