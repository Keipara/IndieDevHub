import React, { useState } from 'react';
import {  useDispatch } from 'react-redux';
import { deleteSingleComment } from '../../store/comment';
import { updateCommentMessage } from '../../store/comment';
import { useHistory } from 'react-router';
import { loadProjectComments } from '../../store/comment';

function EditableComment({userId, projectId, comment}) {
    const dispatch = useDispatch();
    const project_id = projectId;
    const comment_id = comment?.id;
    const history = useHistory()
    const user_id = userId;
    const [messageBody, setMessageBody] = useState(comment?.message);

    const [showEdit, setShowEdit] = useState(false);
    const [showDelete, setShowDelete] = useState(false)

    const handleCancel = () => {
        setShowDelete(false)
    }

    const handleDelete = async (e) => {

        e.preventDefault();

        const data = await dispatch(deleteSingleComment(comment_id))
        if (data) {
        } else {
            setShowDelete(false)
        }
    }

    const updateMessage = async (e) => {
        e?.preventDefault();

        await dispatch(updateCommentMessage(comment_id, project_id, user_id, messageBody))
        setShowEdit(false)
        dispatch(loadProjectComments(project_id))
        return () => {
            history.push(`/projects/${comment?.project_id}`)
        }

    }

    return (
        <div className="messageNameHolder" id="editableComment">
            {!showEdit && !showDelete && (
                <div className="individual-comment">
                    <div className="text-header">
                        <div style={{ fontWeight: 900, fontSize: 15 }} className='comment-username'> {comment?.user?.username}</div>
                        <div className="owner-comment-buttons">
                            <div className="comment-edit" id="leftIconMessage" onClick={() => setShowEdit(true)}>
                                Edit
                            </div>
                            <div className="comment-delete" onClick={() => setShowDelete(true)}>
                                Delete
                            </div>
                        </div>
                    </div>
                    <div className="comment-message">
                        {comment?.message}
                    </div>
                </div>
            )}
            {showEdit && (
                <div className="individual-comment">
                        <div style={{ fontWeight: 900, fontSize: 15 }} className='comment-username'> {comment?.user?.username}</div>
                        <form className="updateMessageForm" onSubmit={updateMessage} autoComplete="off">
                            <input
                                type="text"
                                value={messageBody}
                                required
                                autoComplete="off"
                                onChange={(e) => setMessageBody(e.target.value)}
                                className="comment-input"
                                onKeyDown={(e) => {if (e.key === 'Enter'){updateMessage()}}}
                            />
                            <div className="edit-buttons">
                                <div type="submit">
                                    <div className="editChannelIcons" id="leftIcon">
                                        <text className="edit-button">save</text>
                                    </div>
                                </div>
                                <div onClick={() => setShowEdit(false)}>
                                    <div className="editChannelIcons">
                                        <text className="edit-button">cancel</text>
                                    </div>
                                </div>
                            </div>
                        </form>
                </div>
            )}
            {showDelete && (
                    <div className="delete-container">
                        <div className="delete-text">
                            This cannot be undone. You must be absolutely sure before you go off and push this button. I'm serious, no takebacks.
                        </div>
                        <div className="delete-buttons">
                            <div id="delete-delete" onClick={handleDelete}>Delete</div>
                            <div id="cancel-delete" onClick={handleCancel}>Cancel</div>
                        </div>
                    </div>

            )}
        </div>

    )
}

export default EditableComment;
