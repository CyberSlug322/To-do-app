import App from "./components/App.jsx"

import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import store, {persistor} from './redux/index'
import { PersistGate } from 'redux-persist/integration/react'

render (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <App/>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
)
