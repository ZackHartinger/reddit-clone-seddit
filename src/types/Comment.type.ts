import type { User } from "./User.types"
import type { Vote } from "./Vote.type"

export type Comment = {
    id: number,
    user_id: number,
    post_id: number,
    reply_id: number,
    text: string,
    comment_vote_total: number
    user: User,
    replies: Array<Comment>
    comment_votes: Array<Vote>
}