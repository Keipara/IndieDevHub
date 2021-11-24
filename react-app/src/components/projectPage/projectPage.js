import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory} from "react-router-dom";
import { loadProjects } from '../../store/project';
import { loadRoles } from '../../store/role';
// import Calendar from 'react-calendar';
import { NavLink } from 'react-router-dom';
import { deleteSingleProject } from '../../store/project';
// import ProtectedRoute from '../auth/ProtectedRoute';

function ProjectsPage() {
    //react setup
    const dispatch = useDispatch();
    const {id} = useParams()
    const history = useHistory()
    const projects = useSelector(state => Object.values(state?.projects));
    const singleProject = projects.find(project => project?.id === parseInt(id))
    const roles = useSelector(state => Object.values(state?.roles));
    const projectRoles = roles.filter(role => role?.project_id === parseInt(id))
    const projectUser = useSelector(state => (state?.session?.user));
    console.log(projectRoles)
    // console.log(projectUser?.id)
    // console.log(singleProject?.name)

    const [showEditButton, setShowEditButton] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [showDeleteButton, setShowDeleteButton] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [showDeleteDiv, setShowDeleteDiv] = useState(false);

    //edit state
    // const [name, setName] = useState(singleProject?.name)
    // const [projectDescription, setProjectDescription] = useState(singleProject?.project_description)
    // const [ownerDescription, setOwnerDescription] = useState(singleProject?.owner_description)
    // const [deadline, setDeadline] = useState(singleProject?.deadline)
    // const [genres, setGenres] = useState(singleProject?.genres)
    // const [image, setImage] = useState(singleProject?.image)

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
                {/* {showEdit && (
                    <div>
                    <form
                    // onSubmit={projectSubmit}
                    autoComplete="off"
                    className="project-form">
                        <input
                            className="name-container"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            maxLength={100}
                            placeholder={"Your Project Title"}
                            required
                        />
                        <input
                            className=""
                            type=""
                            value={projectDescription}
                            onChange={(e) => setProjectDescription(e.target.value)}
                            maxLength={5000}
                            placeholder={"Describe your project"}
                            required
                        />
                        <input
                            className=""
                            type=""
                            value={ownerDescription}
                            onChange={(e) => setOwnerDescription(e.target.value)}
                            maxLength={5000}
                            placeholder={"Describe yourself"}
                            required
                        />
                        <div className="calendar">
                        <Calendar
                            onChange={setDeadline}
                            value={deadline}
                        />
                        </div>
                        <div className="cs-input-field">
                            <select
                            multiple
                            name="genres"
                            id="genres"
                            onChange={(e) => setGenres(e.target.value)}
                            value={[genres]}
                            >
                                <option value="Other">Other</option>
                                <option value="Unity">Unity</option>
                                <option value="Unreal">Unreal</option>
                                <option value="Godot">Godot</option>
                                <option value="Ren'Py">Ren'Py</option>
                            </select>
                        </div>
                        <input
                            className=""
                            type=""
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            maxLength={1000}
                            placeholder={"An image that represents your game"}
                        />
                        <button type="submit">Submit Project</button>
                    </form>
                </div>
                )}
            </div>
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
                    )}
                )} */}
            </div>
        </>
    )
}

export default ProjectsPage;
