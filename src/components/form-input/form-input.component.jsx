import React from 'react'
import "../form-input/form-input.styles.scss"
export const FormInput = (props) => {
    const { label, ...otherProps } = props
    return (
        <div className='group'>
            <input className='form-input' {...otherProps} />
            {label && (
                <label className={`${otherProps.value.length ? 'shrink' : null} form-input-label`}>{label}</label>
            )}

        </div>

    )
}
