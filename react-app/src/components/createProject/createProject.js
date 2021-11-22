import React, { useState} from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createProject } from '../../store/project';
import { useSelector } from 'react-redux';
import Calendar from 'react-calendar';
import './createProject.css'
import { createRoles } from '../../store/role';


function CreateProject() {
    //setup
    const dispatch = useDispatch();
    const history = useHistory();
    const userId = useSelector(state => state.session.user?.id);

    //form
    const [formValues, setFormValues] = useState([{ test: ""}])

    //projects
    const [name, setName] = useState("")
    const [projectDescription, setProjectDescription] = useState("")
    const [ownerDescription, setOwnerDescription] = useState("")
    const [deadline, setDeadline] = useState()
    const [genres, setGenres] = useState("Other")
    const [image, setImage] = useState("")

    //roles
    const [customName, setCustomName] = useState("")
    const [type, setType] = useState()
    const [quantity, setQuantity] = useState("1")
    const [description, setDescription] = useState("")

    //functions
    const projectSubmit = async (e) => {
        e.preventDefault();

        const newProject = await dispatch(createProject(userId, name, projectDescription, ownerDescription, deadline, genres, image));
        if(newProject) {
           history.push('/projects')
         }
    }

    const roleSubmit = async (e) => {
        e.preventDefault();

        const newRole = await dispatch(createRoles(userId, customName, type, quantity, description));
        if(newRole) {
           history.push('/projects')
         }
    }

    let handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);
    }

    let addFormFields = () => {
        setFormValues([...formValues, { name: "", email: "" }])
    }

    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        alert(JSON.stringify(formValues));
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
                    <div>
                    <form  onSubmit={handleSubmit}>
                        {formValues.map((element, index) => (
                            <div className="form-inline" key={index}>
                                <label>Name</label>
                                <input type="text" name="name" value={element.name || ""} onChange={e => handleChange(index, e)} />
                                <label>Email</label>
                                <input type="text" name="email" value={element.email || ""} onChange={e => handleChange(index, e)} />
                                {index ?
                                    <button type="button"  className="button remove" onClick={() => removeFormFields(index)}>Remove</button>
                                    : null}
                            </div>
                        ))}
                        <div className="button-section">
                            <button className="button add" type="button" onClick={() => addFormFields()}>Add</button>
                            <button className="button submit" type="submit">Submit</button>
                        </div>
                    </form>
                    </div>
                    <button type="submit">Submit Project</button>
                </form>
            </div>
        </div>
    )
}

export default CreateProject
