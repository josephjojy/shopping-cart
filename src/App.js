import { Route, Routes, BrowserRouter} from 'react-router-dom';
import React from 'react';
import Dashboard from './components/Dashboard';
import './App.css'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App