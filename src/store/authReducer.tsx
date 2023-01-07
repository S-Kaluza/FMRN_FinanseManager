const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false,
};

export const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'AUTH_START':
      return {
        ...state,
        error: null,
        loading: true,
      };
    case 'AUTH_SUCCESS':
      return {
        ...state,
        token: action.idToken,
        userId: action.userId,
        error: null,
        loading: false,
      };
    case 'AUTH_FAIL':
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case 'AUTH_LOGOUT':
      return {
        ...state,
        token: null,
        userId: null,
      };
    default:
      return state;
  }
};
