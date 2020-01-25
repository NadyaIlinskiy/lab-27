import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

// JSON RELATED REDUCER

const FormPlaceholder = {
    title: "Dynamic Forms!",
    forms: [
    {
        type: "textarea",
        label: "Tell us about yourself",
        id: "txt"
    }
    ],
    buttons: [
        { type: "submit", label: "Push Me", id: "btn" }
    ]
};

const jsonInit = {
    jsonTxt: JSON.stringify(FormPlaceholder, undefined, 4),
    jsonObj: FormPlaceholder,
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
    let newState = { ...state };

    switch (action.type) {
        case "FORM_CHANGE":
            newState[action.id] = action.data;
            break;
        default:
            break;
    }

    return newState;
};

// combine reducers

const reducer = combineReducers({
    json: jsonReducer,
    form: formReducer,
});

export default createStore(reducer, applyMiddleware(thunk));
