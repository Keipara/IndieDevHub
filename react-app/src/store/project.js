const LOAD = 'projects/LOAD_PROJECTS';
const ADD_PROJECT = "servers/ADD_PROJECT"

const getProjects = projects => ({
    type: LOAD,
    projects,
})

const add_project = (projects) => ({
    type: ADD_PROJECT,
    projects,
  });

export const loadProjects = () => async (dispatch) => {
    const response = await fetch(`api/projects/`);

    if (response.ok) {
        const projects = await response.json();
        dispatch(getProjects(projects))
    }
}

export const loadSingleProjects = () => async (dispatch) => {
    const response = await fetch(`api/projects/`);

    if (response.ok) {
        const projects = await response.json();
        dispatch(getProjects(projects))
    }
}

export const createProject = (name, project_description, owner_description, deadline, genres, image) => async (dispatch) => {
    const response = await fetch(`/api/servers/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name,
            project_description,
            owner_description,
            deadline,
            genres,
            image
        }),
      });
      if (response.ok) {
        const data = await response.json();
        dispatch(add_project(data));
        return data
      };
};

let initialState = { projects: null };

const projectsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD:
            const allProjects = {};

            for (let project of action.projects.projects) {
                allProjects[project.id] = project;
            }
            return allProjects
        case ADD_PROJECT:
            return {
                ...state,
                [action.project.id]: action.project,
            }

        default:
            return state;
    }
};

export default projectsReducer;
