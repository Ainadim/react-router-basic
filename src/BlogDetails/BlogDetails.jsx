import React from 'react';
import PropTypes from 'prop-types';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';

const BlogDetails = () => {

    const blogDetails = useLoaderData()
    const navigate = useNavigate ()

    const {postId} = useParams()
    console.log(postId);

    const handleNavigate = () => {
        navigate(-1)
    }

    const {title, body} = blogDetails
    return (
        <div  className='user-single-box'>
            <h2>{title}</h2>
            <p>{body}</p>
            <button onClick={handleNavigate}>Go back</button>
        </div>
    );
};

BlogDetails.propTypes = {

};

export default BlogDetails;