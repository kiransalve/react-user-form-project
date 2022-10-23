import React, { useState, useRef } from 'react'
import "./User.css"
import Error from './Error'

const User = (props) => {
    const nameRef = useRef()
    const ageRef = useRef()
    const collegeRef = useRef()

    const [error, setError] = useState()

    const addUser = (event) => {
        event.preventDefault();
        const nameInputRef = nameRef.current.value
        const ageInputRef = ageRef.current.value
        const collegeInputRef = collegeRef.current.value

        if (nameInputRef.trim().length === 0 || ageInputRef.trim().length === 0 ||
            collegeInputRef.trim().length === 0) {
            setError({
                title: "Input input",
                message: "Please enter a valid name and age."
            })
            return
        }

        if (+ageInputRef < 1) {
            setError({
                title: "Input age",
                message: "Please enter a valid age (<1)"
            })
            return
        }

        props.onAddUser(nameInputRef, ageInputRef, collegeInputRef);
    }
    const errorHandaler = () => {
        setError(null)
    }

    return (
        <div className='user'>
            {error && <Error title={error.title} message={error.message} onConfirm={errorHandaler} />}

            <form onSubmit={addUser} className="userform">
                <label htmlFor="userName">User Name : </label>
                <input type="text" name="username" id="username"
                    ref={nameRef} />

                <label htmlFor="age">Age : </label>
                <input type="number" name="age" id="age" ref={ageRef} />

                <label htmlFor="college">College : </label>
                <input type="text" name='college' id="college" ref={collegeRef} />

                <button id="user" type='submit'>Add User</button>
            </form>
        </div>
    )
}

export default User