//Need to standardize nomenclature between actions and reducers

function activeResult (state = {}, action) {
  switch (action.type) {
    case 'RESULT_SELECTED':
      return Object.assign({}, state, action.result); 
    default:
      return state;
  }
};

export default activeResult;