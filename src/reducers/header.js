import { SET_HEADER_TRANSPARENCY } from '../actions';

const initialState = { transparent: true };

const header = (state = initialState, action) => {
  switch (action.type) {
    case SET_HEADER_TRANSPARENCY:
      return { transparent: action.transparent };
    default:
      return state;
  }
};

export default header;
