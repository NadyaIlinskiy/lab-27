import React from "react";
import { connect } from "react-redux";

function JsonForm (props) {
    let formInputs = [];

    if (props.jsonObj.forms && props.jsonObj.forms.length)
        props.jsonObj.forms.forEach((val, ind) => {
            formInputs.push(
                <div key={ind}><h5 className="green">Found Form of type {val.type}</h5></div>,
            );
        });

    return (
        <div><h1>Add your Form!</h1>
            {props.isValid ? <h3 className="green">VALID JSON!</h3> : <h3 className="red">INVALID JSON!</h3>}
            <textarea
                id='txt'
                className="form-control"
                rows="17"
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
