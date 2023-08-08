export const platformReducer = (state, action) => {
  switch (action.type) {
    case "GET_MENTORS":
      return { ...state, mentors: action.payload };
    case "GET_MENTOR":
      return { ...state, user: action.payload };

    default:
      return state;
  }
};
