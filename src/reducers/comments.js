import ActionTypes from '../actions/types';

function postComments(state = [], action) {
  switch(action.type){
    case ActionTypes.AddComment :
      // return the new state with the new comment
      return [...state,{
        user: action.author,
        text: action.comment
      }];
    case ActionTypes.RemoveComment :
      // we need to return the new state without the deleted comment
      return [
        // from the start to the one we want to delete
        ...state.slice(0,action.i),
        // after the deleted one, to the end
        ...state.slice(action.i + 1)
      ]
    default:
      return state;
  }
  // return state;
}

function comments(state = [], action) {
  switch(action.type) {
    case ActionTypes.FetchComments:
      return action.payload;
    default:
       if(typeof action.postId !== 'undefined') {
         return {
           // take the current state
           ...state,
           // overwrite this post with a new one
           [action.postId]: postComments(state[action.postId], action)
         }
       }

       return state;

  }
}

export default comments;
