export const platformReducer = (state, action) => {
  switch (action.type) {
    case "GET_MENTORS":
      return { ...state, allMentors: action.payload, loading: false };
    case "GET_FILTERED-MENTORS":
      return { ...state, mentorsByCategory: action.payload, loading: false };
    case "GET_MENTOR":
      return { ...state, singleMentor: action.payload, loading: false };
    case "GET_LIVE-CLASS":
      return { ...state, singleLiveClass: action.payload, loading: false };
    case "GET_MENTOR-FORM-DATA":
      return { ...state, mentorFormData: action.payload, loading: false };
    case "GET_SUBSCRIPTION":
      return { ...state, subscription: action.payload, loading: false };
    case "SET_LOADING":
      return { ...state, loading: true };

    default:
      return state;
  }
};
