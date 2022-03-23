import React from 'react';
import ReactDOM from 'react-dom';

function Contact() {
    return (
        <div className="index-container">
            <h2>Ready to Get Started? Contact us today.</h2>
        <h4>Call Us: (330) 555-2747</h4>
        <h4>Email Us: <a href="mailto:pwray1@kent.edu">pwray1@email.com</a> </h4>
        <h4>Visit Us at: 4314 Mahoning Ave., Warren, OH 44483</h4>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.382395408505!2d-80.83973008482715!3d41.27878137927433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88316174c9bf6835%3A0x56ff808e4740d891!2s4314%20Mahoning%20Ave%20NW%2C%20Warren%2C%20OH%2044483!5e0!3m2!1sen!2sus!4v1644196426501!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>
    );
}

export default Contact;