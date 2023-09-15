import { useAddReactionMutation } from './postsSlice'

const reactionEmoji = {
  thumbsUp: '👍',
  wow: '😮',
  heart: '❤️',
  rocket: '🚀',
  coffee: '☕'
}

const ReactionButtons = ({ post }) => {
  const [addReaction] = useAddReactionMutation()
  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <span key={`emoji${name}`}>
        <button
          style={{ cursor: 'pointer' }}
          type="button"
          className="reactionButton"
          onClick={() => {
            const newValue = post.reactions[name] + 1
            addReaction({
              postId: post.id,
              reactions: { ...post.reactions, [name]: newValue }
            })
          }}
        >
          <span style={{ cursor: 'pointer' }}>{emoji}</span>
          {post.reactions[name]}
        </button>
      </span>
    )
  })
  return <div>{reactionButtons}</div>
}

export default ReactionButtons
