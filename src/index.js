import React from 'react';
import ReactDOM from 'react-dom';

// Import css
import './styles/style.scss';

// Import Components
import Main from './components/Main';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// import react router deps
import { BrowserRouter, Route } from "react-router-dom";

import {Provider} from 'react-redux';
import store from './store';

const router = (
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Main />
                <Route exact path="/" component={PhotoGrid} />
                <Route path="/view/:postId" component={Single} />
            </div>
       </BrowserRouter>
    </Provider>
)

ReactDOM.render(router, document.getElementById('root'));

