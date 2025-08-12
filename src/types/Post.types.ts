import type { User } from "./User.types";
import type { Comment } from "./Comment.type";
import type { Vote } from "./Vote.type";

export type PostType = {
    id: number,
    user_id: number,
    user: User,
    created_at: Date,
    title: string,
    description: string,
    post_vote_total: number,
    post_comments: Array<Comment>
    post_votes: Array<Vote>
}