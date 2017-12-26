const SET_MENULIST = 'SET_MENULIST';
const SET_ORDER = 'SET_ORDER';
const UPDATE_ORDER = 'UPDATE_ORDER';

export const setMenuList = (data) => {
    return {type: SET_MENULIST, data: data}
};

export const setOrder = (data, action) => {
    return {type: SET_ORDER, data: data, action: action}
};

export const updateOrder = (data) => {
    return {type: UPDATE_ORDER, data: data}
};