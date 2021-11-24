import React, { useState} from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createProject } from '../../store/project';
import { useSelector } from 'react-redux';
import Calendar from 'react-calendar';
import { useParams } from 'react-router';


function EditProject() {
    //setup
    const dispatch = useDispatch();
    const history = useHistory();
    const userId = useSelector(state => state.session.user?.id);
    const {id} = useParams()
    const projects = useSelector(state => Object.values(state?.projects));
    const singleProject = projects.find(project => project?.id === parseInt(id))
    const roles = useSelector(state => Object.values(state?.roles));
    const projectRoles = roles.filter(role => role?.project_id === parseInt(id))
    const projectUser = useSelector(state => (state?.session?.user));
    // console.log(singleProject)

    //form
    const [formValues, setFormValues] = useState([{}])

    //projects
    const [name, setName] = useState(singleProject?.name)
    const [projectDescription, setProjectDescription] = useState(singleProject?.project_description)
    const [ownerDescription, setOwnerDescription] = useState(singleProject?.owner_description)
    const [deadline, setDeadline] = useState(new Date())
    const [genres, setGenres] = useState("Other")
    const [image, setImage] = useState("")

    console.log(deadline)

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
            {singleProject?.name}
            <div>Edit Project</div>
            <div>
                <form
                id="projectForm"
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
                        type="text"
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
                    {deadline.toString().slice(0, 16)}
                    <Calendar
                        onSelect={(e) => deadline}
                        onChange={setDeadline}
                        value={deadline.value}
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
                            <input type="text" name="customName" value={element.customName || ""} onChange={e => handleChange(index, e)} />
                            <label>Type</label>
                            <select type="text" name="type" value={element.type || "Producer"} onChange={e => handleChange(index, e)}>
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

export default EditProject
