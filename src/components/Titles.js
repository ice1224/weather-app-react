import React from "react";

const Titles = props => (
    <div>
        <h1 className="title-container__title">Weather App</h1>
        <p className="title-container__subtitle">Get current weather simply and accurately</p>
        <button className="scroll_down_button d-block d-md-none" onClick={props.scrollToForm}><i className="fas fa-chevron-down"></i></button>
    </div>
)

export default Titles;