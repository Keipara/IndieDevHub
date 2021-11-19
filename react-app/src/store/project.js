const LOAD = 'projects/LOAD_PROJECTS';

const getProjects = projects => ({
    type: LOAD,
    projects,
})

export const loadProjects = () => async (dispatch) => {
    const response = await fetch(`api/projects/`);

    if (response.ok) {
        const projects = await response.json();
        dispatch(getProjects(projects))
    }
}

let initialState = { projects: null };

const projectsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD:
            const allProjects = {};

            for (let project of action.projects.projects) {
                allProjects[project.id] = project;
            }
            return allProjects

        default:
            return state;
    }
};

export default projectsReducer;
