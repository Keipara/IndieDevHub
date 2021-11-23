const LOAD = 'projects/LOAD_PROJECTS';
// const ONE_PROJECT = "servers/ONE_PROJECT";
const ADD_PROJECT = "servers/ADD_PROJECT"


const getProjects = projects => ({
    type: LOAD,
    projects,
})

// const singleProject = projects => ({
//   type: ONE_PROJECT,
//   payload: projects,
// });


const add_project = (projects) => ({
    type: ADD_PROJECT,
    projects,
  });

export const loadProjects = () => async (dispatch) => {
    const response = await fetch(`/api/projects/`);

    if (response.ok) {
        const projects = await response.json();
        dispatch(getProjects(projects))
    }
}

// export const loadSingleProjects = (id) => async (dispatch) => {
//     const response = await fetch(`api/projects/${id}`);

//     if (response.ok) {
//         const projects = await response.json();
//         dispatch(singleProject(projects))
//     }
// }
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

        default:
            return state;
    }
};

export default projectsReducer;
