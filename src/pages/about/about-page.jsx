// imports
import React from 'react';
import AboutComponent from '../../components/about/about-component';
import NavigationComponent from '../../components/navigation/Navigation';

export default class About extends React.Component {
constructor(props) {
    super(props);
}

    render() {
        const app = this;

        return (
            <div className="[ row ]">
               <div className="[ col-sm-12 ]">
                   <NavigationComponent></NavigationComponent>
                </div>
                <div className="[ col-sm-12 ]">
                    <AboutComponent></AboutComponent>
                </div>
            </div>
        );
    }
}