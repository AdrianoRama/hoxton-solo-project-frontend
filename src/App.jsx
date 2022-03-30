import { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './Components/Login/Login'
import Navbar from './Components/Navbar/Navbar'
import SubmitSong from './Components/SubmitSong/SubmitSong'
import VoteBox from './Components/VoteBox/VoteBox'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route index element={<Navigate replace to='/vibez' />} />
        <Route path='/vibez' element={<Login />} />
        <Route path='/yourvibe' element={(
          <><Navbar />
            <SubmitSong /></>)} />
        <Route path='/votebox' element={(
          <><Navbar />
            <VoteBox /></>)} />
      </Routes>
    </div>
  )
}

export default App
