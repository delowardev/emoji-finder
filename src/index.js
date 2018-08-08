import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import {Provider} from 'react-redux'
import store from './store'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import './styles/index.css'

const template = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(template, document.getElementById('root'))