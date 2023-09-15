import PostsExcerpt from './PostsExcerpt'
import { useGetPostsQuery } from './postsSlice'

const PostsList = () => {
  const {
    data: posts,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetPostsQuery('getPosts')

  let content
  if (isLoading) {
    content = <p>"Loading..."</p>
  } else if (isSuccess) {
    content = posts.ids.map((postId, index) => {
      return <PostsExcerpt key={`post${index}`} postId={postId} />
    })
  } else if (isError) {
    content = <p>{error}</p>
  }

  return (
    <section>
      <h2>Posts</h2>
      {content}
    </section>
  )
}
export default PostsList
