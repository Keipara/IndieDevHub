import React, { useState} from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createProject } from '../../store/project';
import { useSelector } from 'react-redux';
import './createProject.css'


function CreateProject() {
    //setup
    const dispatch = useDispatch();
    const history = useHistory();
    const userId = useSelector(state => state.session.user?.id);

    //form
    const [formValues, setFormValues] = useState([{}])

    //projects
    const [name, setName] = useState("")
    const [projectDescription, setProjectDescription] = useState("")
    const [ownerDescription, setOwnerDescription] = useState("")
    const [genres, setGenres] = useState("Other")
    const [image, setImage] = useState("")

    const projectSubmit = async (e) => {
        e.preventDefault();

        const newProject = await dispatch(createProject(userId, name, projectDescription, ownerDescription, genres, image, JSON.stringify(formValues)));
        if(newProject) {
           history.push('/projects')
         }
    }

    let handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);
    }

    let addFormFields = () => {
        setFormValues([...formValues, { customName: "", Type: "Producer", quantity: "1", description: ""}])
    }

    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
    }

    return (
        <div className='create-projects-page'>
            <div className='projects-header'>
                <h2>Create Project</h2>
            </div>
            <div className=''>
                <form
                id="projectForm"
                onSubmit={projectSubmit}
                autoComplete="off"
                className="project-form">
                <div className='create-projects-portion'>
                    <div className='input-header'>Project Title</div>
                    <textarea
                        className="create-input"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        maxLength={100}
                        placeholder={"Your Project Title"}
                        required
                    />
                    <div className='input-header'>Project Description</div>
                    <textarea
                        className="create-input"
                        type=""
                        value={projectDescription}
                        onChange={(e) => setProjectDescription(e.target.value)}
                        maxLength={5000}
                        placeholder={"Describe your project"}
                        required
                    />
                    <div className='input-header'>User Description</div>
                    <textarea
                        className="create-input"
                        type=""
                        value={ownerDescription}
                        onChange={(e) => setOwnerDescription(e.target.value)}
                        maxLength={5000}
                        placeholder={"Describe yourself. Don't forget your contact method!"}
                        required
                    />
                    <div className='input-header'>Game Engine Preference</div>
                    <div className="cs-input-field">
                        <select
                        name="genres"
                        className="create-input"
                        id="genres"
                        onChange={(e) => setGenres(e.target.value)}
                        value={genres}
                        >
                            <option value="Other">Other</option>
                            <option value="Unity">Unity</option>
                            <option value="Unreal">Unreal</option>
                            <option value="Godot">Godot</option>
                            <option value="Ren'Py">Ren'Py</option>
                        </select>
                    </div>
                    <div className='input-header'>Project Image</div>
                    <textarea
                        className="create-input"
                        type=""
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        maxLength={1000}
                        placeholder={"An image that represents your game"}
                        required
                    />
                    <div>
                    </div>
                    </div>
                    {formValues.map((element, index) => (
                        <div className="individual-create-role" key={index}>
                            <label className='input-header'>Custom Name</label>
                            <textarea
                            type="text"
                            className="create-input"
                            name="customName"
                            value={element.customName || ""}
                            onChange={e => handleChange(index, e)}
                            required/>
                            <label className='input-header'>Type</label>
                            <select className='project-select' type="text" name="type" value={element.type || ""} defaultValue={{ label: "Type", value: 'Producer' }} onChange={e => handleChange(index, e)} required>
                                <option value="">Please select</option>
                                <option value="Producer">Producer</option>
                                <option value="Programmer">Programmer</option>
                                <option value="Designer">Designer</option>
                                <option value="Writer">Writer</option>
                                <option value="Artist">Artist</option>
                                <option value="Audio Technician">Audio Technician</option>
                            </select>
                            <label className='input-header'>Quantity</label>
                            <select className='project-select' type="text" name="quantity" value={element.quantity || "1"} onChange={e => handleChange(index, e)}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                            </select>
                            <label className='input-header'>Description</label>
                            <textarea
                            type="text"
                            className="create-input"
                            name="description"
                            value={element.description || ""}
                            onChange={e => handleChange(index, e)}
                            required/>
                            {index ?
                                <button type="button"  className="role-button" onClick={() => removeFormFields(index)}>Remove Role</button>
                                : null}
                        </div>
                    ))}
                        <div>
                            <button className="role-button" type="button" onClick={() => addFormFields()}>Add Role</button>
                        </div>
                    <div className="button-section">
                        <div className='project-submit-container'>
                            <button className="project-submit" type="submit">PUBLISH PROJECT</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateProject
