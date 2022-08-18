import React from 'react'
import ReactDOM from 'react-dom/client'
import "antd/dist/antd.css";
import App from './App'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from "react-redux"
import { store } from './store/store';
import 'react-quill/dist/quill.snow.css';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>
)
