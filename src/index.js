import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import {Provider} from 'react-redux'
import store from './store'
import 'bootstrap/dist/css/bootstrap-grid.min.css'

const template = (
    <Provider store={store}>
        <App />
    </Provider>
)

store.subscribe(() => {
    console.log(store.getState().filterEmoji)
})

ReactDOM.render(template, document.getElementById('root'))