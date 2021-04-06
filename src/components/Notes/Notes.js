import React, { useEffect, useState } from 'react'
import Container from '@material-ui/core/Container';
import axios from 'axios';
import NoteCard from '../NoteCard/NoteCard';
import { makeStyles } from '@material-ui/core';
import Masonry from 'react-masonry-css';


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

    const breakpoints = {
        default: 3,
        1100: 2,
        700: 1
    }

    return (
        <Container className={classes.notecontent}>
            <Masonry
                breakpointCols={breakpoints}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {notes && notes.map((note) => (
                    <div key={note._id}>
                        <NoteCard note={note} handleDelete={handleDelete} />
                    </div>
                ))}
            </Masonry>
        </Container>
    )
}

export default Notes