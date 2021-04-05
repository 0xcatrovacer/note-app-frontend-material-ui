import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Drawer from '@material-ui/core/Drawer'
import Typography from '@material-ui/core/Typography'
import { useHistory, useLocation } from 'react-router-dom'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import CreateIcon from '@material-ui/icons/Create';
import NotesIcon from '@material-ui/icons/Notes';
import { format } from 'date-fns'
import axios from 'axios'


const drawerwidth = 240

const useStyles = makeStyles((theme) => {

    return {
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
        },
        title: {
            marginTop: 10,
            marginLeft: 15,
            marginBottom: 5
        },
        appbar: {
            width: `calc(100% - ${drawerwidth}px)`
        },
        appbarname: {
            marginRight: 10
        },
        toolbar: theme.mixins.toolbar,
        date: {
            flexGrow: 1
        },
        button: {
            marginLeft: 20
        }
    }

})

const Layout = ({ children }) => {
    const [username, setUsername] = useState('')

    const classes = useStyles()
    const history = useHistory()
    const location = useLocation()

    const token = localStorage.getItem('token')

    useEffect(async () => {

        await axios(`${process.env.REACT_APP_NOTERAPP_BACKEND}/users/me`, {
            method: 'GET',
            headers: { 'Authorization': `Bearer ${token}` }
        }).then((res) => {
            setUsername(res.data.username)
        }).catch((e) => {
            console.log(e.message)
        })
    }, [])

    const handleSignOut = () => {
        axios(`${process.env.REACT_APP_NOTERAPP_BACKEND}/logout`, {
            method: 'POST',
            headers: { 'Authorization': `Bearer ${token}` }
        })
        localStorage.removeItem('token')
        history.push('/')
    }

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

            <AppBar className={classes.appbar}>
                <Toolbar>
                    <Typography className={classes.date}>
                        {format(new Date(), 'do MMMM Y')}
                    </Typography>
                    <Typography className={classes.appbarname}>
                        welcome, {username}!
                    </Typography>
                    <Button variant='contained' className={classes.button} color='default' onClick={handleSignOut}>
                        Sign Out
                    </Button>
                    <Button variant='contained' className={classes.button} color='secondary'>
                        Delete Account
                    </Button>
                </Toolbar>
            </AppBar>

            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{ paper: classes.drawerPaper }}
                anchor="left"
            >
                <div>
                    <Typography variant='h5' className={classes.title} color='primary'>
                        Noter App
                    </Typography>
                </div>

                <List>
                    {menuItems.map((item) => (
                        <ListItem
                            button
                            key={item.text}
                            onClick={() => history.push(item.path)}
                            className={location.pathname === item.path ? classes.active : null}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>

            <div className={classes.page}>
                <div className={classes.toolbar}></div>
                {children}
            </div>
        </div>
    )
}

export default Layout
