const reducer = (state, action) => {
  const { type, payload } = action;

  if (type === 'form') {
    return {
      ...state,
      form: {
        ...state.form,
        [payload.name]: payload.value,
      },
    };
  } else if (type === 'errors') {
    return {
      ...state,
      errors: {
        ...state.errors,
        [payload.name]: payload.value,
      },
    };
  
  
  } else if (type === 'send') {
    return {
      ...state,
      form: {
        ...state.form,
        send: payload.value,
      },
    };
  
  
  } else if (type === 'reset_errors') {
    let copy = state.errors;

    delete copy[payload.name];
    return {
      ...state,
      errors: {
        ...copy,
      },
    };
  
  
  
  } else {
    throw new Error();
  }
}

export default reducer;