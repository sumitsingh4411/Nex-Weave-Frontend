import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import clsx from 'clsx';
import menu from '../../assets/images/signal-solid.svg';
import settings from '../../assets/images/cog-solid.svg';
import rocket from '../../assets/images/rocket-solid.svg';
import campigns from '../../assets/images/volume-down-solid.svg';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {

        flexGrow: 1,
    },
    menuButton: {
        color: 'black',
        marginRight: theme.spacing(2),
    },
    title: {
        color: 'black',
        flexGrow: 1,
    },
    list: {
        width: 300,
    },
    fullList: {
        width: 300,
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };
    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <Typography style={{ marginLeft: 20, marginTop: 15, padding: 5 }}>
                <Typography>
                    <img src="https://nexweave-storage.s3.ap-south-1.amazonaws.com/media/images/logo-dark.png" alt="logo"
                        style={{ height: 50, marginLeft: 5 }}
                    />
                    <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
                        <Typography style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                            <img src={rocket} alt="settin" style={{ height: 20, marginRight: 30 }} />
                            <p style={{ fontWeight: 'bolder' }}>Get Started</p>
                        </Typography>
                    </Link>
                    <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
                        <Typography style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                            <img src={settings} alt="settin" style={{ height: 20, marginRight: 30 }} />
                            <p style={{ fontWeight: 'bolder' }}>Templates</p>
                        </Typography>
                    </Link>
                    <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
                        <Typography style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                            <img src={campigns} alt="settin" style={{ height: 20, marginRight: 30 }} />
                            <p style={{ fontWeight: 'bolder' }}>Campings</p>
                        </Typography>
                    </Link>
                    <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
                        <Typography style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                            <img src={settings} alt="settin" style={{ height: 20, marginRight: 30 }} />
                            <p style={{ fontWeight: 'bolder' }}>Interrogations</p>
                        </Typography>
                    </Link>
                    <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
                        <Typography style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                            <img src={settings} alt="settin" style={{ height: 20, marginRight: 30 }} />
                            <p style={{ fontWeight: 'bolder' }}>Manage Website</p>
                        </Typography>
                    </Link>
                    <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
                        <Typography style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                            <img src={settings} alt="settin" style={{ height: 20, marginRight: 30 }} />
                            <p style={{ fontWeight: 'bolder' }}>Settings</p>
                        </Typography>
                    </Link>
                </Typography>
                <Typography>

                </Typography>
            </Typography>
        </div>
    );
    //
    return (
        <div className={classes.root} style={{ marginLeft: state['left'] === true ? 300 : 0, }}>
            <AppBar position="static" style={{ background: '#0000' }}>
                <Toolbar>
                    {['left'].map((anchor) => (
                        <React.Fragment key={anchor}>
                            <Button onClick={toggleDrawer(anchor, true)}>
                                <img src={menu} alt="menu logo" style={{
                                    height: 20,
                                    transform: 'rotate(270deg)',
                                }} />

                            </Button>
                            <Drawer
                                BackdropProps={{ invisible: true }}
                                anchor={anchor}
                                open={state[anchor]}
                                onClose={toggleDrawer(anchor, false)}>
                                {list(anchor)}
                            </Drawer>
                        </React.Fragment>
                    ))}
                    <Typography variant="h6" className={classes.title}>
                        How are you doing today Inder?
                    </Typography>

                    <Typography style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <Typography variant="h7" className={classes.title} style={{ marginRight: 60 }}>
                            Web campign
                        </Typography>
                        <Typography variant="h7" className={classes.title} style={{ marginRight: 30 }}>
                            Creadits: 200
                        </Typography>
                        <Button color="black">Login</Button>
                        <Button color="black">Login</Button>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}
