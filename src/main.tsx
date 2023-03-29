import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import {BrowserRouter} from 'react-router-dom'
import {Routes, Route} from 'react-router-dom'
import Description from './components/Description';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

  <React.StrictMode>

    <BrowserRouter>
       <Routes>
          <Route path='/' element={<App />}/>
          <Route path='/:id' element={<Description/>}/>
        </Routes>
      {/* <App /> */}
    </BrowserRouter>
  </React.StrictMode>,
)
