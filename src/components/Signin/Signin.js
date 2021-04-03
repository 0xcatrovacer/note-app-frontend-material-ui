import React, { useState } from 'react'

import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Container from "@material-ui/core/Container"
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import { makeStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles({
    field: {
        marginTop: 20,
        marginBottom: 20,
        display: 'block',
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "white"
        },
        "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "lightgray"
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#4db5ff"
        },
        "& .MuiOutlinedInput-input": {
            color: "white"
        },
        "&:hover .MuiOutlinedInput-input": {
            color: "lightgray"
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
            color: "#4db5ff"
        },
        "& .MuiInputLabel-outlined": {
            color: "white"
        },
        "&:hover .MuiInputLabel-outlined": {
            color: "lightgray"
        },
        "& .MuiInputLabel-outlined.Mui-focused": {
            color: "#4db5ff"
        }
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


const Signin = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const classes = useStyles()

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const handleSignin = (e) => {
        e.preventDefault();
        console.log('Signin')
        setUsername('')
        setPassword('')
    }

    return (

        <div className="Signin">

            <div className="Create">
                <Container>
                    <Typography
                        variant="h5"
                        component="h2"
                        color="primary"
                        className={classes.title}
                        gutterBottom
                    >
                        Signin
                </Typography>

                    <form noValidate autoComplete='off' className='CreateNoteForm'>
                        <TextField
                            label='Username'
                            variant='outlined'
                            color='primary'
                            value={username}
                            onChange={(e) => {
                                setUsername(e.target.value)
                            }}
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
                            label='Password'
                            variant='outlined'
                            color='primary'
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                            fullWidth
                            required
                            className={classes.field}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={(e) => {
                                            e.preventDefault();
                                        }}
                                        value={showPassword}
                                    >
                                        {showPassword ? <Visibility color='primary' /> : <VisibilityOff color='primary' />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            endIcon={<KeyboardArrowRightIcon />}
                            onClick={handleSignin}
                        >
                            Sign In
                    </Button>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            endIcon={<KeyboardArrowRightIcon />}
                            onClick={handleSignin}
                        >
                            Create New Account
                    </Button>
                    </form>
                </Container>
            </div>

        </div>
    )
}

export default Signin
