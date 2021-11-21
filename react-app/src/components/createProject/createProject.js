import React, { useState} from 'react';
// import { NavLink, useParams, useHistory, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createProject } from '../../store/project';
import { useSelector } from 'react-redux';


function CreateProject() {
    const dispatch = useDispatch();
    const userId = useSelector(state => state.session.user?.id);

    // const history = useHistory();
    // const params = useParams()

    //state
    const [name, setName] = useState("")
    const [projectDescription, setProjectDescription] = useState("")
    const [ownerDescription, setOwnerDescription] = useState("")
    const [deadline, setDeadline] = useState("")
    const [genres, setGenres] = useState("")
    const [image, setImage] = useState("")

    const projectSubmit = async (e) => {
        e.preventDefault();

        await dispatch(createProject(userId, name, projectDescription, ownerDescription, deadline, genres, image))

    }

    return (
        <div>
            <div>Create Project</div>
            <div>
                <form
                onSubmit={projectSubmit}
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
                    <input
                        className=""
                        type=""
                        value={deadline}
                        onChange={(e) => setDeadline(e.target.value)}
                        maxLength={69}
                        placeholder={"When does this listing end"}
                        required
                    />
                    <input
                        className=""
                        type=""
                        value={genres}
                        onChange={(e) => setGenres(e.target.value)}
                        maxLength={200}
                        placeholder={"What are your project's genres"}
                        required
                    />
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
        </div>
    )
}

export default CreateProject
