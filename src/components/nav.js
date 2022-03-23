import React from 'react';
import ReactDOM from 'react-dom';

function Nav() {
    return (
        <div className="index-container">
            <ul class="nav">
                <a id="navButton" href='/'>Home</a>
                <a id="navButton" href='cups'>Cups</a>
                <a id="navButton" href='pens'>Pens</a>
            </ul>
        </div>
    );
}

export default Nav;