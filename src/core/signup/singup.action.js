import { httpRequest } from '../../main/http';
import { SIGNUP_ACTION_TYPE } from './signup.type';
import { SIGNUP_API } from './signup.constant';

export function signupFormUploadData(data) {
  return async (dispatch) => {
    dispatch({
      type: SIGNUP_ACTION_TYPE.SIGNUP_UPLOAD_FORM_PANDING,
    });
    try {
      const response = await httpRequest({
        method: SIGNUP_API.SIGNUP_FORM_UPLOAD.METHOD,
        url: SIGNUP_API.SIGNUP_FORM_UPLOAD.PATH,
        data,
      });
      dispatch({
        type: SIGNUP_ACTION_TYPE.SIGNUP_UPLOAD_FORM_SUCCESS,
      });
    } catch (error) {
      dispatch({
        type: SIGNUP_ACTION_TYPE.SIGNUP_UPLOAD_FORM_ERROR,
        message: error.message,
      });
    }
  };
}
