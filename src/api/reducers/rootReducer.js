import { combineReducers } from 'redux';
import eventReducer from '../../features/eventReducer.jsx';

const rootReducer = combineReducers({
  events: eventReducer,
});

export default rootReducer;
