import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { NavLink} from "react-router-dom";
import { loadProjects } from '../../store/project';
import './projectContainer.css'

function ProjectsContainer() {

    const dispatch = useDispatch();
    const projects = useSelector(state => Object.values(state.projects));

    //functions
    useEffect(() => {
        dispatch(loadProjects())
    }, [dispatch])

    return (
        <div className="projects-page">
            <div className="projects-header">
                <h2>Open Projects</h2>
            </div>
            <div className="filters-projects-container">
                <div className="filters">
                    <div className="filters-header">
                        <h3>Filters</h3>
                    </div>
                    <div className="role-filter">
                        <>Programmer</>
                        <>Artist</>
                        <>Audio Tech.</>
                        <>Designer</>
                        <>Writer</>
                        <>Producer</>
                    </div>
                    <div className="genre-filter">
                        <>Visual Novel</>
                        <>RPG</>
                        <>Puzzle</>
                        <>Roguelike</>
                        <>2D</>
                        <>3D</>
                    </div>
                    <div className="etc-filter">
                        <>Created at</>
                        <>Deadline</>
                        <>etc</>
                    </div>
                </div>
                <div className="projects-container">

                    {projects?.map((project) => {

                        return (
                            <div className="individual-project" key={project?.id}>
                                <div className="project-top">
                                    {/* <img
                                        src={project?.image}
                                        className="project-image"
                                        alt="project-img"
                                        width="42"
                                        height="42"
                                    ></img> */}
                                    {project?.image}
                                    <NavLink to={`/projects/${project?.id}`} exact>
                                        <div>{project?.name}</div>
                                    </NavLink>
                                    <div>{project?.deadline.slice(0, 16)}</div>
                                </div>
                                <div className="project-middle">{project?.project_description}</div>
                                <div className="project-bottom">
                                    <>Programmer</>
                                    <>Artist</>
                                    <>Audio Tech.</>
                                    <>Designer</>
                                    <>Writer</>
                                    <>Producer</>
                                </div>
                            </div>
                        );
                        }
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProjectsContainer;
