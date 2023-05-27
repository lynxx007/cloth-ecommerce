import React, { useState } from 'react';
import { Container, FormGroup, Heading2, Input, Label, SubmitButton, TextArea } from './contact.styles';

const ContactPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);
        // Reset form fields
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <Container>
            <Heading2>Contact Us</Heading2>
            <form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="name">Your Name:</Label>
                    <Input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="email">Your Email:</Label>
                    <Input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="message">Message:</Label>
                    <TextArea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    ></TextArea>
                </FormGroup>
                <SubmitButton type="submit" value="Submit" />
            </form>
        </Container>
    );
};

export default ContactPage;
