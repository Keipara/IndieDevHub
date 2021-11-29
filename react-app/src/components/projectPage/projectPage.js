import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory} from "react-router-dom";
import { loadProjects } from '../../store/project';
import { loadRoles } from '../../store/role';
// import Calendar from 'react-calendar';
import { NavLink } from 'react-router-dom';
import { deleteSingleProject } from '../../store/project';
import { addNewComment, loadProjectComments } from '../../store/comment';
// import ProtectedRoute from '../auth/ProtectedRoute';
import EditableComment from './editableComment';
import './projectPage.css'
function ProjectsPage() {
    //react setup
    const dispatch = useDispatch();
    const {id} = useParams()
    const projectId = parseInt(id)
    const history = useHistory()

    //project redux
    const projects = useSelector(state => Object.values(state?.projects));
    const singleProject = projects.find(project => project?.id === parseInt(id))
    const roles = useSelector(state => Object.values(state?.roles));
    const projectRoles = roles.filter(role => role?.project_id === parseInt(id))
    const projectUser = useSelector(state => (state?.session?.user));

    //edit and delete
    const [showEditButton, setShowEditButton] = useState(false);
    const [showDeleteButton, setShowDeleteButton] = useState(false);
    const [showDelete, setShowDelete] = useState(false);

    //comments
    const [comment, setComment] = useState("")
    const comments = useSelector(state => Object.values(state.comments));
    const userId = useSelector(state => state.session.user?.id);


    //functions
    useEffect(() => {
        dispatch(loadProjects())
    }, [dispatch])

    useEffect(() => {
        dispatch(loadRoles())
    }, [dispatch])


    useEffect(() => {
        if (projectUser?.id === singleProject?.user?.id) {
            setShowEditButton(true)
            setShowDeleteButton(true)
        }
    }, [projectUser?.id, singleProject?.user?.id])

    useEffect(() => {
        dispatch(loadProjectComments(projectId))
    }, [dispatch, projectId])

    const handleSubmit = async(e) => {
        e.preventDefault();
        // let newErrors = [];
        await dispatch(addNewComment(projectId, userId, comment))
        // window.scroll(0, document.querySelector(".messages-div").scrollHeight)
        setComment("")

      };

    const handleDelete = async (e) => {

        e.preventDefault();

        await dispatch(deleteSingleProject(id))
        history.push('/projects')
    }

    const handleCancel = () => {
        setShowDelete(false)
    }

    return (
        <>
            <div className="project-page-container">
                <div className="project-page-top">
                    {singleProject?.name}
                </div>
                <div className="project-page-middle">
                    <div className="middle-left">
                        {showEditButton && showDeleteButton && (
                        <div className='owner-actions'>
                            <div className='owner-heading'>Project Owner Actions</div>
                            <div className='owner-body'>
                                <NavLink to={`/projects/${id}/edit`} >
                                    <div className='owner-button'>
                                        <div className='owner-button-text'>
                                            Edit
                                        </div>
                                    </div>
                                </NavLink>
                                <div onClick={() => setShowDelete(true)} className='owner-button'>
                                    <div className='owner-button-text'>
                                        Delete
                                    </div>
                                </div>
                            </div>
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
                        <div className='left-column'>
                            <div className="project-image">
                                <img
                                src={singleProject?.image}
                                className="temp"
                                alt="temp-icon"
                                width="337"
                                height="337"
                                ></img>
                            </div>
                            <div className="username-container">{singleProject?.user?.username}</div>
                            <div className="project-statistics">
                                <div className='statistic'>
                                    <div>
                                        Created At:
                                    </div>
                                    <div>
                                        {singleProject?.created_at.slice(0, 16)}
                                    </div>
                                </div>
                                <div className='statistic'>
                                    <div>
                                        Game Engine:
                                    </div>
                                    <div>
                                        {singleProject?.genres}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="middle-right">
                        <div className='description-container'>
                            <div className='description-heading'>
                                    About {singleProject?.name}
                            </div>
                            <div className='description'>
                                    {singleProject?.project_description}
                            </div>
                        </div>
                        <div className='description-container'>
                            <div className='description-heading'>
                                About the Creator: {singleProject?.user?.username}
                            </div>
                            <div className='description'>
                                {singleProject?.owner_description}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="roles-container">
                {projectRoles?.map((role) => {
                    return(
                    <div className="individual-role">
                        <div className="custom-name"> ({role?.quantity}) {role?.custom_name}</div>
                        <div className="role-and-description">
                            <div className="role-role">
                                {role?.type}
                            </div>
                            <div className="role-description">
                                {role?.description}
                            </div>
                        </div>
                    </div>
                    )})}
                </div>
                <div className='comments-div'>
                    <div className='description-heading'>
                        Comments
                    </div>
                    <div className="addMessageContainer">
                        <form
                        onSubmit={handleSubmit}
                        autoComplete="off"
                        className="comment-form"
                        >
                            <textarea
                            className="comment-input"
                            type="text"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            maxLength={2000}
                            placeholder='Comment on this project'
                            required
                            />
                            <button type='submit' className='comment-button'>Add Comment</button>
                        </form>
                    </div>
                    <div className='all-comments'>
                    {comments?.map((comment) => {
                    if (userId === comment?.user_id) {
                    return (
                        <div className="logged-user-comment" key={comment?.id}>
                            <EditableComment
                            userId={comment?.user_id}
                            projectId={comment?.project_id}
                            comment={comment}
                            key={`editableComment_${comment?.id}`}
                            />
                        </div>
                    );
                    } else {
                    return (
                        <div className="individual-comment" key={comment?.id}>
                            <div className="user-username">
                                {comment?.user?.username}
                            </div>
                            <div className='comment-message'>
                                {comment?.message}
                            </div>
                        </div>
                    );
                    }
                })}
                </div>
                </div>
            </div>
        </>
    )
}

export default ProjectsPage;
