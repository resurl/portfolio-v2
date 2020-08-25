import React, { useState } from "react"
import Layout from '../components/layout'
import Home from '../components/Home'

export default function Index(props) {
  return (
    <Layout location={props.location}>
      <Home />
    </Layout>
  )
}