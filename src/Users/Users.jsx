import React from 'react';
import PropTypes from 'prop-types';
import { useLoaderData } from 'react-router-dom';
import User from '../User/User';

const Users = props => {

    const users = useLoaderData()
    return (
        <div>
            <h2>all user: {users.length}</h2>
            <div className='user-box'>
            {
                users.map((user) => 
                    <User key={user.id} userProps = {user}></User>
                )
            }
            </div>
        </div>
    );
};

Users.propTypes = {
    
};

export default Users;