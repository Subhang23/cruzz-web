import {
  // SIGNUP,
  SET_CURRENT_USER,
  // USER_PROFILE,
  // ERROR
} from '../actions/types';

import { isEmpty } from '../utils/validate';
import { LOADING } from './../actions/types';

const initialState = {
  loading: false,
	authenticated: false,
	user: {},
  userProfile: {},
  error: ''
};

export default function(state = initialState, action) {
	switch (action.type) {
    case SET_CURRENT_USER:
			return {
				...state,
				authenticated: !isEmpty(action.payload),
        user: action.payload,
        loading: false
      };
    case LOADING:
      return {
        ...state,
        loading: true
      }
		default:
			return state;
	}
}