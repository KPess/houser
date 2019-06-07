

const initialState = {
  name: "",
  address: "",
  city: "",
  state: "",
  zipcode: 0,
  image_url: "",
  monthly_rent: 0,
  monthly_mortgage: 0,
  houses: []
};

const UPDATE_NAME = "UPDATE_NAME";
const UPDATE_ADDRESS = "UPDATE_ADDRESS";
const UPDATE_CITY = "UPDATE_CITY";
const UPDATE_STATE = "UPDATE_STATE";
const UPDATE_ZIPCODE = "UPDATE_ZIPCODE";
const UPDATE_IMG = "UPDATE_IMG";
const UPDATE_MORTGAGE = "UPDATE_MORTGAGE";
const UPDATE_RENT = "UPDATE_RENT";


function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_NAME:
      return Object.assign({}, state, { name: action.payload });
    case UPDATE_ADDRESS:
      return Object.assign({}, state, { address: action.payload });
    case UPDATE_CITY:
      return Object.assign({}, state, { city: action.payload });
    case UPDATE_STATE:
      return Object.assign({}, state, { state: action.payload });
    case UPDATE_ZIPCODE:
      return Object.assign({}, state, { zipcode: action.payload });
    case UPDATE_IMG:
      return Object.assign({}, state, { image_url: action.payload });
    case UPDATE_MORTGAGE:
      return Object.assign({}, state, { monthly_mortgage: action.payload });
    case UPDATE_RENT:
      return Object.assign({}, state, { monthly_rent: action.payload });
    default:
      return state;
  }
}

export function updateName(name) {
  return {
    type: UPDATE_NAME,
    payload: name
  };
}

export function updateAddress(address) {
  return {
    type: UPDATE_ADDRESS,
    payload: address
  };
}

export function updateCity(city) {
  return {
    type: UPDATE_CITY,
    payload: city
  };
}

export function updateState(state) {
  return {
    type: UPDATE_STATE,
    payload: state
  };
}

export function updateZipcode(zipcode) {
  return {
    type: UPDATE_ZIPCODE,
    payload: zipcode
  };
}

export function updateImage(img) {
  return {
    type: UPDATE_IMG,
    payload: img
  };
}

export function updateRent(rent) {
  return {
    type: UPDATE_RENT,
    payload: rent
  };
}

export function updateMortgage(mortgage) {
  return {
    type: UPDATE_MORTGAGE,
    payload: mortgage
  };
}


export default reducer;
