import React from "react"
import Layout from '../components/layout'
import Home from '../components/Home/Home'

export default function Index(props) {
  return (
    <Layout location={props.location}>
      <Home />
    </Layout>
  )
}