import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './favorites-actions';

const items = createReducer([], {
    [actions.addFavorite]: (state, action) => {
        return [action.payload, ...state];
    }
});

export default combineReducers({ items });