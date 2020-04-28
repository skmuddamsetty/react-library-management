export default (state = { uid: '', userInfo: {} }, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        uid: action.uid,
      };
    case 'LOGOUT':
      return {};
    case 'SET_USER_INFO':
      return { ...state, userInfo: { ...action.data } };
    default:
      return state;
  }
};
