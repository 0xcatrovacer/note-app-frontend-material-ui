import React from 'react'

import './Create.css'

import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Container from "@material-ui/core/Container"
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import { makeStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'

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

    const classes = useStyles()

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
                        className={classes.field}
                        InputLabelProps={{
                            className: "CreateInputLabel"
                        }}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
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
