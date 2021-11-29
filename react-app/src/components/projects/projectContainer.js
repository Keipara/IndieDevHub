import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { NavLink} from "react-router-dom";
import { loadProjects } from '../../store/project';
import { loadRoles } from '../../store/role';
import './projectContainer.css'

function ProjectsContainer() {

    const dispatch = useDispatch();
    const projects = useSelector(state => Object.values(state?.projects));
    const roles = useSelector(state => Object.values(state?.roles));

    //functions
    useEffect(() => {
        dispatch(loadProjects())
    }, [dispatch])

    useEffect(() => {
        dispatch(loadRoles())
    }, [dispatch])

    return (
        <div className="projects-page">
            <div className="projects-header">
                <h2>Open Projects</h2>
            </div>
            <div className="filters-projects-container">
                <div className="projects-container">

                    {projects?.reverse().map((project) => {

                        return (
                            <div className="individual-project" key={project?.id}>
                                <div className="project-top">
                                    <img
                                        src={project?.image}
                                        className="project-image"
                                        alt="project-img"
                                        width="50"
                                        height="50"
                                    ></img>
                                    <div className='project-top-right'>
                                    <div >
                                        <NavLink to={`/projects/${project?.id}`} exact>
                                            <div className='project-name'>{project?.name}</div>
                                        </NavLink>
                                    </div>
                                    <div className='project-created-at'>Created on {project?.created_at.slice(0, 16)}</div>
                                    </div>
                                </div>
                                <div className="project-middle">{project?.project_description}</div>
                                <div className="project-bottom">
                                    {roles?.filter(role => role?.project?.id === project?.id).map((filteredRole) => {
                                        return (
                                            <div className='ind-role'>
                                                <div className='role-type'>
                                                {filteredRole?.type}:
                                                </div>
                                                <div className='role-name'>
                                                {filteredRole?.custom_name}
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className='project-footer'>
                                    by <div class='project-owner'>{project?.user?.username}</div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default ProjectsContainer;
