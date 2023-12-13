import { combineReducers } from 'redux';
import { SET_POST } from './actions';

const initialState = {
  posts: [],
  cache: {},
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POST:
      return {
        ...state,
        posts: [...state.posts, ...action.payload],
      };
    case 'UPDATE_CACHE':
      const { page, data } = action.payload;
      return {
        ...state,
        cache: {
          ...state.cache,
          [page]: data,
        },
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  posts: postReducer,
});

export default rootReducer;