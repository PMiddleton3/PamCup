import React from 'react';
import ReactDOM from 'react-dom';

function Pens() {
    return (
        <div id="penPhotos">
        <h1>Examples of my Previous Work</h1>
        <section id="penContainer">         
            <img class="penPic" src="Images/Pen1.jpg" alt="Variety of Pen Styles"  />
            <img class="penPic" src="Images/Pen2.jpg" alt="Beach Pens"  />
            <img class="penPic" src="Images/Pen3.jpg" alt="Swirl Pens"  />
            <img class="penPic" src="Images/Pen4.jpg" alt="Flag Pens"  />
            <img class="penPic" src="Images/Pen5.jpg" alt="Pencil Pens"  />
        </section>
        </div>
    );
}

export default Pens;