import React from "react"
import Layout from "../components/postLayout/postLayout"
import { graphql } from "gatsby"
import { connect } from "react-redux"

class PageLayout extends React.Component {    
    componentDidMount() {
        const { data, setAccounts } = this.props
        setAccounts(data)
    }
    render() {
        return <Layout />
    }
}
  
const mapDispatchToProps = dispatch => ({ 
    setAccounts: data => dispatch({ type: `SET_ACCOUNTS`, accounts: data }) 
})

const ConnectedLayout = connect(
    null,
    mapDispatchToProps
)(PageLayout)

export default ({data}) => {
    const accounts = data.allAccountsJson.edges.flatMap(node => Object.values(node)).map(it => it.name)
    return <ConnectedLayout data={accounts} />
}

export const query = graphql`
query {
    allAccountsJson {
        edges {
            node {
                name
            }
        }
    }
}`