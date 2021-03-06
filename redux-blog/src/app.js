/**
 * Created by jiaojiaodebook on 17/1/18.
 */
import ReactDOM from 'react-dom';
import routes from './routes/';

import React from 'react';
import configureStore from './redux/configureStore';
import {Provider} from 'react-redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {hashHistory} from 'react-router';

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render((
        <Provider store={store}>
          {routes(history)}
        </Provider>
    ),
    document.getElementById('root'));