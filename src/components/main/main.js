import React from "react"
import styles from "./main.module.scss"
import Footer from '../footer/footer'
import Button from '../button/button'
import Dialog from "../dialog/dialog"
import { connect } from "react-redux"
import AccountLink from "../accountLink/accountLink"

const Post = ({post, udpateCurrentPost}) => {
    const {time, date, account, social, text, recipients} = post;
    console.log(recipients)
    const clickPostHandler = () => udpateCurrentPost(post);
    return (
        <div className={styles.postWrapper} onClick={clickPostHandler}>
            <div>
                { recipients.map(
                    ( recipient, index ) => <div key={index}><span>{recipient.time}</span><span>{recipient.date}</span></div>
                )}
                <span>{time}</span><span>{date}</span>
            </div>
            <div>
                { recipients.map(
                    ( recipient, index ) => <div key={index}><AccountLink title={recipient.account} isClickable={false}/></div>
                )}                
            </div>
            <div>{text}</div>
        </div>
    )
}

const PostContainer = ({posts, udpateCurrentPost}) => {
    if (posts.length === 0) return <span className={styles.nothingYet}>Пока ничего не запланировано!</span>
    return (
        <div className={styles.postCantainer}>
            { posts.map(
                ( post, index ) => <Post post={post} key={index} udpateCurrentPost={udpateCurrentPost}></Post>
            )}
        </div>
    )
}

class Main extends React.Component {
    state = {
        dialog: null,
        currentPost: null
    }

    udpateCurrentPost = post => {
        this.setState({currentPost: post});
        this.dialog.showModal();
    }
    
    show = () => { 
        this.setState({currentPost: null});
        this.dialog.showModal();
    }
    
    render() {
        const { ACCOUNTS, POSTS } = this.props;
        return (
            <div className={styles.main}>        
                <div className={styles.content}>           
                    <Dialog ref={ref => { this.dialog = ref }} accounts={ACCOUNTS} post={this.state.currentPost}/> 
                    <span style={{fontSize: "0.8em"}} onClick={this.show}><Button title="Запланировать пост" color="blue" icon="post"/></span>                    
                    <PostContainer posts={POSTS} udpateCurrentPost={this.udpateCurrentPost} />                    
                </div>
                <Footer />
            </div>
        )
    }
}
  
export default connect(({ ACCOUNTS, POSTS }) => ({ ACCOUNTS, POSTS }), null)(Main)