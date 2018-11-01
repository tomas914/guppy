// @flow
import {
  START_DELETING_PROJECT,
  FINISH_DELETING_PROJECT,
  REINSTALL_DEPENDENCIES_START,
  REINSTALL_DEPENDENCIES_FINISH,
  SET_STATUS_TEXT,
  RESET_STATUS_TEXT,
} from '../actions';

import type { Action } from 'redux';

type State = {
  blockingActionActive: boolean,
  statusText: string,
};

export const initialState = {
  blockingActionActive: false,
  statusText: 'Please wait...',
};

export default (state: State = initialState, action: Action = {}) => {
  switch (action.type) {
    case START_DELETING_PROJECT:
    case REINSTALL_DEPENDENCIES_START:
      return {
        ...state,
        blockingActionActive: true,
      };

    case FINISH_DELETING_PROJECT:
    case REINSTALL_DEPENDENCIES_FINISH:
      return {
        ...state,
        blockingActionActive: false,
      };

    case SET_STATUS_TEXT:
      const newStatus = action.statusText;
      return {
        ...state,
        statusText: newStatus !== '' ? newStatus : state.statusText, // only update if string defined
      };

    case RESET_STATUS_TEXT:
      return {
        ...state,
        statusText: initialState.statusText,
      };

    default:
      return initialState;
  }
};

//
//
//
// Helpers
export const getBlockingStatus = (state: any) =>
  state.appStatus.blockingActionActive;

export const getStatusText = (state: any) => state.appStatus.statusText;
