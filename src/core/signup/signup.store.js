import {
  initRequestState,
  setRequestPending,
  setRequestSuccess,
  setRequestError,
} from '../../main/store/store.service';
import { SIGNUP_ACTION_TYPE } from './signup.type';

const initialState = {
  signupForm: initRequestState(),
};

export function signupStore(state = initialState, action) {
  switch (action.type) {
    case SIGNUP_ACTION_TYPE.SIGNUP_UPLOAD_FORM_PANDING:
      return {
        ...state,
        signupForm: setRequestPending(state.signupForm),
      };
    case SIGNUP_ACTION_TYPE.SIGNUP_UPLOAD_FORM_SUCCESS:
      return {
        ...state,
        signupForm: setRequestSuccess(state.signupForm),
      };
    case SIGNUP_ACTION_TYPE.SIGNUP_UPLOAD_FORM_ERROR:
      return {
        ...state,
        signupStore: setRequestError(state.signupForm, action.message),
      };
    case SIGNUP_ACTION_TYPE.SIGNUP_UPLOAD_FORM_RESET:
      return {
        ...state,
      };
    default:
      return state;
  }
}
