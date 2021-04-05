import React, { useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container';
import axios from 'axios';
// import { makeStyles } from '@material-ui/core';
import NoteCard from '../NoteCard/NoteCard';

// const useStyles = makeStyles({
// note: {
//     marginTop: 20,
//     marginLeft: 30,
//     marginRight: 30,
//     width: 450,
//     height: 200,
//     display: 'flex',
//     flexDirection: 'column'
// },
// title: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingLeft: 75,
//     paddingTop: 25,
//     paddingBottom: 10,
//     fontSize: 25
// },
// content: {
//     display: 'flex',
//     justifyContent: 'center',
//     paddingTop: 25,
//     paddingLeft: 20,
//     paddingRight: 20,
//     paddingBottom: 0,
// },
// DelButton: {
//     marginLeft: 70,
//     cursor: 'pointer'
// }
// })

const Notes = () => {

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

        // const newNotes = notes.filter((note) => note.id != id)
        // setNotes(newNotes)
    }



    return (
        <Container>
            <Grid container spacing={3}>
                {notes && notes.map((note) => (
                    <Grid item xs={12} sm={6} md={4} key={note.id}>
                        <NoteCard note={note} handleDelete={handleDelete} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default Notes