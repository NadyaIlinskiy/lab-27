import React from 'react';
import JsonForm from "./JsonForm";
import Forms from "./Forms";
import FormDataPrinter from "./FormDataPrinter"

import "../styles/styles.scss";

function App() {
    return(
        <div className="d-flex flex-row bd-highlight mb-3">
            <div className ="p-2 bd-highlight div">  <JsonForm /> </div>
            <div className ="p-2 bd-highlight div">  <Forms /></div>
            <div className="p-2 bd-highlight div">    <FormDataPrinter /> </div>
    </div>
    );
}

export default App;