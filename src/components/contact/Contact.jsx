// imports
import React from 'react';

export default class ContactComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            firstError: '',
            lastError: '',
            mailError: '',
            phoneError: ''
        };
    }

    handleFirstNameChange = (e) => {
        this.setState({ firstName: e.target.value });
    };
    handleLastNameChange = (e) => {
        this.setState({ lastName: e.target.value });
    };
    handleEmailChange = (e) => {
        this.setState({ email: e.target.value });
    };
    handlePhoneNumberChange = (e) => {
        this.setState({ phoneNumber: e.target.value });
    };

    submitContact = () => {

        let app = this;
        let first = app.state.firstName;
        let last = app.state.lastName;
        let phone = app.state.phoneNumber;
        let mail = app.state.email;
        let firstRGEX = /^[a-zA-Z]+$/;
        let lastRGEX = /^[a-zA-Z]+$/;
        let phoneRGEX = /^[0-9]{3}[-\s.][0-9]{3}[-\s.][0-9]{4}$/;
        let mailRGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        let firstResult = firstRGEX.test(first);
        let lastResult = lastRGEX.test(last);
        let phoneResult = phoneRGEX.test(phone);
        let mailResult = mailRGEX.test(mail);

        if (firstResult === false) {
            app.setState({ firstError: 'Please enter your first name' });
        }
        else{
            app.setState({ firstError: ''});
        }
        if (lastResult === false) {
            app.setState({ lastError: 'Please enter your last name' });
        }
        else{
            app.setState({ lastError: ''});
        }
        if (phoneResult === false) {
            app.setState({ phoneError: 'Please enter your phone number' });
        }
        else{
            app.setState({ phoneError: ''});
        }

        if (mailResult === false) {
            app.setState({ mailError: 'Please enter your email' });
        }
        else{
            app.setState({ mailError: ''});
        }

        if(firstResult && lastResult && phoneResult && mailResult){
            alert("form submitted!")
        }
    }

    render() {
        return (
            <div className="[ row ] [ contact ]">
                <form className="[ contact__form ]">
                    <b className="[ contact__title ]">Name:</b><input className="[ contact__input ] [ contact__input--first ]" type="text" name="firstName" placeholder="Ola" value={this.state.firstName} onChange={this.handleFirstNameChange} />
                    <span className="[ contact__error ]"><i>{this.state.firstError}</i></span>
                    <br />
                    <b className="[ contact__title ]">Last name:</b><input className="[ contact__input ] [ contact__input--last ]" type="text" name="lastName" placeholder="Nordmann" value={this.state.lastName} onChange={this.handleLastNameChange} />
                    <span className="[ contact__error ]"><i>{this.state.lastError}</i></span>
                    <br />
                    <b className="[ contact__title ]">Email:</b><input className="[ contact__input ] [ contact__input--mail ]" type="email" name="email" placeholder="email@mail.com" value={this.state.email} onChange={this.handleEmailChange} />
                    <span className="[ contact__error ]"><i>{this.state.mailError}</i></span>
                    <br />
                    <b className="[ contact__title ]">Phone number:</b><input className="[ contact__input ] [ contact__input--phone ]" type="text" name="phoneNumber" placeholder="xxx xxx xxxx" value={this.state.phoneNumber} onChange={this.handlePhoneNumberChange} />
                    <span className="[ contact__error ]"><i>{this.state.phoneError}</i></span>
                    <button type="button" className="[ contact__button ]" onClick={this.submitContact}>Submit</button>
                </form>
            </div>
        );
    }
}