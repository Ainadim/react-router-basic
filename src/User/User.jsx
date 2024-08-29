import React from 'react';
import PropTypes from 'prop-types';
import "./User.css"
import { Link } from 'react-router-dom';

const User = ({userProps}) => {
    const {id, name } = userProps
    return (
        <div className='user-single-box'>
            <h2>Name: {name}</h2>
            <Link to={`/user/${id}`}>Click me {id}</Link>            
            
        </div>
    );
};

User.propTypes = {
    
};

export default User;