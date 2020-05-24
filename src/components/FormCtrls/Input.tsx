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
    value?: string;
    onChange?: (value: string) => void;
}

const Input = forwardRef(
    ({
        name,
        label,
        errorMessage,
        value,
        onChange = () => null,
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
                className={classes.root}
                value={value}
                onChange={(event) => onChange(event.currentTarget.value)} />
        );
    }
);

export default Input;