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
                <div>
                    <div className="owner-messages">
                        <div className="own-msg-test"key={comment?.id}>
                            <div className="edit-column">
                                <div className="user-time">
                                    <div style={{ fontWeight: 900, fontSize: 15 }}> {comment?.user?.username}</div>
                                </div>
                            </div>
                                <form className="updateMessageForm" onSubmit={updateMessage} autoComplete="off">
                                    <input
                                        type="text"
                                        value={messageBody}
                                        required
                                        autoComplete="off"
                                        onChange={(e) => setMessageBody(e.target.value)}
                                        className="edit-input"
                                        onKeyDown={(e) => {if (e.key === 'Enter'){updateMessage()}}}
                                    />
                                    <div className="edit-buttons">
                                        <button onClick={() => setShowEdit(false)}>
                                            <div className="editChannelIcons">
                                                <i className="edit-hyper">cancel</i>
                                            </div>
                                        </button>
                                        <button type="submit">
                                            <div className="editChannelIcons" id="leftIcon">
                                                <i className="edit-hyper">save</i>
                                            </div>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                </div>
            )}
            {showDelete && (
                <div className="addModal" id="addServerModal">
                    <div className="modal-container">
                        <div className="top-part">
                            <h3 id="deleteMessageHeader">Delete Message</h3>
                            <h5 id="deleteMessageSubHeader" >Are you sure you want to delete this message? </h5>
                                <div className="message-preview">
                                    <div className="comment-bottom-half">
                                        <div className="comment-header">
                                        {comment?.user?.username}
                                        </div>
                                        <div className="comment-message">
                                            {comment?.message}
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div className="bottom-part">
                            <div id="deleteMessage" onClick={handleDelete}>Delete</div>
                            <div id="cancelMessage" onClick={handleCancel}>Cancel</div>
                        </div>
                    </div>
                </div>

            )}
        </div>

    )
}

export default EditableComment;
