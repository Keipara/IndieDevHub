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
    const [showEdit, setShowEdit] = useState(false);
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

                {showEditButton && showDeleteButton && (
                    <div>
                        <NavLink to={`/projects/${id}/edit`}>Edit</NavLink>
                        <div onClick={() => setShowDelete(true)}>Delete</div>
                    </div>
                )}

                {!showEdit && !showDelete && (
                <>
                    <div className="project-page-top">
                        {singleProject?.name}
                    </div>
                    <div className="project-page-middle">
                        <div className="middle-left">
                            <div className="project-user-images"></div>
                                <div className="project-image">{singleProject?.image}</div>
                                <div className="user-image">
                                    <img
                                    src={singleProject?.user?.icon}
                                    className="temp"
                                    alt="temp-icon"
                                    width="42"
                                    height="42"
                                ></img>
                                </div>
                            <div className="username-container">{singleProject?.user?.username}</div>
                            <div className="project-statistics">
                                <div>
                                    Created At: {singleProject?.created_at.slice(0, 16)}
                                </div>
                                <div>
                                    Deadline: {singleProject?.deadline.slice(0, 16)}
                                </div>
                                <div>
                                    Genres: {singleProject?.genres}
                                </div>
                            </div>
                        </div>
                        <div className="middle-right">
                        </div>
                    </div>
                    <div className="roles-container">
                    </div>
                </>
                )}
                {showDelete && (
                <div className="addModal" id="addServerModal">
                    <div className="modal-container">
                        <div className="top-part">
                            <h3 id="deleteMessageHeader">Delete Message</h3>
                            <h5 id="deleteMessageSubHeader" >Are you sure you want to delete this message? </h5>
                        </div>
                        <div className="bottom-part">
                            <div id="deleteMessage" onClick={handleDelete}>Delete</div>
                            <div id="cancelMessage" onClick={handleCancel}>Cancel</div>
                        </div>
                    </div>
                </div>

            )}
            <div className="roles-container">
                {projectRoles?.map((role) => {
                    return(
                        <div className="individual-role">
                            <div className="custom-name">{role?.quantity}{role?.custom_name}</div>
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
                            <div className="user-time">
                              <div style={{ fontWeight: 900, fontSize: 17 }}>
                                {" "}
                                {comment?.user?.username}
                              </div>
                            </div>
                            {comment?.message}
                        </div>
                      );
                    }
                })}
            </div>
            <div className="addMessageContainer">
              <form
                onSubmit={handleSubmit}
                autoComplete="off"
                className="messageForm"
              >
                <input
                  className="comment-input"
                  type="text"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  maxLength={2000}
                  required
                />
                <button type='submit'>Post Comment</button>
              </form>
            </div>
        </div>
        </>
    )
}

export default ProjectsPage;
