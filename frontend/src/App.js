import React from 'react';
import { Provider } from 'react-redux';
import store from './store/Store';
import Router from './Router';


const App = () => {

    return (
        <Provider store={store}>
            <Router />
        </Provider>
    );
};

export default App;
