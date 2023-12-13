import { put, takeEvery, select } from 'redux-saga/effects';
import { GET_POST, setPost } from '../redux/actions';

function* fetchPosts(action) {
  try {
    const state = yield select();
    const cachedPosts = state.posts.cache[action.page];

    if (cachedPosts) {

      yield put(setPost(cachedPosts));
    } else {
      
      const response = yield fetch(`https://jsonplaceholder.typicode.com/posts?_page=${action.page}`);
      const data = yield response.json();

      yield put(setPost(data));

      yield put({
        type: 'UPDATE_CACHE',
        payload: { page: action.page, data },
      });
    }
  } catch (error) {
    console.error('Error fetching posts', error);
  }
}

function* postSaga() {
  yield takeEvery(GET_POST, fetchPosts);
}

export default postSaga;