import { useState } from 'react'
import './index.css'
import Navbar from './components/Navbar/Navbar'
import Post from './components/Post/Post'
import Dashboard from './components/Dashboard/Dashboard'
import LogInModal from './components/LogInModal/LogInModal'

function App() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const toggleShowModal = () => {
    setShowModal(!showModal);
  }
  return (
    <div className={showModal ? 'h-screen overflow-hidden' : 'h-screen'}>
      {showModal ?
        <LogInModal toggleModal={toggleShowModal} /> :
        <></>
      }
      <Navbar toggleModal={toggleShowModal} />
      <div className="flex xl:justify-center">
        <div className="hidden lg:block mt-3 ml-3">
          <Dashboard />
        </div>
        <div className="flex-col xl:w-200">
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
