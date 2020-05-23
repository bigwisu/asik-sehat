import { useSelector, useDispatch } from 'react-redux'
import Photo from "./Photo";

const PhotoGrid = () => {

  const posts = useSelector((state) => state.posts)
  const comments = useSelector((state) => state.comments)

  return (
    <div className="photo-grid">
      {
        posts.map((post, i) => <Photo key={i} i={i} post={post} comments={comments} />)
      }
    </div>
  )
}

export default PhotoGrid