/**
 * Created by Mark Aquino on 3/21/17.
 */

/*
 * action types
 */

export const ADD_REQUEST_ITEM = 'ADD_REQUEST_ITEM';
export const REMOVE_REQUEST_ITEM = 'REMOVE_REQUEST_ITEM';
export const TOGGLE_SELECTION = 'TOGGLE_SELECTION';
export const SUBMIT_REQUEST = 'SUBMIT_REQUEST';

/*
 * other constants
 */

export const VisibilityFilters = {
    SELECTED: 'SELECTED',
    SELECT_ALL:  'SELECT_ALL',
    SELECT_NONE: 'SELECT_NONE'

}

/*
 * action creators
 */

export function addRequestItem(id)  {
   return { type: 'ADD_REQUEST_ITEM', id}
}

export function removeRequestItem(id) {
    return { type: 'REMOVE_REQUEST_ITEM', id}
}

export function submitRequest(request) {
    return {
        type: 'SUBMIT_REQUEST',
        payload: new Error(),
        request
    }
}

export function toggleSelection(id){
    return{
        type: 'TOGGLE_SELECTION',
        id
    }
}
