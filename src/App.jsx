import React from 'react'
import Navbar2 from './components/Navbar/Navbar2'
import Data from './components/Data/Data'
import Calendar from './components/Celender/Calendar'
import Messages from "./components/Message/Messages"
import OverviewPage from './components/Overview/OverviewPage';
import Dashboard from './components/Dashboard/Dashboard';
import Timeline from './components/Timeline/Timeline'
import Project from './components/Project/Project'
import Form from './components/Form/Form'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>

    <Router>
        <Navbar2 />
        <Routes>
          <Route path='/Status' element={<Data/>} />
          <Route path='/Dashboard' element={<Dashboard/>} />
          <Route path='/Overview' element={<OverviewPage/>} />
          <Route path='/Project' element={<Project />} />
          <Route path='/Timeline' element={<Timeline/>} />
          <Route path='/Calendar' element={<Calendar/>} />
          <Route path='/Messages' element={<Messages/>} />
          <Route path='/Login/Signup' element={<Form/>} />

        </Routes>
      </Router>
    </div>
  )
}

export default App