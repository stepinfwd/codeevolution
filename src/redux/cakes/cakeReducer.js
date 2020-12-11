import { BUY_CAKE } from "./cakeTypes";
const initialState = {
  cakeNumber: 20,
};
export const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return { ...state, cakeNumber: state.cakeNumber - 1 };

    default:
      return state;
  }
};
