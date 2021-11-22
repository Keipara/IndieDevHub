import React, { useState} from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createProject } from '../../store/project';
import { useSelector } from 'react-redux';
import Calendar from 'react-calendar';
import './createProject.css'


function CreateProject() {
    const dispatch = useDispatch();
    const history = useHistory();
    const userId = useSelector(state => state.session.user?.id);
    const [name, setName] = useState("")
    const [projectDescription, setProjectDescription] = useState("")
    const [ownerDescription, setOwnerDescription] = useState("")
    const [deadline, setDeadline] = useState()
    const [genres, setGenres] = useState("Other")
    const [image, setImage] = useState("")

    const projectSubmit = async (e) => {
        e.preventDefault();

        const newProject = await dispatch(createProject(userId, name, projectDescription, ownerDescription, deadline, genres, image));
        if(newProject) {
           history.push('/projects')
         }


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
        </div>
    )
}

export default CreateProject
