import React, { useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container';
import axios from 'axios';
import NoteCard from '../NoteCard/NoteCard';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
    notecontent: {
        marginTop: 20
    }
})

const Notes = () => {
    const classes = useStyles()

    const [notes, setNotes] = useState(null);

    useEffect(() => {

        callFn()
    }, [])

    const callFn = () => {
        const token = localStorage.getItem('token')

        axios.get(`${process.env.REACT_APP_NOTERAPP_BACKEND}/notes`, {
            headers: { 'Authorization': `Bearer ${token}` },
        }).then((res) => {
            setNotes(res.data)
        })
            .catch((err) => {
                console.log(err.message)
            })
    }

    const handleDelete = async (id) => {
        const token = localStorage.getItem('token')

        await axios(`${process.env.REACT_APP_NOTERAPP_BACKEND}/notes/${id}`, {
            method: 'DELETE',
            headers: { 'Authorization': `Bearer ${token}` }
        }).then((res) => {
            console.log(res)
        }).catch((e) => {
            console.log(e.message)
        })

        const newNotes = notes.filter((note) => note.id !== id)
        setNotes(newNotes)
    }



    return (
        <Container className={classes.notecontent}>
            <Grid container spacing={3}>
                {notes && notes.map((note) => (
                    <Grid item xs={12} sm={6} md={4} key={note._id}>
                        <NoteCard note={note} handleDelete={handleDelete} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default Notes