import React, {
    FC,
    ReactNode,
} from 'react';
import Container from '@material-ui/core/Container';
import Header from '../Headers/Header';
import styles from './styles/layout';

interface LayoutProps {
    children: ReactNode;
}

const Layout:FC<LayoutProps> = ({
    children
}): JSX.Element => {
    const classes = styles();

    return (
        <div>
            <Header />
            <Container maxWidth='md' className={classes.main}>
                {children}
            </Container>
        </div>
    );
};

export default Layout;