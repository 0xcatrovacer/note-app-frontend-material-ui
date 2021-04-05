import React from 'react'
import { makeStyles } from '@material-ui/core'
import Drawer from '@material-ui/core/Drawer'
import Typography from '@material-ui/core/Typography'
import { useHistory, useLocation } from 'react-router-dom'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import CreateIcon from '@material-ui/icons/Create';
import NotesIcon from '@material-ui/icons/Notes';


const drawerwidth = 240

const useStyles = makeStyles({
    page: {
        width: '100%',
    },
    root: {
        display: 'flex',
    },
    drawer: {
        width: drawerwidth,
    },
    drawerPaper: {
        width: drawerwidth,
    },
    active: {
        background: '#f4f4f4',
    }
})

const SideDrawer = ({ children }) => {

    const classes = useStyles()
    const history = useHistory()
    const location = useLocation()


    const menuItems = [
        {
            text: 'My Notes',
            icon: <NotesIcon color="primary" />,
            path: '/notes'
        },
        {
            text: 'Create Note',
            icon: <CreateIcon color="primary" />,
            path: '/create'
        },
    ];


    return (
        <div className={classes.root}>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{ paper: classes.drawerPaper }}
                anchor="left"
            >
                <div>
                    <Typography variant='h5' classname={classes.title}>
                        Noter App
                    </Typography>
                </div>

                <List>
                    {menuItems.map((item) => (
                        <ListItem
                            button
                            key={item.text}
                            onClick={() => history.push(item.path)}
                            className={location.pathname == item.path ? classes.active : null}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>

            <div className={classes.page}>
                {children}
            </div>
        </div>
    )
}

export default SideDrawer
