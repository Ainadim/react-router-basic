import React from 'react';
import PropTypes from 'prop-types';
import { useLoaderData } from 'react-router-dom';

const UserDetails = props => {
    const user = useLoaderData()
    const {name, email, website, address} = user
    return (
        <div>
            <h2>Name: {name}</h2>
            <h4>Email: {email}</h4>
            <h6>Website: {website}</h6>
            <h6>City: {address.city}</h6>
        </div>
    );
};

UserDetails.propTypes = {
    
};

export default UserDetails;