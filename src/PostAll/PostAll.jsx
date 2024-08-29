import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import BlogDetails from '../BlogDetails/BlogDetails';

const PostAll = ({postALL}) => {
    const {id, title} = postALL
    const navigate = useNavigate()

    const handleUseNavigate = () => {
        navigate(`/post/${id}`)
    }

    return (
        <div className='user-single-box'>
            <h2>{title}</h2>
            <button onClick={handleUseNavigate}>Click here</button>
        </div>
    );
};

PostAll.propTypes = {
    
};

export default PostAll;