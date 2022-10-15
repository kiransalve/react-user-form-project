import React from 'react'

const UsersList = (props) => {
    return (
        <div>
            <ul>
                {props.users.map((user) => {
                    <li>
                        {user.user-name}
                    </li>
                })}
            </ul>
        </div>
    )
}

export default UsersList