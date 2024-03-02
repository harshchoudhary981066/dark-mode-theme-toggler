import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {

//This statement is used to fetch data of user using the 'user' argument
    const {user} = useContext(UserContext)
    
    if (!user) return <div>please login</div>

    return <div>Welcome {user.username}</div>
}

export default Profile