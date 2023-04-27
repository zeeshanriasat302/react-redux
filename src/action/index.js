export const incNumber = (value) => {
    return {
      type: "INCREMENT",
      payload: value
    };
  };
  
  export const decNumber = (value) => {
      return {
        type: "DECREMENT",
        payload: value
    }
  };
  