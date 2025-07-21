import PostHeader from './PostHeader'
import PostBody from './PostBody'
import PostFooter from './PostFooter'

const Post = () => {
    return (
        <div className='bg-[#0e1113] px-2 hover:bg-zinc-800 m-2 rounded'>
            <PostHeader />
            <PostBody />
            <PostFooter />
            <hr className='border-[#3e4042] my-4' />
        </div>
    )
}

export default Post