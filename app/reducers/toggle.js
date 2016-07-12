import { TOGGLE_REDSHIFT } from '../actions/toggle';

export default function counter(state = 0, action) {
  switch (action.type) {
    case TOGGLE_REDSHIFT:
      console.log("Pula mea.")
      return state + 1;
    default:
      return state;
  }
}
