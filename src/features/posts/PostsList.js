import { useSelector } from 'react-redux'
import { getPostsError, getPostsStatus, selectPostIds } from './postsSlice'

import React from 'react'
import PostsExcerpt from './PostsExcerpt'

const PostsList = () => {
  const orderedPostIds = useSelector(selectPostIds)
  const postStatus = useSelector(getPostsStatus)
  const error = useSelector(getPostsError)

  let content
  if (postStatus === 'loading') {
    content = <p>"Loading..."</p>
  } else if (postStatus === 'succeeded') {
    content = orderedPostIds.map((postId, index) => {
      return <PostsExcerpt key={`post${index}`} postId={postId} />
    })
  } else if (postStatus === 'failed') {
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
