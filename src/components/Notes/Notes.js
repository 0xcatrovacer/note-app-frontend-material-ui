import React, { useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import axios from 'axios';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    note: {
        marginTop: 20,
        marginLeft: 30,
        marginRight: 30,
        background: 'black',
        boxShadow: '1px 1px 8px white',
        width: 450,
        height: 200,
        display: 'flex',
        flexDirection: 'column'
    },
    title: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 75,
        paddingTop: 25,
        paddingBottom: 10,
        fontSize: 25
    },
    content: {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: 25,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 0,
    },
    DelButton: {
        marginLeft: 70,
    }
})

const Notes = () => {

    const classes = useStyles()

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
        // <Container>
        <Grid container>
            {notes && notes.map((note) => (
                <Grid item xs={12} sm={6} md={4}>
                    <Paper className={classes.note}>
                        <Typography
                            variant="h3"
                            component="h2"
                            color="primary"
                            className={classes.title}
                        >
                            {note.title}
                            <DeleteIcon
                                color='secondary'
                                className={classes.DelButton}
                            />
                        </Typography>
                        <Typography
                            color="secondary"
                            className={classes.content}
                        >
                            {note.content}
                        </Typography>
                    </Paper>
                </Grid>
            ))}
        </Grid>
        // </Container>
    )
}

export default Notes