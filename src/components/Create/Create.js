import React, { useState } from 'react'

import './Create.css'

import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Container from "@material-ui/core/Container"
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import { makeStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'

import axios from 'axios'
import { useHistory } from 'react-router'

const useStyles = makeStyles({
    field: {
        marginTop: 20,
        marginBottom: 20,
        display: 'block'
    },
    title: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        marginBottom: 100,
        fontSize: 30
    },
    button: {
        width: 200,
        marginTop: 40,
        height: 50,
        paddingRight: 0,
        fontWeight: 700
    }
})

const Create = () => {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const classes = useStyles()
    const history = useHistory()

    const note = { title, content }

    const handleCreate = async (e) => {
        e.preventDefault()

        const token = localStorage.getItem('token')

        await axios(`${process.env.REACT_APP_NOTERAPP_BACKEND}/notes`, {
            method: 'POST',
            headers: { 'Authorization': `Bearer ${token}` },
            data: note
        }).then((res) => {
            console.log(res.data)
            setTitle('')
            setContent('')
            history.push('/notes')
            alert(res.data.message)
        }).catch((e) => {
            console.log(e.message)
        })
    }

    return (
        <div className="Create">
            <Container>
                <Typography
                    variant="h5"
                    component="h2"
                    color="primary"
                    className={classes.title}
                    gutterBottom
                >
                    Create a New Note
            </Typography>

                <form noValidate autoComplete='off' className='CreateNoteForm'>
                    <TextField
                        label='Note Title'
                        variant='outlined'
                        color='primary'
                        fullWidth
                        required
                        value={title}
                        onChange={(e) => {
                            setTitle(e.target.value)
                        }}
                        className={classes.field}
                        InputProps={{
                            className: "CreateInput"
                        }}
                        InputLabelProps={{
                            className: "CreateInputLabel"
                        }}
                    />
                    <TextField
                        label='Note Content'
                        variant='outlined'
                        color='primary'
                        multiline
                        rows={6}
                        fullWidth
                        required
                        value={content}
                        onChange={(e) => {
                            setContent(e.target.value)
                        }}
                        className={classes.field}
                        InputLabelProps={{
                            className: "CreateInputLabel"
                        }}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        onClick={handleCreate}
                        className={classes.button}
                        endIcon={<KeyboardArrowRightIcon />}
                    >
                        Submit
                </Button>
                </form>
            </Container>
        </div>
    )
}

export default Create
