import React from 'react'
import "./Error.css";

const Error = (props) => {
    return (
        <React.Fragment>
            <div className="backdrop" onClick={props.onConfirm} />
            <div className="modal">
                <header className="header">
                    <h2>{props.title}</h2>
                </header>
                <div className="content">
                    <p>{props.message}</p>
                </div>
                <footer className="actions">
                    <button onClick={props.onConfirm}>Okay</button>
                </footer>
            </div>
        </React.Fragment >
    )
}

export default Error
