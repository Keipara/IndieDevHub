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

export const createProject = (user_id, name, project_description, owner_description, deadline, genres, image) => async (dispatch) => {
    console.log(user_id)
    console.log(name)
    console.log(project_description)
    console.log(owner_description)
    console.log(deadline)
    console.log(genres)
    console.log(image)
    const response = await fetch(`/api/projects/new`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            user_id,
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
        return null;
      } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
          return data.errors;
        }
      } else {
        return ['An error occurred. Please try again.']
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
