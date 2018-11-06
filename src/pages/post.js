import React from "react"
import Layout from "../components/postLayout/postLayout"
import { graphql } from "gatsby"
import { connect } from "react-redux"
import Cookies from 'universal-cookie'
import { navigate } from "gatsby"
import {vkUserAuth} from "../state/actions/vkUserAuth"

class PageLayout extends React.Component {    
    componentDidMount() {
        const cookies = new Cookies()
        const user = cookies.get("user")
        if (!user) navigate('/login/')
        const { data, setAccounts, setPosts } = this.props
        setAccounts(data["accounts"])
        setPosts(data["posts"])        
        this.props.update(user)
        // this.props.update()
    }
    render() {
        return <Layout />
    }
}
  
const mapDispatchToProps = dispatch => ({ 
    setAccounts: data => dispatch({ type: `SET_ACCOUNTS`, accounts: data }),
    setPosts: data => dispatch({ type: `SET_POSTS`, posts: data }),
    update: user => dispatch(vkUserAuth(user))
})

const ConnectedLayout = connect(
    null,
    mapDispatchToProps
)(PageLayout)

export default ({data}) => {
    const posts = data.allPostsJson.edges.map(it => it.node);
    console.log(posts);
    const accounts = data.allAccountsJson.edges.flatMap(node => Object.values(node)).map(it => it.name)
    return <ConnectedLayout data={{"accounts": accounts, "posts": posts}} />
}

export const query = graphql`
query {
    allPostsJson {
        edges {
          node {
            recipients {
              account,
              social,
              date,
              time
            },
            id,
            text
          }
        }
      },
    allAccountsJson {
        edges {
            node {
                name
            }
        }
    }
}`