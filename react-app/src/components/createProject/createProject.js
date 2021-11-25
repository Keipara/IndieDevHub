import React, { useState} from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createProject } from '../../store/project';
import { useSelector } from 'react-redux';
import Calendar from 'react-calendar';
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
    const [deadline, setDeadline] = useState()
    const [genres, setGenres] = useState("Other")
    const [image, setImage] = useState("")

    //roles
    // const [customName, setCustomName] = useState("")
    // const [type, setType] = useState()
    // const [quantity, setQuantity] = useState("1")
    // const [description, setDescription] = useState("")

    //functions
    // const roleSubmit = async (e) => {
    //     e.preventDefault();

    //     const newRole = await dispatch(createRoles(userId, customName, type, quantity, description));
    //     if(newRole) {
    //        history.push('/projects')
    //      }
    // }
    // let handleSubmit = async (event) => {
    //     event.preventDefault();
    //     const newRole = await dispatch(createRoles(userId, JSON.stringify(formValues)));
    //     if(newRole) {
    //         history.push('/projects')
    //     }
    //     alert(JSON.stringify(formValues));
    // }
    // let submitForms = () => {
    //     document.getElementById("projectForm").submit();
    //     document.getElementById("roleForm").submit();
    // }

    const projectSubmit = async (e) => {
        e.preventDefault();

        const newProject = await dispatch(createProject(userId, name, projectDescription, ownerDescription, deadline, genres, image, JSON.stringify(formValues)));
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
        <div>
            <div>Create Project</div>
            <div>
                <form
                id="projectForm"
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
                        name="genres"
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
                    <input
                        className=""
                        type=""
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        maxLength={1000}
                        placeholder={"An image that represents your game"}
                    />
                    <div>
                    </div>
                    {formValues.map((element, index) => (
                        <div className="form-inline" key={index}>
                            <label>Custom Name</label>
                            <input type="text" name="customName" value={element.customName || ""} onChange={e => handleChange(index, e)} required/>
                            <label>Type</label>
                            <select type="text" name="type" value={element.type || ""} defaultValue={{ label: "Type", value: 'Producer' }} onChange={e => handleChange(index, e)} required>
                                <option value="">Please select</option>
                                <option value="Producer">Producer</option>
                                <option value="Programmer">Programmer</option>
                                <option value="Designer">Designer</option>
                                <option value="Writer">Writer</option>
                                <option value="Artist">Artist</option>
                                <option value="Audio Technician">Audio Technician</option>
                            </select>
                            <label>Quantity</label>
                            <select type="text" name="quantity" value={element.quantity || "1"} onChange={e => handleChange(index, e)}>
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
                            <label>Description</label>
                            <input type="text" name="description" value={element.description || ""} onChange={e => handleChange(index, e)} />
                            {index ?
                                <button type="button"  className="button remove" onClick={() => removeFormFields(index)}>Remove</button>
                                : null}
                        </div>
                    ))}
                    <div className="button-section">
                        <div>
                            <button className="button add" type="button" onClick={() => addFormFields()}>Add</button>
                        </div>
                        <button className="button submit" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateProject
