import React from "react";
import { connect } from "react-redux";

function JsonForm (props) {
    let formInputs = [];

    if (props.jsonObj.inputs && props.jsonObj.inputs.length)
        props.jsonObj.inputs.forEach((val, ind) => {
            formInputs.push(
                <div key={ind}>Found Input of type {val.type}</div>,
            );
        });

    return (
        <div>
            {props.isValid ? <p>VALID JSON!</p> : <p>INVALID JSON!</p>}
            <textarea
                id='json-txt'
                value={props.jsonTxt}
                onChange={e => {
                    props.dispatch({
                        type: 'JSON_CHANGE',
                        data: e.target.value,
                    });
                }}
            />

            {formInputs}
        </div>
    );
}

const mstp = state => ({
    jsonTxt: state.json.jsonTxt,
    isValid: state.json.isValid,
    jsonObj: state.json.jsonObj,
});

export default connect(mstp)(JsonForm);
