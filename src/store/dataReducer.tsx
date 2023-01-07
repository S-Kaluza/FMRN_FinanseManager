const initialState = {
  expenseList: [],
};

export const dataReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return {
        ...state,
        expenseList: [...state.expenseList, action.payload],
      };
    default:
      return state;
  }
};
