import React, {
    forwardRef,
    Ref,
} from 'react';
import TextField from '@material-ui/core/TextField';

interface InputProps {
    name: string;
    label: string;
    errorMessage?: string | null | undefined;
}

const Input = forwardRef(
    ({
        name,
        label,
        errorMessage,
    }: InputProps, ref: Ref<HTMLInputElement>): JSX.Element => {

        return (
            <TextField 
                error={errorMessage !== undefined}
                id={`input-${name}`}
                label={label}
                name={name}
                inputRef={ref}
                helperText={errorMessage} />
        );
    }
);

export default Input;