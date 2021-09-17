const initState = {
  counter: 0,
};

const AuthReducer = (state = initState, action) => {
  const { type } = action;

  switch (type) {
    case "plus":
      return { ...state, counter: state.counter++ };

    case "mois":
      return { ...state, counter: state.counter-- };

    default:
      break;
  }
};

export default AuthReducer;
