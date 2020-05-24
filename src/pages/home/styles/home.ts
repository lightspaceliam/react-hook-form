import {
    makeStyles,
    createStyles,
} from '@material-ui/core/styles';
import {
    h1
} from '../../../_common/styles';

const useStyles = makeStyles(() =>
    createStyles({
        h1: {
            ...h1,
        },
    }),
);

export default useStyles;