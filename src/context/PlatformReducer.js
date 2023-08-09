export const platformReducer = (state, action) => {
  switch (action.type) {
    case "GET_MENTORS":
      return { ...state, mentors: action.payload };
    case "GET_MENTOR":
      return { ...state, mentor: action.payload };
    case "SET_LOADING":
      return { ...state, loading: true };

    default:
      return state;
  }
};
