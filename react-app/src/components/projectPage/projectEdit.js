import React, { useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { editProject } from '../../store/project';
import { loadProjects } from '../../store/project';
import { loadRoles } from '../../store/role';


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
    const projectId = singleProject?.id

    //form
    const [formValues, setFormValues] = useState(projectRoles?.map(role => ({
        customName: role?.custom_name,
        type: role?.type,
        quantity: role?.quantity,
        description: role?.description
    })))

    //projects
    const [name, setName] = useState(singleProject?.name);
    const [projectDescription, setProjectDescription] = useState(singleProject?.project_description)
    const [ownerDescription, setOwnerDescription] = useState(singleProject?.owner_description)
    const [genres, setGenres] = useState("Other")
    const [image, setImage] = useState(singleProject?.image)
    const [showDelete, setShowDelete] = useState(true)

    useEffect(() => {
        dispatch(loadProjects())

    }, [dispatch])

    useEffect(() => {
        dispatch(loadRoles())
    }, [dispatch])

    useEffect(() => {
        setName(singleProject?.name)
        setProjectDescription(singleProject?.project_description)
        setOwnerDescription(singleProject?.owner_description)
        setImage(singleProject?.image)

    }, [singleProject])

    useEffect(() => {
        setFormValues(projectRoles?.map(role => ({
            customName: role?.custom_name,
            type: role?.type,
            quantity: role?.quantity,
            description: role?.description
        })))

    }, [projectRoles[0]])


    useEffect(() => {
        if (formValues.length === 1) {
            setShowDelete(false)
        } else {
            setShowDelete(true)
        }
    }, [formValues])

    const updateProject = async (e) => {
        e?.preventDefault();

        await dispatch(editProject(projectId, userId, name, projectDescription, ownerDescription, genres, image, JSON.stringify(formValues)))
        history.push(`/projects/${projectId}`)

    }

    let handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);
    }

    let addFormFields = () => {
        setFormValues([...formValues, { customName: "", Type: "", quantity: "", description: ""}])
    }

    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
    }

    return (
        <div className='create-projects-page'>
            <div className='projects-header'>
                <h2 >Edit Project</h2>
            </div>
            <div>
                <form
                id="projectForm"
                onSubmit={updateProject}
                autoComplete="off"
                className="project-form">
                <div className='create-projects-portion2'>
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
                        type="text"
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
                        placeholder={"Describe yourself"}
                        required
                    />
                    <div className='input-header'>Game Engine Preference</div>
                    <div className="cs-input-field">
                        <select
                        className='project-select'
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
                    <div className='input-header'>Project Image</div>
                    <textarea
                        className="create-input"
                        type=""
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        maxLength={1000}
                        placeholder={"An image that represents your game"}
                    />
                </div>

                    <div className="roles-container">


                    {formValues.map((element, index) => (
                        <div className="individual-create-role" key={index}>
                            <label className='input-header'>Role Title</label>
                            <textarea className="create-input" type="text" name="customName" value={element.customName || ""} onChange={e => handleChange(index, e)} required/>
                            <label className='input-header'>Type</label>
                            <select className='project-select' type="text" name="type" value={element.type || ""} onChange={e => handleChange(index, e)} required>
                                <option value="">Select role</option>
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
                            <textarea className="create-input" type="text" name="description" value={element.description || ""} onChange={e => handleChange(index, e)} />
                            {showDelete && (
                            <button type="button"  className="role-button" onClick={() => removeFormFields(index)}>Remove Role</button>
                            )}
                        </div>
                    ))}

                    </div>
                        <div>
                            <button className="role-button" type="button" onClick={() => addFormFields()}>Add Role</button>
                        </div>
                    <div className="button-section">
                        <button className="project-submit" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditProject
