import React from "react";
import { connect } from "react-redux";


function FormDataPrinter(props) {
    console.log("FORM value", props.form);

    return (
        <div>
            <h1>Here you go!</h1>

            {props.form.value}
  
        </div>
    );
}

const mstp = state => ({
    form: state.form
});

export default connect(mstp)(FormDataPrinter);
