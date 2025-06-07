import { DECREMENT, INCREMENT, RESET } from "../constants/counterConstant";

export const incrementCounter = (num) => {
  return {
    type: INCREMENT,
    payload: num,
  };
};
export const decrementCounter = () => {
  return {
    type: DECREMENT,
  };
};
export const resetCounter = () => {
  return {
    type: RESET,
  };
};
