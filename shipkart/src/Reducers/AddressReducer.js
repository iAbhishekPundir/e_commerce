export const initialState = {
    address: [
      {
        id: "1",
        name: "Abhishek ",
        street: "A-156",
        city: "Greater Noida",
        state: "Uttar Pradesh",
        country: "India",
        postalCode: "201308",
        MobileNum: "9912345678",
      },
    ],
    updatedId: null,
  };
  
  export const AddressReducer = (state, action) => {
    switch (action.type) {
      case "ADD_NEW_ADDRESS":
        return {
          ...state,
          address: [...state.address, action.payload],
          updatedId: null,
        };
      case "REMOVE_ADDRESS":
        return {
          ...state,
          address: state.address.filter(({ id }, i) => action.payload !== id),
        };
      case "EDIT_ADDRESS":
        return {
          ...state,
          updatedId: action.payload,
        };
      case "UPDATE_ADDRESS":
        return {
          ...state,
          address: action.payload,
          updatedId: null,
        };
      default:
        return state;
    }
  };
  