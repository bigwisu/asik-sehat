import { useSelector, useDispatch } from 'react-redux'
import { useRef } from "react"
import _ from 'lodash'

function Comments({
    postComments,
    code
}) {

    const comments = _.toPairs(postComments)
    // const inputAuthor = useRef(null);
    // const inputComment = useRef(null);


    const renderComment = (comment) => {
        return (
            <div className="comment" key={comment[0]}>
                <p>
                    <strong>{comment[1].user}</strong> {comment[1].text}
                    <button className="remove-comment" onClick={console.log('TODO')}>&times;</button>
                </p>
            </div>
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const postId = code
        // const author = this.refs.author.value
        // const comment = this.refs.comment.value
        // TODO this should work with redux actions
        // this.props.addComment(postId, author, comment);
        // this.refs.commentForm.reset();
    }

    return (
        <div className="comments">
            {comments.map(renderComment)}
            {/* TODO: Form handling */}
            {/* <form ref="commentForm" className="comment-form" onSubmit={handleSubmit}>
                <input type="text" ref="author" placeholder="author" ref={inputAuthor} />
                <input type="text" ref="comment" placeholder="comment" ref={inputComment} />
                <input type="submit" hidden />
            </form> */}
        </div>
    )

}
export default Comments


// import React, { Component } from 'react';
// import _ from 'lodash';

// class Comments extends Component {
//     constructor(props){
//         super(props);
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.renderComment = this.renderComment.bind(this);
//     }
    
//     renderComment(comment) {
//         return (
//             <div className="comment" key={comment[0]}>
//                 <p>
//                     <strong>{comment[1].user}</strong> {comment[1].text}
//                     <button className="remove-comment" onClick={console.log('TODO')}>&times;</button>
//                 </p>
//             </div>
//         )
//     }

//     handleSubmit(e) {
//         e.preventDefault();
//         const { postId } = this.props.match.params;
//         const author = this.refs.author.value;
//         const comment = this.refs.comment.value;
//         // TODO this should work with redux actions
//         // this.props.addComment(postId, author, comment);
//         this.refs.commentForm.reset();
//     }

//     render() {
//         const comments = _.toPairs(this.props.postComments);
//         return (
//             <div className="comments">
//                 {comments.map(this.renderComment)}
//                 <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
//                     <input type="text" ref="author" placeholder="author"/>
//                     <input type="text" ref="comment" placeholder="comment"/>
//                     <input type="submit" hidden />
//                 </form>
//             </div>
//         )
//     }
// };

// export default Comments;
