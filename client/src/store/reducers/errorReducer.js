import { Toast } from '../../helpers/swalToast';
import {ERROR} from "../actions/action_types"
const defaultState = {
  message: ''
}
export default function caseReducer(state = defaultState, action) {
  switch (action.type) {
    case ERROR :
      let message = '';
      message = action.payload
      // if (action.payload.response) {
      //   if (Array.isArray(action.payload.response.data.message)) {
      //     message = action.payload.response.data.message.join('<br>');
      //   } else {
      //     message = action.payload.response.data.message;
      //   }
      // } else if (action.payload.message) {
      //   message = action.payload.message;
      // } else {
      //   message = action.payload.request;
      // }
      Toast.fire({
        icon: 'error',
        title: message,
      });
      return state
    default:
      return state;
  }
}