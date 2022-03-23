import React from 'react';
// import ReactDOM from 'react-dom';
// import {BrowserRouter as Router} from 'react-router-dom';
import '../styling/index.css';
import Footer from './footer.js'
import Nav from './nav.js'

function Home() {
    return (
        <div class="container">
    <figure> 
        <h1>Panes &amp; My Glasses</h1>
        <figcaption>Providing customized, top quality products</figcaption>
        <img src='images/cupMain.jpg' alt="2 Cups - Hawiian Print" />
    </figure>
    <article>
        <h3>About Me and My Cups</h3>
        <aside>
            <img src="images/pammiddleton.jpg" alt="Self image - Pam Middleton" />
        </aside>
        <p1>I was born in a small town in Ohio where I was raised by one of the most amazingly creative women I have
            ever met. I am so lucky to be able to create beautiful things everyday and I would love to create something unique for
            you to love. Panes &amp; My Glasses was started in 2019 and has been growing ever since.  Products can be custom designed
            to what you would like, or you can choose something from deisgns I have already done.
        </p1>
    </article>
    <div>
        <div>
            <img src='images/PenMain.jpg' alt='Examples of Glitter Pens'/>
        </div>
        <div>
            {/* <a href=contactme.html>Contact Me</a> */}
        </div>
        <div>
            {/* <a href="blog.html">Blog</a> */}
        </div>
        <img src='images/MiscMain.jpg' alt='Example of Badge Holder' />
        </div>
        <Footer/>
    </div>
    
    ); 
}

export default Home;