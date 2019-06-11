// imports
import React from 'react';
import Layout from '../../components/layout/Layout';
import ContactComponent from '../../components/contact/Contact';
import NavigationComponent from '../../components/navigation/Navigation';


export default class ContactPage extends React.Component {



    render() {
        const app = this;
        return (
            <div className="[ row ]">
                           <div className="[ col-sm-12 ]">
            <NavigationComponent></NavigationComponent>
            </div>
            
                <div className="[ col-sm-12 ] [ contact__text ]">
                    <h2>Contact us...</h2>
                </div>

                <div className="[ col-sm-12 ]">
                <ContactComponent></ContactComponent>
                </div>
            </div>
        );
    }
}