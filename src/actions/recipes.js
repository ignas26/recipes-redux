import {MAKE_ACTIVE} from './types';
import {CHANGE_CURRENT} from './types';

export function makeActive(i) {
  return {
    type:MAKE_ACTIVE,
    payload:i
  }
}

export function changeCurrent(name) {
  return {
    type: CHANGE_CURRENT,
    payload: name
  }
}
