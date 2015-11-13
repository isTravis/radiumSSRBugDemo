import Immutable from 'immutable';
import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';

export default combineReducers({
	router: routerStateReducer,
});

export function ensureImmutable(state) {
	return state;
}
