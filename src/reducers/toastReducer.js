const SHOW_TOAST = 'SHOW_TOAST';
const HIDE_TOAST = 'HIDE_TOAST';


const DEFAULT_STATE = {
  toasts: []
};

const toastReducers = (state = DEFAULT_STATE, action: ActionType) => {
  switch (action.type) {
    case HIDE_TOAST:
      return {
        ...state,
        toasts: state.toasts.filter((toast) => toast.timestamp !== action.toast.timestamp)
      }
    case SHOW_TOAST:
      return {
        ...state,
        toasts: [...state.toasts, action.toast]
      }
    default:
      return state;
  }
  

};

export default toastReducers;
