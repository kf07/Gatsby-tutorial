import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const Text = styled.p`
    color:red
    `

const IndexPage = () => (
  <Layout>
    <h1>Hi peoples</h1>
    <Text>Welcome to your new Gatsby site.</Text>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
