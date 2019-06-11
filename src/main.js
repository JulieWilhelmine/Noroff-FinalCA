import 'styles/app.scss';
import React from 'react';
import { AppContainer } from 'react-hot-loader';
import ReactDOM from 'react-dom';
import {
    Route,
    Switch,
    HashRouter
} from 'react-router-dom';

import App from './components/App/App';
import LoginPage from './pages/login/login-page';
import CardsPage from './pages/cards/cards-page';
import CardSpecific from './pages/card-specific/card-specific-page';
import AboutPage from './pages/about/about-page';
import ContactPage from './pages/contact/contact-page';


const routes = (
    <HashRouter>
        <Switch>
            <App>
                <Route path="/" exact component={LoginPage} />
                <Route path="/cards-page" component={CardsPage} />
                <Route path="/card-specific-page/:id" component={CardSpecific} />
                <Route path="/about-page" component={AboutPage} />
                <Route path="/contact-page" component={ContactPage} />
            </App>
        </Switch>
    </HashRouter>
);

const outlet = document.getElementById('app')

const render = () => {
    ReactDOM.render(
        <AppContainer>
            {routes}
        </AppContainer>,
        outlet
    );
};

render();

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept(render);
}
