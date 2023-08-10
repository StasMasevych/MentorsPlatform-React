export const platformReducer = (state, action) => {
  switch (action.type) {
    case "GET_MENTORS":
      return { ...state, allMentors: action.payload, loading: false };
    case "GET_MENTOR":
      return { ...state, mentor: action.payload, loading: false };
    case "SET_LOADING":
      return { ...state, loading: true };

    default:
      return state;
  }
};
