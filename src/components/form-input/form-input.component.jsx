import React from 'react'
import "./form-input.styles.jsx"
import { FormInputLabel, Group, Input } from './form-input.styles.jsx'
export const FormInput = (props) => {
    const { label, ...otherProps } = props
    return (
        <Group>
            <Input {...otherProps} />
            {label && (
                <FormInputLabel
                    shrink={otherProps.value.length}>
                    {label}
                </FormInputLabel>
            )}

        </Group>

    )
}
