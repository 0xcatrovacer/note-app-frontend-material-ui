import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import { useHistory } from 'react-router'

const NoteCard = ({ note }) => {

    const history = useHistory()

    return (
        <div>
            <Card elevation={1}>
                <CardHeader
                    action={
                        <IconButton onClick={() => history.push(`/deletenote/${note._id}`)}>
                            <DeleteIcon color='primary' />
                        </IconButton>
                    }
                    title={note.title}
                />
                <CardContent>
                    <Typography variant="body1" color="textSecondary" className='noteContent'>
                        {note.content}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default NoteCard
