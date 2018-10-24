import React from "react"
import Layout from "../components/postLayout/postLayout"
import { graphql } from "gatsby"

export default ({data}) => { <Layout /> }

export const query = graphql`
query {
    allAccountsJson {
        ...AccountsFragment
    }
}`