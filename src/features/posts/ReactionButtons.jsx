import { useDispatch } from 'react-redux';
import { reactionAdded } from './postsSlice';

const reactionEmoji = {
    thumbsUp: "👍",
    wow: "😮",
    heart: "💔",
    rocket: "🚀",
    coffee: "☕",
}

const ReactionButtons = ({ post }) => {
    const dispatch = useDispatch();

    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
        return (
            <button
                key={name}
                type='button'
                className='reaction-button'
                onClick={() => dispatch(reactionAdded({ postId: post.id, reaction: name }))}
            >
                {emoji} {post.reactions ? post.reactions[name] : 0}
            </button>
        )
    });

    return (
        <div>
            {reactionButtons}
        </div>
    );
}

export default ReactionButtons;
