import React from "react";
import { connect } from "react-redux";


function Forms(props) {
    let formInputs = [];
    let buttons = [];

    if (props.json.jsonObj && props.json.jsonObj.inputs) {
        props.json.jsonObj.inputs.forEach((val, ind) => {
            if (val.type === "text") {
                formInputs.push(
                    <div className="input-group mb-2" key={ind}>
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">
                                {val.label}
                            </span>
                        </div>

                        <input
                            className="formInput form-control"
                            aria-describedby="basic-addon1"
                            type={val.type}
                            id={val.id}
                        />
                    </div>
                );
            }

            if (val.type === "checkbox") {
                formInputs.push(
                    <div className="form-check form-check-inline" key={ind}>
                        <input
                            className="form-check-input formCheckbox"
                            id={val.id}
                            type={val.type}
                        />
                        <label className="form-check-label" htmlFor={val.label}>
                            {val.label}
                        </label>
                    </div>
                );
            }

            if (val.type === "textarea") {
                formInputs.push(
                    <div className="form-group" key={ind}>
                        <label htmlFor={val.id}>{val.label}:</label>
                        <textarea className="form-control" rows="5" id={val.id} />
                    </div>
                );
            }
        });
    }

    if (props.json.jsonObj && props.json.jsonObj.buttons) {
        props.json.jsonObj.buttons.forEach((val, ind) => {
            buttons.push(
                <div key={ind}>
                    <button
                        type={val.type}
                        className="btn btn-outline-secondary btn-lg"
                        id={val.id}
                    >
                        {val.label}
                    </button>
                </div>
            );
        });
    }

    function submit(e) {
        e.preventDefault();
        for (let i = 0; i < e.target.length; i++) {
            if (e.target[i].type === "text" || e.target[i].type === "textarea") {
                props.dispatch({
                    type: "FORM_CHANGE",
                    data: e.target[i].id.value ? e.target[i].id.value : "null",
                    id: e.target[i].id
                });
            }

            if (e.target[i].type === "checkbox") {
                props.dispatch({
                    type: "FORM_CHANGE",
                    data: e.target[i].checked.toString(),
                    id: e.target[i].id
                });
            }
        }
    }

    return (
        <div>
            {props.json.jsonObj.title ? <h1>{props.json.jsonObj.title}</h1> : ""}
            <form onSubmit={submit}>
                {formInputs}
                {buttons}
            </form>
        </div>
    );
}

const mstp = state => ({
    json: state.json,
    form: state.form
});

export default connect(mstp)(Forms);
