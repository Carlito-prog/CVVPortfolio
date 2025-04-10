import React from 'react';
import { useField } from 'formik';

interface CustomInputProps {
    label?: string;
    name: string;
    type?: string;
    placeholder?: string;
    inputClassName?: string;
    outerDiv?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({ outerDiv, label, inputClassName, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <div className={outerDiv}>
            <label htmlFor={props.name}>{label}</label>
            <input {...field} {...props} className={inputClassName} />
            {meta.touched && meta.error ? (
                <div style={{ color: 'red' }}>{meta.error}</div>
            ) : null}
        </div>
    );
};

export default CustomInput;