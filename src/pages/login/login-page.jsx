// imports
import React from 'react';
import Layout from '../../components/layout/Layout';
import LoginComponent from '../../components/login/Login-Component';


export default class LoginPage extends React.Component {
    constructor(props) {
		super(props);
		this.state = {
			isUsername: false,
			isPassword: false
		}
		this.parentLogin = this.parentLogin.bind(this);
        }
        
        componentDidMount(){
            localStorage.setItem('username', 'Julie');
            localStorage.setItem('password', '@1234');
        }
        
      parentLogin = (username,password) => {
        let app = this;

		if (localStorage.getItem('username') === username && localStorage.getItem('password') === password) {
			sessionStorage.setItem('AuthToken', 'sa6d456sd6a6ad6s');
			app.props.history.push('/cards-page');
		}
		if (localStorage.getItem('username') !== username) {
			app.setState({ isUsername: 'Please enter the correct username' });
        } else {
            app.setState({ isUsername: '' });
        }
		if (localStorage.getItem('password') !== password) {
			app.setState({ isPassword: 'Please enter the correct password' });
		} else {
            app.setState({ isPassword: '' });
    }
}


    render() {
        const app = this;
        return (
            <div className="[ row ]">
                <div className="[ col-sm-12 ] [ login__text ]">
                    <h2>Login to continue...</h2>
                </div>

                <div className="[ col-sm-12 ]">
                <LoginComponent childLogin={this.parentLogin}
                                usernameError={app.state.isUsername}
                                passwordError={app.state.isPassword}>
                </LoginComponent>
                </div>
            </div>
        );
    }
}
