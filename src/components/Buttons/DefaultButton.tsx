import React, { FC } from 'react';
import Button from '@material-ui/core/Button';

interface DefaultButtonProps {
    text: string;
}

const DefaultButton: FC<DefaultButtonProps> = ({
    text
}): JSX.Element => {

    return (
        <Button 
            variant='contained'
            color='primary'
            type='submit'>
            {text}
        </Button>
    );
};

export default DefaultButton;