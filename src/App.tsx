import { useState } from 'react'
import './index.css'
import Navbar from './components/Navbar/Navbar'
import Post from './components/Post/Post'
import Dashboard from './components/Dashboard/Dashboard'
import LogInDialog from './components/LogInDialogue/LogInDialog'

function App() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const toggleShowModal = () => {
    setShowModal(!showModal);
  }
  return (
    <div className='h-screen'>
      {showModal ?
        <LogInDialog toggleModal={toggleShowModal} /> :
        <></>
      }
      <Navbar toggleModal={toggleShowModal} />
      <div className="flex">
        <div className="hidden lg:block mt-3 ml-3">
          <Dashboard />
        </div>
        <div className="flex-col">
          <Post />
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
        </div>
      </div>
    </div>
  )
}

export default App
