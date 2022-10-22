import React, { useState } from 'react'
import "./User.css"
import Error from './Error'

const User = (props) => {
    const [userName, setUserName] = useState("")
    const [age, setAge] = useState("")
    const [error, setError] = useState("")

    const userNameFunction = (event) => {
        setUserName(event.target.value)
    }
    const ageFunction = (event) => {
        setAge(event.target.value)
    }

    const addUser = (event) => {
        event.preventDefault();
        if (userName.trim().length === 0 || age.trim().length === 0) {
            setError({
                title: "Input input",
                message: "Please enter a valid string"
            })
            return
        }

        if (+age < 1) {
            setError({
                title: "Input age",
                message: "Please enter a valid age"
            })
            return
        }

        props.onAddUser(userName, age);
        setUserName("")
        setAge("")

    }
    const errorHandaler = () => {
        setError(null)
    }

    return (
        <div className='user'>
            {error && <Error title={error.title} message={error.message} onConfirm={errorHandaler} />}

            <form onSubmit={addUser} className="userform">
                <label htmlFor="userName">User Name : </label>
                <input type="text" name="username" id="username" value={userName} onChange={userNameFunction} />

                <label htmlFor="age">Age : </label>
                <input type="number" name="age" id="age" value={age} onChange={ageFunction} />

                <button id="user" type='submit'>Add User</button>
            </form>
        </div>
    )
}

export default User