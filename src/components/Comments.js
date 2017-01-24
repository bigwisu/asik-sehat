import React from 'react';
import _ from 'lodash';

const Comments = React.createClass({
    renderComment(comment) {
        return (
            <div className="comment" key={comment[0]}>
                <p>
                    <strong>{comment[1].user}</strong> {comment[1].text}
                    <button className="remove-comment" onClick={this.props.removeComment.bind(null, this.props.params.postId, comment[0])}>&times;</button>
                </p>
            </div>
        )
    },
    handleSubmit(e) {
        e.preventDefault();
        const { postId } = this.props.params;
        const author = this.refs.author.value;
        const comment = this.refs.comment.value;
        this.props.addComment(postId, author, comment);
        this.refs.commentForm.reset();
    },
    render() {
        const comments = Object.entries(this.props.postComments);
        // const comments = _.toPairs(this.props.postComments); //podho ae...
        return (
            <div className="comments">
                {comments.map(this.renderComment)}
                <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
                    <input type="text" ref="author" placeholder="author"/>
                    <input type="text" ref="comment" placeholder="comment"/>
                    <input type="submit" hidden />
                </form>
            </div>
        )
    }
});

export default Comments;
