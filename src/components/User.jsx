import React, { useState } from 'react'
import "./User.css"
import UsersList from './UsersList'

const User = (props) => {
    const [userName, setUserName] = useState("")
    const [age, setAge] = useState("")

    const userNameFunction = (event) => {
        setUserName(event.target.value)
    }
    const ageFunction = (event) => {
        setAge(event.target.value)
    }

    const addUser = (event) => {
        event.preventDefault();
        if (userName.trim().length === 0 || age.trim().length === 0) {
            return;
        }

        if (+age < 1) {
            return
        } console.log(age, userName)
        setUserName("")
        setAge("")
    }
    return (
        <div className='user'>
            <form onSubmit={addUser} className="userform">
                <label htmlFor="userName">User Name : </label>
                <input type="text" name="username" id="username" value={userName} onChange={userNameFunction} />
                <label htmlFor="age">Age : </label>
                <input type="number" name="age" id="age" value={age} onChange={ageFunction} />
                <button id="user">Add User</button>
            </form>
            <UsersList user-name={userName} age={age}/>
        </div>
    )
}

export default User