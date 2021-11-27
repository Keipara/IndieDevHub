const LOAD = 'comments/LOAD_COMMENTS'
const UPDATE_COMMENT = 'comments/UPDATE_COMMENTS'
const DELETE_COMMENT = 'comments/DELETE_COMMENTS'

const loadComments = comments => ({
    type: LOAD,
    comments
})

const updateComment = comments => {
    return {
        type: UPDATE_COMMENT,
        comments
    }
}

const deleteComment = comment_id => {
  return {
    type: DELETE_COMMENT,
    comment_id
  }
}

export const loadProjectComments = (projectId) => async (dispatch) => {
    const response = await fetch(`/api/comments/${projectId}/comments`)

    if (response.ok) {
        const comments = await response.json();
        dispatch(loadComments(comments))
    }
}

export const updateCommentMessage = (comment_id, project_id, user_id, message) => async (dispatch) => {
    const response = await fetch(`/api/comments/${comment_id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          comment_id,
          project_id,
          user_id,
          message,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        dispatch(updateComment(data))
        return null;
      } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
          return data.errors;
        }
      } else {
        return ['An error occurred. Please try again.']
      }
}

export const deleteSingleComment = (comment_id) => async (dispatch) => {
  const response = await fetch(`/api/comments/${comment_id}`, {
      method: 'DELETE',
      body: JSON.stringify({comment_id})
  });

  if (response.ok) {
    dispatch(deleteComment(comment_id))
    return null;
  } else {
    return ['An error occurred. Please try again.']
  }
}

let initialState = {comments: null};

const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD:
            const allComments = {};

            for (let comment of action.comments.comments) {
                allComments[comment.id] = comment;
              };
            return allComments
    case UPDATE_COMMENT:
            return {
                ...state,
                [action.comment?.id]: action.comment,
            }
    case DELETE_COMMENT:
        const newState = {...state}
        delete newState[action.comment_id];
        return newState;
    default:
        return state;
    }
}

export default commentsReducer;
