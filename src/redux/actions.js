export const LIKE_POST = 'LIKE_POST';
export const DISLIKE_POST = 'DISLIKE_POST';
export const GET_POST = 'GET_POST';
export const SET_POST = 'SET_POST';

export const getPost = (page) => {
    console.log('action getPost', page)
    return {
        type: GET_POST,
        page
    }
}

export const setPost = (payload) => {
    console.log('action setPost', payload);
    return {
        type: SET_POST,
        payload
    }
}

export const likePost = (postId) => ({
  type: LIKE_POST,
  payload: postId,
});

export const dislikePost = (postId) => ({
  type: DISLIKE_POST,
  payload: postId,
});
