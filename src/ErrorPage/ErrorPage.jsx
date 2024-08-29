import React from 'react';
import PropTypes from 'prop-types';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = props => {

    const error = useRouteError()
    console.log(error);
    return (
        <div>
            <h2>oppsssss!!!</h2>
            <h4>{error.statusText}</h4>
            {
                error.status === 404 && <div>
                    <h3>Page Not found</h3>
                    <p>Go back</p>
                    <Link to='/'><button>Home</button></Link>
                </div>
            }

        </div>
    );
};

ErrorPage.propTypes = {
    
};

export default ErrorPage;