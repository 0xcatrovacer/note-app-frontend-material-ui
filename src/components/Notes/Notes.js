import React, { useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import DeleteIcon from '@material-ui/icons/Delete';
import axios from 'axios';

const Notes = () => {

    const [notes, setNotes] = useState(null);

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

    useEffect(() => {

        callFn()
    }, [])


    return (
        <div className="Notes">
            <Grid container>
                {notes && notes.map((note) => (
                    <Grid item xs={12} sm={6} md={3}>
                        <Paper>
                            <h2>{note.title}</h2>
                            <div>{note.content}</div>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default Notes