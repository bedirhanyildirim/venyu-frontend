import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider} from 'react-redux'
import store from './stores/index'
import { BrowserRouter } from "react-router-dom"
import App from './App'
import './index.css'
import Loader from './components/loader';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={ store }>
    <BrowserRouter>
      <Loader />
      <App />
    </BrowserRouter>
  </Provider>
)