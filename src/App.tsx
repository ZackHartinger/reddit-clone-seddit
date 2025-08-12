import { useState, useEffect } from 'react'
import './index.css'
import Navbar from './components/Navbar/Navbar'
import Post from './components/Post/Post'
import Dashboard from './components/Dashboard/Dashboard'
import LogInModal from './components/LogInModal/LogInModal'
import type { PostType } from './types/Post.types'


function App() {
  const baseUrl = import.meta.env.VITE_SEDDIT_BASE_URL;
  const [showModal, setShowModal] = useState<boolean>(false);
  const [posts, setPosts] = useState<PostType[]>([])
  const toggleShowModal = () => {
    setShowModal(!showModal);
  }

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await fetch(baseUrl + 'posts')
        const json = await response.json();
        if (response.ok) {
          console.log(json)
          setPosts(json)
        }
      }
      catch (error) {
        console.log(error)
      }
    }

    getPosts();
  }, [])


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
          {posts.map(post =>
            <Post post={post} />
          )}
        </div>
      </div>
    </div>
  )
}

export default App
