import React, { useState } from 'react'

import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Container from "@material-ui/core/Container"
import { makeStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { useHistory } from 'react-router'
import axios from 'axios'

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
        width: 300,
        marginTop: 40,
        height: 50,
        paddingRight: 10,
        fontWeight: 700
    }
})


const Register = () => {

    const classes = useStyles()

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const history = useHistory()

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const handleRegister = (e) => {
        e.preventDefault();
        const user = { username, password }

        axios({
            method: 'POST',
            url: `${process.env.REACT_APP_NOTERAPP_BACKEND}/users`,
            headers: {
                "Content-Type": "application/json",
            },
            data: user
        }).then((res) => {
            console.log('User logged in')
            const token = res.data.token
            localStorage.setItem('token', token)
            history.push('/notes')
        }).catch((err) => {
            alert('Authentication failed')
            setUsername('')
            setPassword('')
        })
    }

    const handleLogin = () => {
        history.push('/')
    }

    return (

        <div className="Signin">
            <Container>
                <Typography
                    variant="h5"
                    component="h2"
                    color="primary"
                    className={classes.title}
                    gutterBottom
                >
                    Create a New Account
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
                        onClick={handleRegister}
                    >
                        Create an Account
                    </Button>
                    <Button
                        type="submit"
                        variant="contained"
                        color="default"
                        className={classes.button}
                        onClick={handleLogin}
                    >
                        Have an account? Sign In
                    </Button>
                </form>
            </Container>

        </div>
    )
}

export default Register
