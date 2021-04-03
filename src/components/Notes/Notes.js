import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

const Notes = () => {
    return (
        <div className="Notes">
            <Grid container>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper>a</Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper>b</Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper>c</Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper>d</Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default Notes