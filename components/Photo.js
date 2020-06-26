import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'

function Photo({
    post,
    comments,
    i
}) {

    const dispatch = useDispatch()
    const increment = (index) =>
        dispatch({
            type: 'INCREMENT_LIKES',
            index
        })

    return (
        <figure className="grid-figure">
            <div className="grid-photo-wrap">
                <Link href="/view/[code]" as={`/view/${post.code}`}>
                    <a>
                        <img src={post.display_src} alt={post.caption} className="grid-photo" />
                    </a>
                </Link>
            </div>
            <figcaption>
                <div className="control-buttons">
                    <button className="likes" onClick={increment.bind(null, i)} >
                        &hearts; {post.likes}
                    </button>
                    <button className="button">
                        <span className="comment-count">
                                <span className="speech-bubble"></span>
                                  &nbsp;{ (comments[post.code]) ? Object.keys(comments[post.code]).length : 0}
                        </span>
                    </button>
                </div>
                <p>{post.caption}</p>
            </figcaption>
        </figure>
    )
}

export default Photo