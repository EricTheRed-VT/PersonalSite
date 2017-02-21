/* --------------- INITIAL STATE --------------- */

const initialState = {};

/* --------------- ACTIONS --------------- */

export const EXAMPLEACTION = 'EXAMPLEACTION';

/* --------------- ACTION CREATORS --------------- */

export const exampleActionCreator = data => {
  return {
    type: EXAMPLEACTION,
    data
  };
};

/* --------------- THUNK ACTION CREATORS --------------- */

export const exampleThunk = () => {
  return dispatch => {
    //do stuff
    //dispatch(something)
  };
};

/* --------------- REDUCER --------------- */

export function exampleReducer(state = initialState, action) {
  switch (action.type) {

  case EXAMPLEACTION:
    const newState = state //change stuff
    return newState;

  default:
    return state;
  }
}
