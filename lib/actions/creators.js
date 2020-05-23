import ActionTypes from './types';
// import database from './database';

export function fetchPosts() {
    return dispatch => {
        database.ref('/posts').on('value', snapshot => {
            dispatch({
                type: ActionTypes.FetchPosts,
                payload: snapshot.val()
            });
        });
    };
}

export function fetchComments() {
    return dispatch => {
        database.ref('/comments').on('value', snapshot => {
            dispatch({
                type: ActionTypes.FetchComments,
                payload: snapshot.val()
            });
        });
    };
}

// increment
export function increment(index) {
    return {
        type: 'INCREMENT_LIKES',
        index
    }
}

// add comment
export function addComment(postId, author, comment) {

    const key = database.ref('/comments/').push().key;
    const updates = {};
    updates[key] = {
        user: author,
        text: comment
    }

    return dispatch => {
        database.ref('/comments/' + postId).update(updates);
    }
}

// remove comment
export function removeComment(postId, i) {

    return dispatch => database.ref('/comments/'+ postId + '/' + i).remove();

}