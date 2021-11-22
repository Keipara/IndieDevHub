import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams} from "react-router-dom";
import { loadProjects } from '../../store/project';
// import ProtectedRoute from '../auth/ProtectedRoute';

function ProjectsPage() {
    //react setup
    const dispatch = useDispatch();
    const {id} = useParams()
    const projects = useSelector(state => Object.values(state?.projects));
    const singleProject = projects.find(project => project?.id === parseInt(id))
    const projectUser = useSelector(state => Object.values(state?.session?.user));

    //functions
    useEffect(() => {
        dispatch(loadProjects())
    }, [dispatch])

    return (
        <div className="project-page-container">
            <div className="project-page-top">{singleProject?.name}</div>
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
                            Created At: {singleProject.created_at.slice(0, 16)}
                        </div>
                        <div>
                            Deadline: {singleProject.deadline.slice(0, 16)}
                        </div>
                        <div>
                            Genres: {singleProject.genres}
                        </div>
                    </div>
                </div>
                <div className="middle-right">

                </div>
            </div>
            <div className="roles-container">

            </div>
            {projects?.map((project) => {
                return(

                <text> test {project?.id} </text>
                )
            })}
        </div>
    )
}

export default ProjectsPage;
