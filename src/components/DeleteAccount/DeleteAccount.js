import { Button, Container, makeStyles, Typography } from '@material-ui/core'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'

const useStyles = makeStyles({
    deleteaccount: {
        marginTop: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    title: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        marginBottom: 100,
        fontSize: 30
    },
    DelButton: {
        marginLeft: 10,
        marginRight: 10,
        paddingLeft: 50,
        paddingRight: 50,
        height: 40
    }
})

const DeleteAccount = () => {
    const [username, setUsername] = useState('')

    const classes = useStyles();
    const history = useHistory();
    const token = localStorage.getItem('token')

    const callfn = async () => {
        await axios.get(`${process.env.REACT_APP_NOTERAPP_BACKEND}/users/me`, {
            method: 'GET',
            headers: { 'Authorization': `Bearer ${token}` }
        }).then((res) => {
            setUsername(res.data.username)
        }).catch((e) => {
            console.log(e.message)
        })
    }

    useEffect(async () => {
        await callfn()
    }, [])

    const handleDeleteAccount = () => {
        axios(`${process.env.REACT_APP_NOTERAPP_BACKEND}/users/delete`, {
            method: 'DELETE',
            headers: { 'Authorization': `Bearer ${token}` }
        }).then((res) => {
            localStorage.removeItem('token')
            history.push('/')
            alert(res.data.message)
        }).catch((e) => {
            console.log(e)
        })
    }

    return (
        <Container className={classes.deleteaccount}>
            <Typography
                variant="h5"
                component="h2"
                color="primary"
                className={classes.title}
                gutterBottom
            >
                Are you sure you want to delete your account {username}? All your data will be lost!
            </Typography>

            <div className="DelButtons">
                <Button
                    variant='contained'
                    color='primary'
                    className={classes.DelButton}
                    onClick={() => {
                        history.push('/notes')
                    }}
                >
                    No
            </Button>
                <Button
                    variant='contained'
                    color='secondary'
                    className={classes.DelButton}
                    onClick={handleDeleteAccount}
                >
                    Yes
            </Button>
            </div>
        </Container>
    )
}

export default DeleteAccount
