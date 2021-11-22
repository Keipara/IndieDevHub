import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams} from "react-router-dom";
import { loadProjects } from '../../store/project';
import Calendar from 'react-calendar';
// import ProtectedRoute from '../auth/ProtectedRoute';

function ProjectsPage() {
    //react setup
    const dispatch = useDispatch();
    const {id} = useParams()
    const projects = useSelector(state => Object.values(state?.projects));
    const singleProject = projects.find(project => project?.id === parseInt(id))
    const projectUser = useSelector(state => (state?.session?.user));
    // console.log(projectUser?.id)
    // console.log(singleProject?.name)

    const [showEditButton, setShowEditButton] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [showDeleteButton, setShowDeleteButton] = useState(false);
    const [showDelete, setShowDelete] = useState(false);

    //edit state
    const [name, setName] = useState(singleProject?.name)
    const [projectDescription, setProjectDescription] = useState(singleProject?.project_description)
    const [ownerDescription, setOwnerDescription] = useState(singleProject?.owner_description)
    const [deadline, setDeadline] = useState(singleProject?.deadline)
    const [genres, setGenres] = useState(singleProject?.genres)
    const [image, setImage] = useState(singleProject?.image)
    //functions
    useEffect(() => {
        dispatch(loadProjects())
    }, [dispatch])

    useEffect(() => {
        if (projectUser?.id === singleProject?.user?.id) {
            setShowEditButton(true)
            setShowDeleteButton(true)
        }
    }, [projectUser?.id, singleProject?.user?.id])

    return (
        <div className="project-page-container">

            {showEditButton && showDeleteButton && (
                <div>
                    <button onClick={() => setShowEdit(true)}>Edit</button>
                    <button onClick={() => setShowDelete(true)}>Delete</button>
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

            {showEdit && (
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
    )
}

export default ProjectsPage;
