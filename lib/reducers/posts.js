import ActionTypes from '../actions/types';

function posts(state = [], action) {
  switch(action.type) {
    case ActionTypes.FetchPosts :
      return action.payload;
    case ActionTypes.IncrementLikes :
      console.log("Incrementing Likes!!");
      const i = action.index;
      return [
        ...state.slice(0,i), // before the one we are updating
        { ...state[i], likes: state[i].likes + 1},
        ...state.slice(i + 1), // after the one we are updating
      ]
    default:
      return state;
  }
}

export default posts;
