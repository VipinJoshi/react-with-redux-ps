import React, { PropTypes } from 'react';

const TextInput = ({ name, label, onChange, placeHolder, value, error, type = "text" }) => {
    let wrapperClass = 'form-group';
    if (error && error.length > 0) {
        wrapperClass += ' ' + 'has-error';
    }
    return (
        <div className={wrapperClass}>
            <label htmlFor={name}>{label}</label>
            <div className="field">
                <input
                    type={type}
                    name={name}
                    className="form-control"
                    placeholder={placeHolder}
                    value={value}
                    onChange={onChange}
                />
                {error && <div className="alert alert-danger">{error} </div>}
            </div>
        </div>
    );
};

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeHolder: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.string,
    type: PropTypes.string
};

export default TextInput;