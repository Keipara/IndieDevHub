import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { NavLink} from "react-router-dom";
import { loadProjects } from '../../store/project';
// import ProtectedRoute from '../auth/ProtectedRoute';
import './projectContainer.css'

function ProjectsContainer() {

    //react setup
    const dispatch = useDispatch();
    // const history = useHistory();
    // const params = useParams()

    //state
    // const [isLoaded, setIsLoaded] = useState(false)
    // const [project, setProject] = useState("")

    //selectors
    const projects = useSelector(state => Object.values(state.projects));
    // const userId = useSelector(state => state.session.user?.id);

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
                        // if (userId === project?.user_id) {
                        // return (
                        //     <div className="project-owner" key={project?.id}>
                        //     <img
                        //         src={project?.user?.icon}
                        //         className="temp"
                        //         alt="temp-icon"
                        //         width="42"
                        //         height="42"
                        //     ></img>
                        //     <EditableMessage
                        //         userId={message?.user_id}
                        //         channelId={message?.channel_id}
                        //         message={message}
                        //         key={`editableMessage_${message?.id}`}
                        //     />
                        //     </div>
                        // );
                        // } else {
                        return (
                            <div className="individual-project" key={project?.id}>
                                <div className="project-top">
                                    <img
                                        src={project?.image}
                                        className="project-image"
                                        alt="project-img"
                                        width="42"
                                        height="42"
                                    ></img>
                                    <NavLink to={`/projects/${project?.id}`}>
                                        <div>{project?.name}</div>
                                    </NavLink>
                                    <div>{project?.deadline}</div>
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
