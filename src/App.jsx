import { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './Components/Login/Login'
import Navbar from './Components/Navbar/Navbar'
import SubmitSong from './Components/SubmitSong/SubmitSong'
import VoteBox from './Components/VoteBox/VoteBox'

function App() {
  const [user, setUser] = useState(null)
  const [songs, setSongs] = useState([])
  const [announcement, setAnnouncement] = useState(false)


  useEffect(() => {
    fetch(`http://localhost:4000/songs`).then(resp => resp.json())
      .then(songsFromServer =>
        setSongs(songsFromServer)
      )
  }, [])


  useEffect(() => {
    if (localStorage.token) {
      fetch(`http://localhost:4000/validate`,
        {
          headers: {
            'Authorization': localStorage.token
          }
        }
      ).then(resp => resp.json())
        .then(userFromServer => setUser(userFromServer))
    }
  }, [])

  return (
    <div className="App">
      {!user ? <Login user={user} setUser={setUser} /> :
        <>
          <Navbar setUser={setUser}></Navbar>
          <Routes>
            <Route index element={<Navigate replace to='/votebox' />} />
            <Route path='/yourvibe' element={
              <SubmitSong user={user} songs={songs} setSongs={setSongs} />
            } />
            <Route path='/votebox' element={<VoteBox songs={songs} setSongs={setSongs} user={user} setAnnouncement={setAnnouncement} announcement={announcement} />} />
          </Routes></>

      }
    </div>
  )
}

export default App
