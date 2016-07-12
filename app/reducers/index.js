import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import counter from './counter';
import toggle from './toggle'
const rootReducer = combineReducers({
  toggle,
  routing
});

export default rootReducer;
