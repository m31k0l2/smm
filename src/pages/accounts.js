import React from "react"
import Layout from "../components/accountsLayout/accountLayout"
import {connect} from "react-redux"
import Cookies from 'universal-cookie'
import { navigate } from "gatsby"
import {vkUserAuth} from "../state/actions/vkUserAuth"

class AccLayout extends React.Component {    
    componentDidMount() {
        const cookies = new Cookies()
        const user = cookies.get("user")
        if (!user) navigate('/login/')
        const { data, setAccounts } = this.props
        setAccounts(data)
        this.props.update(user)        
    }
    render() {        
        const hash = window.location.hash;        
        if (hash !== "") {
            const token = /access_token=([^&]+)/g.exec(hash)[1];
            const id = /user_id=([^&]+)/g.exec(hash)[1];
            const user = {social: "vk", token: token, userID: id, name: null}
            console.log(user)
            this.props.addAccount(user)
        }
        return <Layout />
    }
}
  
const mapDispatchToProps = dispatch => ({ 
    setAccounts: data => dispatch({ type: `SET_ACCOUNTS`, accounts: data }),
    update: user => dispatch(vkUserAuth(user)),
    addAccount: user => dispatch({ type: `ADD_ACCOUNT`, user: user})
})

const ConnectedLayout = connect(
    null,
    mapDispatchToProps
)(AccLayout)

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