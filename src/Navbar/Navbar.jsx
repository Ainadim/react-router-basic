import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import "./Navbar.css"

const Navbar = props => {
    return (
        <div>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/users'>Users</Link>
                <Link to={'/posts'}>Posts</Link>
            </nav>
        </div>
    );
};

Navbar.propTypes = {
    
};

export default Navbar;