import React from "react"
import Layout from '../components/layout'
import Home from '../components/Home/Home'

import { StaticQuery, graphql } from 'gatsby'

export default function Index(props) {

  const query = graphql`
      query {
        allStrapiProject(sort: {fields: when, order: DESC}) {
          edges {
            node {
              name
              type
              langs
              desc
              link
              when
            }
          }
        }
      }
    `

  return (
    <Layout location={props.location}>
      <StaticQuery query={query}
        render={data => <Home projects={data.allStrapiProject.edges} />} />
    </Layout>
  )
}