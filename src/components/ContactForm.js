import React, { useState } from 'react'
import { Icon } from 'react-icons-kit';
import { check, exclamationCircle } from 'react-icons-kit/fa';

// Require Axios for HTTP requests
const axios = require('axios');

var serverLocation = process.env.GATSBY_SERVER_LOCATION;

export default function ContactForm() {
    const [name, setName] = useState({isValid: false, value: ""});
    const [email, setEmail] = useState({isValid: false, value: ""});
    const [subject, setSubject] = useState({isValid: false, value: ""});
    const [content, setContent] = useState({isValid: false, value: ""});
    const [hasSubmitted, setHasSubmitted] = useState(false);

    const componentStates = {
        NORMAL: 'normal',
        LOADING: 'loading',
        SUCCESS: 'success',
        ERROR: 'error',
        INVALID: 'invalid'
    }

    const [componentState, setComponentState] = useState(componentStates.NORMAL);

    const handleFormUpdate = (e) => {
        let valid = false;
        switch(e.currentTarget.id) {
            case "form-name":
                if (e.currentTarget.value.length > 0) {
                    valid = true;
                }
                setName({isValid: valid, value: e.currentTarget.value});
                break;
            case "form-email": 
                if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)) {
                    valid = true;
                }
                setEmail({isValid: valid, value: e.currentTarget.value});
                break;
            case "form-subject": 
                if (e.currentTarget.value.length > 0) {
                    valid = true;
                }
                setSubject({isValid: valid, value: e.currentTarget.value});
                break;
            case "form-message": 
                if (e.currentTarget.value.length > 0) {
                    valid = true;
                }
                setContent({isValid: valid, value: e.currentTarget.value});
                break;
            default:
                break;
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(name);
        console.log(email);
        console.log(subject);
        console.log(content);

        // Start loading animation
        setComponentState(componentStates.LOADING);
        setHasSubmitted(true);

        if(typeof severLocation === 'undefined') {
            serverLocation = "https://www.marcusquettan.com"
        }

        if (name.isValid &&
            email.isValid &&
            subject.isValid &&
            content.isValid ) {
                axios.post(serverLocation + '/.netlify/functions/send-contact-email', {
                    name: name,
                    email: email,
                    subject: subject,
                    content: content
                }).then(function (response) {
                    // handle success   
                    console.log(response);
        
                    // Pop up a success alert
                    setComponentState(componentStates.SUCCESS);
                }).catch(function (error) {
                    // handle error
                    console.log(error);
            
                    // Pop up an error alert
                    setComponentState(componentStates.ERROR);
                });
            } else {
                // Pop up an invalid content alert
                setComponentState(componentStates.INVALID);
            }
    }

    return (
        <div>
            <form id="contact" className="row contact-form">
                <div className="col-md-6">
                    <div className="form-field-wrapper">
                        <input className="input-md form-full" id="form-name" type="text" name="form-name" placeholder="Your Name" required value={name.value} onChange={handleFormUpdate}/>
                        {((!name.isValid) && hasSubmitted) && <small style={{color: "#e1534f", textShadow: "2px 2px #000000"}}>Please provide your name!</small>}
                    </div>
                    <div className="form-field-wrapper">
                        <input className="input-md form-full" id="form-email" type="email" name="form-email" placeholder="Email" required value={email.value} onChange={handleFormUpdate} />
                        {((!email.isValid) && hasSubmitted) && <small style={{color: "#e1534f", textShadow: "2px 2px #000000"}}>Please provide a valid email address!</small>}
                    </div>
                    <div className="form-field-wrapper">
                        <input className="input-md form-full" id="form-subject" type="text" name="form-subject" placeholder="Subject" value={subject.value} onChange={handleFormUpdate} />
                        {((!subject.isValid) && hasSubmitted) && <small style={{color: "#e1534f", textShadow: "2px 2px #000000"}}>Please provide a subject for your message!</small>}
                    </div>
                </div>
                <div className="col-md-6 mb-0">
                    <div className="form-field-wrapper">
                        <textarea className="input-md form-full" id="form-message" rows="7" name="form-message" placeholder="Your Message" required value={content.value} onChange={handleFormUpdate}></textarea>
                        {((!content.isValid) && hasSubmitted) && <small style={{color: "#e1534f", textShadow: "2px 2px #000000"}}>Please provide some content for your message!</small>}
                    </div>
                </div>
                <div className="col-md-12 text-center">
                    <button className="btn-contact-submit btn btn-md btn-color" type="submit" id="form-submit" name="submit" onClick={handleFormSubmit} disabled={componentState === componentStates.LOADING}>Submit</button>
                </div>
            </form>
            <div className="col-md-12 text-center">
                {(componentState === componentStates.SUCCESS) && <h5 className="successContent">
                    <Icon className="left" icon={check} style={{color: "#5cb45d"}}></Icon>Your message has been sent successfully.
                </h5>
                }
                {(componentState === componentStates.INVALID) && <h5 className="errorContent">
                    <Icon className="left" icon={exclamationCircle} style={{color: "#e1534f"}}></Icon>There was a problem validating the form please check!
                </h5>}
                {(componentState === componentStates.ERROR) && <h5 className="errorContent">
                    <Icon className="left" icon={exclamationCircle} style={{color: "#e1534f"}}></Icon>There was an error sending your email.  Please validate that you have provided a valid email.  If this problem persists, please email me directly at mquettan@gmail.com!
                </h5>}
            </div>
        </div>
    )
}