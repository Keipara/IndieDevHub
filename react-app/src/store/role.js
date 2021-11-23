const LOAD_ROLES = 'roles/LOAD_ROLES';
const ADD_ROLES = "roles/ADD_ROLES"


const getRoles = roles => ({
    type: LOAD_ROLES,
    roles,
})

const add_role = (roles) => ({
    type: ADD_ROLES,
    roles,
  });

export const loadRoles = () => async (dispatch) => {
    const response = await fetch(`/api/roles/`);

    if (response.ok) {
        const roles = await response.json();
        dispatch(getRoles(roles))
    }
}

export const createRoles = (user_id, array) => async (dispatch) => {
    const response = await fetch(`/api/roles/new`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            user_id,
            array
        }),
      });
      if (response.ok) {
        const data = await response.json();
        dispatch(add_role(data));
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

let initialState = { roles: null };

const rolesReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_ROLES:
            const allroles = {};

            for (let role of action.roles.roles) {
                allroles[role.id] = role;
            }
            return allroles
        case ADD_ROLES:
            return {
                ...state,
                [action.roles.id]: action.roles,
            }

        default:
            return state;
    }
};

export default rolesReducer;
