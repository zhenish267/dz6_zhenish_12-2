import React from 'react';

function UsersList({ users, name }) {
    return (
        <ul>
            {
                users.length > 0
                    ?
                    users.map((user, key) => <li key={ key }>{ user }</li>)
                    :
                    <h1>ПОЛЬЗОВАТЕЛЕЙ НЕТ</h1>

            }

        </ul>
    );
}


export default UsersList;