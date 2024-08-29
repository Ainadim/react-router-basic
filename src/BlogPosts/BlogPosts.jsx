import React from 'react';
import PropTypes from 'prop-types';
import { useLoaderData } from 'react-router-dom';
import PostAll from '../PostAll/PostAll';

const BlogPosts = props => {

    const allPost = useLoaderData()
    return (
        <div>
            <h2>All blog</h2>
            <div  className='user-box'>
                {
                    allPost.map((e, idx) => <PostAll key={idx} postALL={e} ></PostAll>)
                }
            </div>
        </div>
    );
};

BlogPosts.propTypes = {

};

export default BlogPosts;