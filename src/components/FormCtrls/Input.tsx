import React, {
    forwardRef,
    Ref,
} from 'react';
import TextField from '@material-ui/core/TextField';
import styles from './styles/input';

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
        const classes = styles();

        return (
            <TextField 
                error={errorMessage !== undefined}
                id={`input-${name}`}
                label={label}
                name={name}
                inputRef={ref}
                helperText={errorMessage}
                className={classes.root} />
        );
    }
);

export default Input;