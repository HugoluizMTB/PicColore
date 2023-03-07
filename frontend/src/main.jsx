import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import App from './App'
import FullTable from './components/fullTable.component'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />}/>
        <Route path='/fulltable' element={<FullTable />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
