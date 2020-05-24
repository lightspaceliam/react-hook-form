/**
 * Common styles for use thoughout the app.
 */
import {
    red,
} from '@material-ui/core/colors';
import { CSSProperties } from '@material-ui/core/styles/withStyles';

/**
 * Colours.
 */
export const colourWhite: string = 'rgb(255,255,255)';
export const colourDarkestGrey: string = 'rgb(51,51,51)';
export const colourDanger: string = red[700];

/**
 * Default element style/s.
 */
export const h1 = {
    color: colourDarkestGrey,
	fontSize: '2rem',
    margin: '10px 0 26px',
};

export const h2 = {
    color: colourDarkestGrey,
	fontSize: '1.8rem',
    margin: '24px 0 20px',
};

export const anchor = {
    color: colourWhite,
	textDecoration: 'none'
};

export const errorMessage = {
    color: colourDanger,
    fontWeight: 'bold' as CSSProperties['fontWeight'],
    textAlign: 'center' as CSSProperties['textAlign'],
    padding: '10px 5px',
    backgroundColor: 'rgba(211,47,47,0.2)',
    width: '100%',
};