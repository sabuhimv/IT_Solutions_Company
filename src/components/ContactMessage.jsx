import React, { useState } from 'react'
import Button from './Button'
import './ContactMessage.css'
import swal from 'sweetalert';
import Swal from 'sweetalert2'
import { useEffect } from 'react';

const ContactMessage = () => {
    const handleSubmit = event => {
        event.preventDefault();
        Swal.fire(
            'Good job!',
            'You send the message!',
            'success'
        )
    };




    const reloadPage = () => {
        window.location.reload()
    }

    const [name, setName] = useState()
    const [number, setNumber] = useState()
    const [email, setEmail] = useState()
    const [url, setUrl] = useState()
    const [message, setMessage] = useState()

    // const resetForm = () => {
    //     setName("")
    //     setNumber("")
    //     setEmail("")
    //     setUrl("")
    //     setMessage("")
    // }

    const [formState, setFormState] = useState({})

    const changeHandler = (event) => {
        setFormState({ ...formState, [event.target.name]: event.target.value });
    };


    const submitHandlder = (event) => {
        event.preventDefault();
        const config = {
            SecureToken: '61363448-39a0-481d-9478-881636656550',
            To: 'sebuhimv@yopmail.com',
            From: formState.email,
            Subject: `${formState.name} send message`,
            Body: `${formState.message}  | Phone number : ${formState.number} | URL : ${formState.url}`
            
        }

        if (window.Email) {
            window.Email.send(config).then(() =>
                Swal.fire(
                    'Good job!',
                    'You send the message!',
                    'success'
                )
            );
        }
    }
    
    {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui-message-success">Uğurla göndərildi.</div>      
        ) : (
        console.log(JSON.stringify(formValues, undefined, 2))
      )} */}

    return (
        <div className='contact-message-container'>
            <div className="contact-message-title">
                <h2 className='capitalize-h2'>Send Us Message</h2>
                <h5>Don't Hesited To Contact With Us! Feel Free To Message Us</h5>
            </div>

            <form onSubmit={submitHandlder} className="contact-form">

                <div className='contact-form-group'>
                    <input type="text" name='name' value={formState.name || ''} onChange={changeHandler} pattern="[A-Za-z]{1,32}" minlength="3" required className='contact-form-element' placeholder='Full Name' />
                    <input type="text" name='number' value={formState.number || ''} onChange={changeHandler} className='contact-form-element' pattern="[0-9]{10}" minlength="3" required placeholder='Phone Number' />
                    <input type="email" name='email' value={formState.email || ''} onChange={changeHandler} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" className='contact-form-element' placeholder='Email Address' />
                    <input type="url" name='url' value={formState.url || ''} onChange={changeHandler} required className='contact-form-element' placeholder='Website' />
                </div>

                <div className='contact-form-group'>
                    <textarea name="message" value={formState.message || ''} onChange={changeHandler} required className='contact-form-element' placeholder='Write Message' id="" cols="30" rows="100"></textarea>
                </div>
                <div className='contact-form-button'>
                    <button type='submit' className='contact-message-button'>Send Message</button>
                </div>

            </form>
        </div>
    )
}

export default ContactMessage