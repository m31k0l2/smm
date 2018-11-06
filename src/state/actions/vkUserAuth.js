export const vkUserAuth = user => dispatch => {
    if (!user) return
    const {social, userID, name, token} = user
    if (name) {
        dispatch({
            type: `AUTH`,
            user: user
          })  
        return
    }
    const url = `http://localhost:3000/vk/${userID}?access_token=${token}`
    fetch(url, {mode: 'cors'})
    .then(res => res.json())
    .then(json => json.response)
    .then(data => {
        const {first_name, last_name} = data[0]    
        const user = {social: social, token: token, userID: userID, name: `${first_name} ${last_name}`}
        dispatch({
            type: `AUTH`,
            user: user
        })        
        return user
    }).then(user => {
        const {social, userID, token, name} = user
        fetch(`http://localhost:3000/accounts/reg/${social}/${userID}?accessToken=${token}&name=${name}`, {mode: 'cors'})
    })
    .catch(e => console.error(e))
}

export const vkAddUser = user => dispatch => {
    if (!user) return
    dispatch({type: `ADD_ACCOUNT_START`})
    const {social, userID, token} = user
    let url = `http://localhost:3000/${social}/${userID}?access_token=${token}`
    fetch(url, {mode: 'cors'})
    .then(res => res.json())
    .then(json => json.response)
    .then(data => {
        const {first_name, last_name} = data[0]    
        const user = {social: social, token: token, userID: userID, name: `${first_name} ${last_name}`}
        return user
    }).then(user => {
        
    })
}