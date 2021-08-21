import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, Drawer, Card } from '@material-ui/core';
import clsx from 'clsx';
import menu from '../../assets/images/signal-solid.svg';
import settings from '../../assets/images/cog-solid.svg';
import rocket from '../../assets/images/rocket-solid.svg';
import campigns from '../../assets/images/volume-down-solid.svg';
import folder from '../../assets/images/folder-solid.svg';
import logout from '../../assets/images/sign-out-alt-solid.svg';
import task from '../../assets/images/tasks-solid.svg';
import './HeaderStyle.css';
import LinkStyle from '../common/link/LinkStyle';

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
        left: true,
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
            <Typography style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                <Typography style={{ flex: 2 }}>

                    <img src="https://nexweave-storage.s3.ap-south-1.amazonaws.com/media/images/logo-dark.png" alt="logo"
                        style={{ height: 50, marginLeft: 5, padding: 3, paddingLeft: 30 }}
                    />

                    <LinkStyle name="Getting Started" imagename={rocket} to="/other" />
                    <LinkStyle name="Templates" imagename={folder} to="/other" />
                    <LinkStyle name="Campings" imagename={campigns} to="/" />
                    <LinkStyle name="Interrogations" imagename={task} to="other" />
                    <LinkStyle name="Manage Website" imagename={folder} to="/other" />
                    <LinkStyle name="Settings" imagename={settings} to="/other" />



                </Typography>
                <Typography style={{ flex: 1, marginTop: 80 }}>
                    <Card style={{ width: '80%', height: 150, margin: 20, background: '#4D148C', color: 'white' }}>
                        <Typography style={{ textAlign: 'center', marginTop: 5, fontSize: 20, }}>Upgrade to Pro</Typography>
                        <Typography style={{ textAlign: 'center' }}>Read more</Typography>
                    </Card>
                    <Typography style={{ padding: 10, paddingLeft: 30 }}>
                        <img src={logout} alt="settin" style={{ height: 20, marginRight: 30 }} />
                    </Typography>
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
