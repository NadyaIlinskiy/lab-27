import React from "react";
import { connect } from "react-redux";


function Forms(props) {
    let formInputs = [];
    let buttons = [];

    if (props.json.jsonObj && props.json.jsonObj.forms) {
        props.json.jsonObj.forms.forEach((val, ind) => {
          
            if (val.type === "textarea") {
                formInputs.push(
                    <div className="form-group" key={ind}>
                        <h5 className="green"> <label htmlFor={val.id}>{val.label}:</label></h5>
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
           props.dispatch({
                type: "FORM_CHANGE",
                data: e.target[i].value ? e.target[i].value : "null",
                id: e.target[i].id
                });
        }
    }


    return (
        <div>
            {props.json.jsonObj.title ? <h1>{props.json.jsonObj.title}</h1> : <h1>"Dynamic Forms!"</h1>}
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
