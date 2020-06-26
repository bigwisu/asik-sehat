import { useSelector } from 'react-redux'
import Photo from "./Photo"
import Comments from "./Comments"

function Single ({
    code
}){
    const { posts, comments} = useSelector((state) => ({
        posts: state.posts,
        comments: state.comments
    }))
    const i = posts.findIndex((post) => post.code === code);
    const post = posts[i]
    const postComments = comments[code] || [];
  
    return (
            <div className="single-photo">
                <Photo i={i} post={post} comments={comments} />
                <Comments postComments={postComments} code={code} />
            </div>
    )
  }
  
export default Single