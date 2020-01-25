import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

// JSON RELATED REDUCER

const jsonInit = {
    jsonTxt: '{}',
    jsonObj: {},
    isValid: true,
};

const isJsonValid = txt => {
    //JSON.parse >> throws an error if invalid json

    try {
        JSON.parse(txt);
    } catch (e) {
        return false;
    }

    return true;
};

const jsonReducer = (state = jsonInit, action) => {
    let newState = { ...state };

    switch (action.type) {
        case 'JSON_CHANGE':
            newState.jsonTxt = action.data;
            newState.isValid = isJsonValid(action.data);
            if (newState.isValid) newState.jsonObj = JSON.parse(action.data);
            break;
        default:
            break;
    }
    return newState;
};

// FORM RELATED REDUCER

const formInit = {};

const formReducer = (state = formInit, action) => {
    return state;
};

// combine reducers

const reducer = combineReducers({
    json: jsonReducer,
    form: formReducer,
});

export default createStore(reducer, applyMiddleware(thunk));
