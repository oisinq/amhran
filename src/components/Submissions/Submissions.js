import React from 'react';
import './Submissions.css';

const Submissions = () => {
    return(
    <div>
        <form className="mainy pure-form pure-form-stacked" method="POST" name="musicSubmission">
            <input type="hidden" name="form-name" value="musicSubmission" />
            <input className="formElement" name="track" placeholder="Song name and artist" type="text"/>
            <input className="formElement" name="link" placeholder="Link (We'll share whichever streaming site you use)" type="text"/>
            <input className="formElement" name="email" placeholder="Your email" type="email"/>
            <textarea className="formElement" name="message" placeholder="Extra details/requests"></textarea>
            <button className="formElement pure-button pure-button-primary" type="submit">Send</button>
        </form>
    </div>
);
}

export default Submissions;