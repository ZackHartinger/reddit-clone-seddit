import PostHeader from './PostHeader'
import PostBody from './PostBody'
import PostFooter from './PostFooter'
import type { PostType } from '../../types/Post.types'

interface PostProps {
    post: PostType
}

const Post = ({ post }: PostProps) => {
    return (
        <div className='bg-[#0e1113] px-2 hover:bg-zinc-800 m-2 rounded'>
            <PostHeader />
            <PostBody title={post.title} content={post.description} />
            <PostFooter votes={post.post_vote_total} commentTotal={post.post_comments.length} />
            <hr className='border-[#3e4042] my-4' />
        </div>
    )
}

export default Post