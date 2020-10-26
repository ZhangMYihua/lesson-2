import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ handlechange, label, ...otherProps }) => {
    return (
        <div className='group'>
            <input className='form-input' onChange={handlechange} {...otherProps} />
            {
                label ? (
                    <label className={`${otherProps.value ? 'shrink' : ''} form-input-label`}>
                        {label}
                    </label>
                )
                    : null
            }
        </div>
    )
}

export default FormInput;