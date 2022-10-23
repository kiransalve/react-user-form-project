import React from 'react'
import "./UserList.css"

const UsersList = (props) => {
    return (
        <div>
            <ul>
                {props.users.map((user) => (
                    <li key={user.id}>
                        {user.name} age is {user.age} and from {user.college}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default UsersList