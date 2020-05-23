import {
    makeStyles,
    createStyles,
} from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
    createStyles({
        formGroup: {
            padding: '20px 10px',
        },
    }),
);

export default useStyles;