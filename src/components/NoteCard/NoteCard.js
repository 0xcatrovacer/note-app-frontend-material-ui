import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';

const NoteCard = ({ note, handleDelete }) => {
    return (
        <div>
            <Card elevation={1}>
                <CardHeader
                    action={
                        <IconButton onClick={() => handleDelete(note._id)}>
                            <DeleteIcon color='primary' />
                        </IconButton>
                    }
                    title={note.title}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary">
                        {note.content}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default NoteCard
