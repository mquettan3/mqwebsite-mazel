import React, { useState } from 'react'
import { Icon } from 'react-icons-kit';
import { check, exclamationCircle } from 'react-icons-kit/fa';

// Require Axios for HTTP requests
const axios = require('axios');

const serverLocation = process.env.REACT_APP_SERVER_LOCATION;

export default function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [content, setContent] = useState("");

    const componentStates = {
        NORMAL: 'normal',
        LOADING: 'loading',
        SUCCESS: 'success',
        ERROR: 'error'
    }

    const [componentState, setComponentState] = useState(componentStates.NORMAL);

    const handleFormUpdate = (e) => {
        switch(e.currentTarget.id) {
            case "form-name": 
                setName(e.currentTarget.value);
                break;
            case "form-email": 
                setEmail(e.currentTarget.value);
                break;
            case "form-subject": 
                setSubject(e.currentTarget.value);
                break;
            case "form-message": 
                setContent(e.currentTarget.value);
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

        axios.post(serverLocation + '/.netlify/functions/send-contact-email', {
            name: name,
            email: email,
            subject: subject,
            details: content
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
    }

    return (
        <div>
            <form id="contact" className="row contact-form">
                <div className="col-md-12 text-center">
                    <h5 className="successContent">
                        <Icon className="left" icon={check} style={{color: "#5cb45d"}}></Icon>Your message has been sent successfully.
                    </h5>
                    <h5 className="errorContent" style={{color: "#e1534f"}}>
                        <Icon className="left" icon={exclamationCircle}></Icon>There was a problem validating the form please check!
                    </h5>
                </div>
                <div className="col-md-6">
                    <div className="form-field-wrapper">
                        <input className="input-md form-full" id="form-name" type="text" name="form-name" placeholder="Your Name" required value={name} onChange={handleFormUpdate}/>
                    </div>
                    <div className="form-field-wrapper">
                        <input className="input-md form-full" id="form-email" type="email" name="form-email" placeholder="Email" required value={email} onChange={handleFormUpdate} />
                    </div>
                    <div className="form-field-wrapper">
                        <input className="input-md form-full" id="form-subject" type="text" name="form-subject" placeholder="Subject" value={subject} onChange={handleFormUpdate} />
                    </div>
                </div>
                <div className="col-md-6 mb-0">
                    <div className="form-field-wrapper">
                        <textarea className="input-md form-full" id="form-message" rows="7" name="form-message" placeholder="Your Message" required value={content} onChange={handleFormUpdate}></textarea>
                    </div>
                </div>
                <div className="col-md-12 text-center">
                    <button className="btn-contact-submit btn btn-md btn-color" type="submit" id="form-submit" name="submit" onClick={handleFormSubmit}>Submit</button>
                </div>
            </form>
        </div>
    )
}