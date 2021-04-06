import { Button, Container, makeStyles, Typography } from '@material-ui/core'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router'

const useStyles = makeStyles({
    deletenote: {
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

const DeleteNote = () => {
    const [noteTitle, setNoteTitle] = useState('')

    const classes = useStyles();
    const history = useHistory();

    const { id } = useParams();
    const token = localStorage.getItem('token')

    const callfn = async (id) => {
        await axios.get(`${process.env.REACT_APP_NOTERAPP_BACKEND}/notes/${id}`, {
            method: 'DELETE',
            headers: { 'Authorization': `Bearer ${token}` }
        }).then((res) => {
            setNoteTitle(res.data.title)
        }).catch((e) => {
            console.log(e.message)
        })
    }

    useEffect(async () => {
        await callfn(id)
    }, [])

    const handleDeleteNote = async (id) => {

        await axios(`${process.env.REACT_APP_NOTERAPP_BACKEND}/notes/${id}`, {
            method: 'DELETE',
            headers: { 'Authorization': `Bearer ${token}` }
        }).then((res) => {
            history.push('/notes')
        }).catch((e) => {
            console.log(e.message)
        })
    }

    return (
        <Container className={classes.deletenote}>
            <Typography
                variant="h5"
                component="h2"
                color="primary"
                className={classes.title}
                gutterBottom
            >
                Are you sure you want to delete the note {noteTitle}?
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
                    onClick={() => handleDeleteNote(id)}
                >
                    Yes
            </Button>
            </div>
        </Container>
    )
}

export default DeleteNote
