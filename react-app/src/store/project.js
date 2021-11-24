const LOAD = 'projects/LOAD_PROJECTS';
const ADD_PROJECT = "projects/ADD_PROJECT"
const UPDATE_PROJECT = 'projects/UPDATE_PROJECT'
const DELETE_PROJECT = 'projects/DELETE_projects'


const getProjects = projects => ({
    type: LOAD,
    projects,
})

const add_project = projects => ({
    type: ADD_PROJECT,
    projects,
  });

  const updateProject = message => {
    return {
        type: UPDATE_PROJECT,
        message
    }
}

const deleteProject = id => {
  return {
    type: DELETE_PROJECT,
    id
  }
}

export const loadProjects = () => async (dispatch) => {
    const response = await fetch(`/api/projects/`);

    if (response.ok) {
        const projects = await response.json();
        dispatch(getProjects(projects))
    }
}

export const createProject = (user_id, name, project_description, owner_description, deadline, genres, image, array) => async (dispatch) => {
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
            image,
            array
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

  export const editProject = (id, user_id, name, project_description, owner_description, deadline, genres, image, array) => async (dispatch) => {
    const response = await fetch(`/api/projects/${id}/edit`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id,
          user_id,
          name,
          project_description,
          owner_description,
          deadline,
          genres,
          image,
          array
        }),
      });

      if (response.ok) {
        const data = await response.json();
        dispatch(updateProject(data))
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

export const deleteSingleProject = (id) => async (dispatch) => {
  const response = await fetch(`/api/projects/${id}`, {
      method: 'DELETE',
      body: JSON.stringify({id})
  });

  if (response.ok) {
    dispatch(deleteProject(id))
    return null;
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
        // case ONE_PROJECT:
        //     const oneProject = {};

        //     for (let project of action.projects.projects) {
        //         oneProject[project.id] = project;
        //     }
        //     return oneProject
        case ADD_PROJECT:
            return {
                ...state,
                [action.projects.id]: action.projects,
            }
        case UPDATE_PROJECT:
          return {
            ...state,
            [action.project.id]: action.project,
          }
        case DELETE_PROJECT:
            const newState = {...state}
            delete newState[action.id];
            return newState;
        default:
            return state;
    }
};

export default projectsReducer;
