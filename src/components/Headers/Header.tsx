import React, {
    FC,
    useState,
} from 'react';
import { useTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { ViewQuilt } from '@material-ui/icons';
import styles from './styles/header';

const Header: FC = (): JSX.Element => {
    const classes = styles();
    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = (): void => {
        setOpen(true);
    }

    const handleDrawerClose = (): void => {
        setOpen(false);
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position='fixed'
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        <Link to={`/`}
                            className={classes.appBarBrand}>Light Space Sandbox</Link>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                paper: classes.drawerPaper,
                }}>
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <ListItem button>
                        <ListItemIcon>
                            <ViewQuilt />
                        </ListItemIcon>
                        <ListItemText>
                            <Link to={`/react-hook-form`}
                                className={classes.anchors}>React Hook Form</Link>
                        </ListItemText>
                    </ListItem>
                </List>
            </Drawer>
        </div>
    );
};

export default Header;