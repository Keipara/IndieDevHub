const LOAD = 'projects/LOAD_COMMENTS'

const loadComments = comments => ({
    type: LOAD,
    comments
})

export const loadProjectComments = (projectId) => async (dispatch) => {
    const response = await fetch(`/api/comments/${projectId}/comments`)

    if (response.ok) {
        const comments = await response.json();
        dispatch(loadComments(comments))
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
        default:
            return state;
    }
}

export default commentsReducer;
