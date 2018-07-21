import React from 'react'
import ReactDOM from 'react-dom'

// using version 3.3.7 because bootstrap 4 is unstable
import 'bootstrap/dist/css/bootstrap.min.css' // if this is added, then immidiately this will change all UI's css style
// Question_7 :: Then How do we apply our own CSS
import './App.css' // Answer_7,, written in BEM naming metholodgy
// https://medium.com/witinweb/css-%EB%B0%A9%EB%B2%95%EB%A1%A0-1-bem-block-element-modifier-1c03034e65a1

// Question_8 :; We're going to define classes to our components that have been defined in the app.css file. How do you do that ? -> App.js

import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
